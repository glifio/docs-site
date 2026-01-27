
# Liquidations

## Managing Debt-to-Liquidity Ratio to Prevent Liquidation

### **Liquidation Threshold: Debt-to-liquidation (DTL) > 92%**

[DTL](borrowing-limits-and-dtl.md) measures the economic security of any SP in the GLIF system because it exposes the collateral status of SPs. A DTL < 100% means an SP is over-collateralized because a liquidation is expected to recover all interest and principal owed by the SP to the pool. In other words, a liquidation would recover >100% of assets owed to LPs.

SPs with a DTL ratio above 92% are in a critical risk zone for liquidation. Immediate corrective actions and proactive communication with the GLIF team are essential to avoid liquidation and minimize further losses.

In the event of a liquidation, all interest and principal is expected to be repaid to the pool on behalf of SPs. If there is excess FIL available after a liquidation, the GLIF treasury charges a 10% liquidation fee on top of the total interest + principal owed to the pool. Any excess FIL after LPs and the GLIF treasury are both repaid is returned to the SP.

> [!NOTE]
> Managing Storage Provider liquidations is currently manually enforced by the core GLIF team for the safety of Storage Providers. Algorithmic liquidations are coming soon, once a few new Filecoin Improvement Proposals are passed and built into the core Filecoin protocol.

### GLIF Administration - DTL > 75% to 90%

* SPs with a DTL ratio above 75% become eligible for "administration". During administration, borrowing and withdrawing are disabled, and GLIF is allowed to pay down the SP’s debt using any available balances on the SP’s miners. No terminations or penalties occur when a GLIF administrator pays down an SP’s debt. The goal of administration is to return the SP to good standing with GLIF  (DTL < 75%).
* Storage Providers who join the [GLIF+ program](/broken/pages/jt1R92FWbP8KSp3HrRV0) will be put in "administration" if they exceed their borrowing limit. If the SP joined the GLIF+ program as a Gold Card member, the administration threshold increases to 90%. Refer to the [tier and limit table](../glif+-storage-providers-loyalty-rewards/tiers-and-limits.md) for details.

## **Healthy SP criteria**

1. Debt-to-Liquidation (DTL) < 75% to 90% (Depends on [GLIF+ Card Tier](../glif+-storage-providers-loyalty-rewards/tiers-and-limits.md))
2. Faulty sectors <12% of all active sectors

> [!IMPORTANT]
> If an SP's DTL ratio goes above the limit, it is not immediately in danger of liquidation. However, the SP is eligible for administration. If an SP's DTL goes above 92%, it is in danger of liquidation. It is highly recommended to contact the GLIF team immediately if any SP's DTL ratio exceeds the limit.
