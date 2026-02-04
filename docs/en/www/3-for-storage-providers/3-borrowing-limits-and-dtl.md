# Borrowing Limits & DTL

## Debt-to-liquidation (DTL) ratio

Borrowing limits on GLIF are determined by the “debt-to-liquidation” value ratio, or “DTL” for short.

Computing DTL requires two other metrics:

1. Debt - the SP's outstanding principal plus any unpaid interest
2. Liquidation value - the SP's “collateral value” (defined [here](/docs/for-storage-providers/sp-liquidation-values))

$$
DTL = Debt / LiquidationValue
$$

$$
Debt = Principal + Interest
$$

$$
LiquidationValue = MinerBalance - MinerMaxTerminationPenalty
$$

DTL < 100% means that, in a liquidation scenario, GLIF will recover all principal and interest owed to GLIF.

## Borrow limit: DTL > 75-90%

* To borrow from GLIF, the **maximum DTL ratio ranges from 75% to 90%,** depending on whether the Storage Provider joins the [GLIF+ program](/docs/glif-storage-providers-loyalty-rewards/storage-provider-loyalty-card).
  * If the Storage Provider does not join the GLIF+ program, the maximum DTL is 75%, meaning their debt cannot exceed 75% of their liquidation value.
  * Storage Providers who join the [GLIF+ program](/docs/glif-storage-providers-loyalty-rewards/storage-provider-loyalty-card) as Gold Card holders can borrow up to a 90% DTL. Details of GLIF+ program are shown in the [Tiers and Limits table](/docs/glif-storage-providers-loyalty-rewards/tiers-and-limits).
* If a Storage Provider's DTL ratio goes above the limit, it is not immediately in danger of liquidation. However, they are eligible to be put on “**administration**” and all borrowing and withdrawals of rewards are disabled until the DTL returns to below the limit.
* If a Storage Provider's **DTL goes above 92%, it is in danger of liquidation**. It is highly recommended to contact the GLIF team immediately if any SP's DTL ratio exceeds the limit.

![Borrow limit: DTL >](en-image-280.png)

> [!WARNING]
> This graph illustrates the situation for SPs who did not join the GLIF+ program. For those who joined the [GLIF+ program](/docs/glif-storage-providers-loyalty-rewards/storage-provider-loyalty-card), please refer to the [tier and limit table](/docs/glif-storage-providers-loyalty-rewards/tiers-and-limits) for details.
