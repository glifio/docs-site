---
description: How GLIF works to minimize risks
---

# Risks

## Smart contract risk

With any DeFi protocol, the risks of malicious hacks and bugs must be considered. While these risks naturally decrease over time as the protocol proves its resilience.

To mitigate smart contract risk, GLIF:

* has undergone multiple professional security audits
* constantly monitors the protocol for unusual activity and behavior
* controls admin functionality to pause the contracts in case of malicious behavior or attacks
* continuously runs ongoing live data checks to ensure the contracts are operating correctly

## Financial Math risk

In the previous [section](asset-security.md), we discussed liquidation value—the FIL recovered in a liquidation event. A key risk is overestimating the liquidation value of a specific Storage Provider (SP) in the system. In the case of a liquidation value overestimation, the protocol may recover less assets in a liquidation than expected, which could create losses for Liquidity Providers (LP).

To mitigate the possibility of overestimation, GLIF monitors are continuously simulating Miner liquidations to check results every 24 hours. Additionally, we written and passed [FIP-98](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0098.md), which massively simplifies the calculation of liquidation values across the network of Storage Providers, making overestimation a very unlikely scenario.
