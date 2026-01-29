# Uses of Borrowed FIL

1. To use as pledge collateral for Filecoin storage mining
2. To fund fiat denominated expenses like gas, payroll, rent

GLIF allows SPs to use FIL for both of these use cases. If you're looking for a quick answer on how much any Miner ID can borrow to use for sealing _or_ withdrawing outside of GLIF, you can use the borrow calculator here. (coming soon)

## Borrow FIL for storage mining

When an SP borrows FIL for storage mining, it can borrow more FIL from GLIF because the borrowed FIL is included in the SP's [liquidation value](sp-liquidation-values.md). Therefore, the SP is less restricted by the [debt-to-liquidation ratio (DTL)](borrowing-limits-and-dtl.md) because the SP's liquidation value grows simultaneously with its debt. For example, imagine the following scenario:

1. A Storage Provider comes to GLIF to borrow using a miner with 1000 FIL in liquidation value as collateral. To start, its debt-to-liquidation ratio (DTL) is 0%.
2. The SP borrows 100 FIL from GLIF, and transfers the 100 FIL to the miner who will use it for pledging new sectors. The 100 FIL is now sitting in the miner's Available Balance.
3. The SP's new DTL ratio is now 100 FIL / 1100 FIL or roughly 9%.

In the example above, SP's debt increased from 0 FIL to 100 FIL after it borrowed 100 FIL from GLIF. However, it's _liquidation value_ has also increased from 1000 FIL to 1100 FIL, since the miner received +100 FIL in its Available Balance after borrowing.

In this example, it becomes more clear why using borrowed FIL for sealing allows SPs to operate more efficiently with GLIF.

## Borrow FIL for withdrawing out of GLIF

When an SP borrows FIL for withdrawing outside of GLIF, it becomes restricted by DTL faster because borrowed FIL is _not_ included in the SP's liquidation value. The SP's liquidation value _decreases_ when an SP removes collateral from its miners. For example, imagine the following scenario:

1. A Storage Provider comes to GLIF to borrow using a miner with 1000 FIL in liquidation value as collateral. To start, its debt-to-liquidation ratio (DTL) is 0%.
2. The SP borrows 100 FIL from GLIF, and transfers the 100 FIL to an exchange address that will sell the FIL to pay for the SP's expenses. The 100 FIL has now been taken _outside_ of GLIF.
3. The SP's new DTL ratio is now 100 FIL / 1000 FIL or roughly 10%.

In the example above, the SP's debt has increased from 0 FIL to 100 FIL. However, it's liquidation value stayed the same (1000 FIL), since the newly borrowed FIL was taken _out_ of the system (rather than kept in the system and used for storage mining).

***

> [!IMPORTANT]
> Regardless of if an SP chooses to use borrowed FIL for storage mining or withdrawals outside of GLIF, the SP's DTL ratio must stay below 75% - 90% (Depends on whether the SP joined the [GLIF+ program](../glif+-storage-providers-loyalty-rewards/storage-provider-loyalty-card.md)) in order to be approved.

## Key takeaway:

When Storage Providers use borrowed FIL from GLIF for storage mining rather than withdrawing out of the system, they can get higher leverage.
