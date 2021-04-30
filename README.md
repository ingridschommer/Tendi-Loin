# Project 3 Outline

Project Title: 
- Tendie Loin

Team Members: 
- Bowie
- Ingrid
- Kaleb
- Kedar
- Max
- Ryan

Project Description: 
- Tendie Loin will be a protocol that you can stake ETH and get LOIN on a yield curve that is voted on by LOIN holders.

Objectives / Project Questions to Answer: 
- Create a decentralized protocol that rewards users with LOIN for staking ETH. LOIN will be the value of the depositors time. AKA Temporal Premia.

Data Sources (APIs, Datasets):
- Open Zepellin
- Chainlink Ethereum API

Rough Breakdown of Tasks:
- Create Smart Contract that distributes LOIN tokens to ETH depositers 
    - Define Supple
    - Define ETH/LOIN Conversion Ratio
- Create inital yeild rate 
    - .04167
- Create a way for LOIN token holders to vote on yield disbursement 
    - Create a timed voting function that weighs votes with totol LOIN held by voter
        - vote * (User Deposited LOIN)/(Total LOIN deposited for vote)
- Create UI
    - Googles Material Design UI
    - Compatible with Github pages
- Launch on Testnet
    - Ropsten
- Launch on Mainnet
    - Only if it is not too expensive 