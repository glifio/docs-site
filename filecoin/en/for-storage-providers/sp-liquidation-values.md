---
description: >-
  Liquidation values are used within GLIF to determine borrow limits and
  liquidations
---

# SP Liquidation Values

## Understanding liquidation values

Every Filecoin Miner Actor owned by a Storage Provider has an associated liquidation value. The liquidation value can be computed as:

$$
LiquidationValue = MinerBalance - MinerMaxTerminationFee
$$

$$
MinerBalance = AvailableBalance + VestingBalance + InitialPledge
$$

Using an example, imagine the following hypothetical miner:

* Available balance: 10 FIL
* Pledged balance: 100 FIL
* Vesting balance: 20 FIL
* Maximum termination fee: 10 FIL

The total balance of this miner is 130 FIL, and its maximum termination fee 10 FIL. Therefore, it's liquidation value of this miner would be 120 FIL.

> [!IMPORTANT]
> **Storage Providers must keep close track of their liquidation value to determine borrowing limits and avoid liquidations.**

## Recovery rates

The recovery rate describes the portion of an SP's pledged FIL that would be recovered in a liquidation event. Recovery rate is computed as:

$$
RecoveryRate = (PledgeBalance - MaxTerminationFee) / PledgeBalance
$$

Using an example, imagine the following hypothetical miner:

* Pledged balance: 100 FIL
* Maximum termination fee: 10 FIL

This miner's recovery rate would be 90% - GLIF would expect to recover 90 FIL after liquidating this miner.

> [!NOTE]
> Although the termination penalty fee is a hypothetical estimate, it does not compromise protocol safety. With DTL capped at 90% for all Storage Providers, the liquidation value would need to be overstated by more than 10% before the position becomes undercollateralized, which provides a significant buffer against estimation error.
