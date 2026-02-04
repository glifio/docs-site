# Glossary

* **Administration:** SPs with a Debt-to-Liquidation (DTL) ratio above 75% are eligible to be put on “administration”, which allows GLIF to pay down the SP's debt using any available balances on the SP's miners. No terminations or penalties occur if a GLIF administrator pays down an SP's debt. Borrowing and withdrawal are also disabled. The goal of the administrator is to recover the SP into good standing with GLIF (DTL < 75%). Refer [here](/docs/3-for-storage-providers/5-liquidations) for details. Storage Providers who join the [GLIF+ program](/docs/5-glif+-storage-providers-loyalty-rewards/1-storage-provider-loyalty-card) will be put in “administration” if they exceed their borrowing limit. Refer to the [tier and limit table](/docs/5-glif+-storage-providers-loyalty-rewards/3-tiers-and-limits) for details.
* **Agents:** Agents are smart contracts on the FEVM that allow Storage Providers (SPs) to collateralize Filecoin Miner Actors (miners) in order to borrow FIL from GLIF. Agents act as intermediaries between SPs and GLIF, allowing SPs to maintain ownership and control over their miner(s) while borrowing from GLIF.  Refer [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for details.
* **Agent Police:** The Agent Police is a smart contract that ensures each Storage Provider adheres to the rules of the system. If an SP violates system rules, the Agent Police is responsible for preventing certain actions like borrowing and withdrawing, and in certain circumstances, is responsible for liquidating SPs to recover assets on behalf of LPs. Refer [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for details.
* **Agent Data Oracle (ADO):** An off-chain data aggregator within the GLIF protocol that collects real-time and historical data on SPs to facilitate secure and low-cost access to real-time data inside FEVM smart contracts. The ADO will be eventually phased out as the FEVM matures, and more real-time data is available on-chain. Refer [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for details.
* **APR (Annual Percentage Rate):** The annualized fee rate charged to Storage Providers, expressed as a percentage. Refer [here](/docs/3-for-storage-providers/6-borrowing-cost) for details.
* **Borrowing Limits:** Borrowing limit means the maximum amount for SP to borrow and use for sealing, which is not the same as the amount available for withdrawal, as the Debt-to-Liquidation (DTL)  will be affected when SP withdraw from GLIF. Refer [here](/docs/3-for-storage-providers/4-uses-of-borrowed-fil) for details. The maximum DTL ratio for an SP when they can borrow from GLIF is 75%, which means an SP's debt cannot exceed 75% of its liquidation value. Refer [here](/docs/3-for-storage-providers/3-borrowing-limits-and-dtl) for details. Storage Providers who join the [GLIF+ program](/docs/5-glif+-storage-providers-loyalty-rewards/1-storage-provider-loyalty-card) as Gold Card holders can borrow up to a 90% DTL. Refer [here](/docs/5-glif+-storage-providers-loyalty-rewards/3-tiers-and-limits) for tier and limits of GLIF+ program.
* **Debt-to-Liquidation (DTL):** This ratio determines the amount an SP can borrow based on their liquidation value. Refer [here](/docs/3-for-storage-providers/3-borrowing-limits-and-dtl) for details. It is computed as:

$$
DTL = Principal + Interest Owed/Liquidation Value
$$

* **Debt Value:** SP's outstanding principal plus any unpaid interest.
* **Exit:** The process by which iFIL holders can withdraw FIL from GLIF at any time, provided that the pool has sufficient liquidity to process the withdrawal. Refer [here](/docs/2-for-liquidity-providers/3-exit-withdraw-fil) for details.
* **GLIF:** GLIF is the foundational DeFi primitive of Filecoin - enabling Filecoin token holders to earn sustainable rewards on their FIL by lending (aka “leasing”) it to a diverse pool of Filecoin miners (also known as “Storage Providers”). Storage Providers borrow FIL to use as pledge collateral in Filecoin mining, which helps Storage Providers grow and simultaneously improves the security of the Filecoin network. GLIF is Filecoin's first and most popular DeFi protocol. Refer [here](/docs/1-introduction) for details.
* **Guarantors:** A model allows a single SP to aggregate multiple Miner Actors together, aggregating its equity and borrowing power. This architecture allows a big Miner Actor with a large equity value to post collateral for a much smaller node to borrow funds. Refer [here](/docs/3-for-storage-providers/8-guarantor-model) for details.
* **iFIL:** iFIL is GLIF's reward token - an ERC20 token deployed on FEVM. Liquidity Providers (LPs) hold iFIL tokens to earn rewards. Refer [here](/docs/2-for-liquidity-providers/2-glif-reward-mechanism-ifil) for details. The current iFIL price is computed as:

$$
iFIL Price=(PoolTotalDeposits+PoolExpectedEarnings)/iFIL Circulating Supply
$$

* **Liquidation Threshold:** SPs with a DTL ratio above 92% are in a critical risk zone for liquidation. Immediate corrective actions and proactive communication with the GLIF team are essential to avoid liquidation and minimize further losses. Refer [here](/docs/3-for-storage-providers/5-liquidations) for details.
*   **Liquidation Value:** The estimated value of a Storage Provider's miners that could be recovered if the miner's sectors were terminated, calculated after considering termination fee. Refer [here](/docs/3-for-storage-providers/2-sp-liquidation-values) for details. It is computed as:

    $$
    LiquidationValue = MinerBalance - MinerMaxTerminationFee
    $$

$$
MinerBalance = AvailableBalance + VestingBalance + InitialPledge
$$

* **Liquidity Providers:** A FIL token holder that has deposited FIL into GLIF and actively holds iFIL. Refer [here](/docs/1-introduction/1-protocol-users) for details of what they can do with GLIF.
* **Liquidity Reserve:** The pool maintains a 10% asset reserve specifically for facilitating iFIL exit. Refer [here](/docs/2-for-liquidity-providers/3-exit-withdraw-fil) for details.
* **Miner:** In the context of the Filecoin project, a miner refers to the built-in Filecoin Miner Actor responsible for managing storage mining operations and providing proofs. One Storage Provider may run more than one Filecoin Miners.
* **Owner and Operator Key:** The GLIF protocol utilizes two distinct keys for managing Agent smart contracts. Only the Storage Provider should have access to these keys, and it's important to keep them private and safe. Refer [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for details.
* **Recovery Rate:** The portion of an SP's pledged FIL that would be recovered in a liquidation event. Refer [here](/docs/3-for-storage-providers/2-sp-liquidation-values) for details. Computed as:

$$
RecoveryRate = (PledgeBalance - MaxTerminationFee) / PledgeBalance
$$

* **Storage Providers (SPs):** Storage Providers (SPs) are individuals or organizations operating one or more [Filecoin Miner Actors](https://spec.filecoin.io/systems/filecoin_mining/storage_mining/) (“Miner”). Refer [here](/docs/1-introduction/1-protocol-users) for details of what they can do with GLIF.
* **Termination Fee:** The amount of FIL that would be lost in a liquidation scenario.
*   **Withdrawal:** Storage Providers can withdraw FIL to fund fiat denominated expenses like gas, payroll, rent. When an SP borrows FIL for withdrawing outside of GLIF, it becomes restricted by DTL faster because borrowed FIL is _not_ included in the SP's liquidation value. Refer [here](/docs/3-for-storage-providers/4-uses-of-borrowed-fil) for details.
