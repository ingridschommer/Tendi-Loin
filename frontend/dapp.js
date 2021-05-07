// @TODO: Update this address to match your deployed Tendi Loin contract!
const contractAddress = "0xbd4fE1B5C92c396eeE3AA01dB04F7E1f0c212EE6";

const dApp = {
  ethEnabled: function() {
    // If the browser has an Ethereum provider (MetaMask) installed
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  },
  collectVars: async function() {
    // get yield rate and total supply
    this.yield_rate = await this.loinContract.methods.yield_rate().call();
    this.totalSupply = await this.loinContract.methods.totalSupply().call();
    // get token balance and eth balance
    this.tokenBalance = await this.loinContract.methods.balance().call();
    this.ethBalance = await this.loinContract.methods.ethBalance().call();
  },

  setAdmin: async function() {
    // if account selected in MetaMask is the same as owner then admin will show
    if (this.isAdmin) {
      $(".dapp-admin").show();
    } else {
      $(".dapp-admin").hide();
    }
  },

  updateUI: async function() {
    console.log("updating UI");
    // refresh variables
    await this.collectVars();

    // hide or show admin functions based on contract ownership
    this.setAdmin();
  },
  // change to stake
  stake: async function(event) {
    const wei = Number($(event.target).prev().val());
    await this.loinContract.methods.deposit({from: this.accounts[0], value: wei}).on("receipt", async (receipt) => {
      M.toast({ html: "Deposit Complete! Refreshing UI..." });
      await this.updateUI();
    });
  },
  // change to withdraw
  withdraw: async function(event) {
    await his.loinContract.methods.withdraw().send({from: this.accounts[0]}).on("receipt", async (receipt) => {
      M.toast({ html: "Withdraw Successful! Refreshing UI..." });
      await this.updateUI();
    });
  },

  main: async function() {
    // Initialize web3
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }
    // get account from web3
    this.accounts = await window.web3.eth.getAccounts();
    this.contractAddress = contractAddress;
    // load loin contract's abi
    this.loinJson = await (await fetch("./loin.json")).json();
    // load contract from web3
    this.loinContract = new window.web3.eth.Contract(
      this.loinJson,
      this.contractAddress,
      { defaultAccount: this.accounts[0] }
    );
    // log that you created the contract
    console.log("Contract object", this.loinContract);
    // generate a boolean that tells us whether we are the admin or not
    this.isAdmin = this.accounts[0] == await this.loinContract.methods.owner().call();
    // asynchronously call the update UI function
    await this.updateUI();
  }
};

dApp.main();
