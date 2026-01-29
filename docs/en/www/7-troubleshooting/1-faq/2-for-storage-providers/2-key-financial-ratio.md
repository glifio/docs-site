# Key Financial Ratio

## What are the key ratios used to determine borrowing limits?

[Debt-to-Liquidation (DTL)](../../../for-storage-providers/borrowing-limits-and-dtl.md) ratio must be less than 75%. If the SP joined the [GLIF+ program](../../../glif+-storage-providers-loyalty-rewards/storage-provider-loyalty-card.md) as a Gold Card member, the DTL increases to 90%. Read [here](../../../for-storage-providers/borrowing-limits-and-dtl.md) for more details.

## What is “liquidation value” and how is it calculated?

[Liquidation value](../../../for-storage-providers/sp-liquidation-values.md) is the estimated worth of an SP's miners if their sectors were terminated, accounting for penalties and other losses. It is computed as:

$$
LiquidationValue = MinerBalance - MinerMaxTerminationPenalty
$$

$$
MinerBalance = AvailableBalance + VestingBalance + InitialPledge
$$

## How is the Debt-to-Liquidation (DTL) ratio calculated?

[DTL](../../../for-storage-providers/borrowing-limits-and-dtl.md) is computed as:

$$
DTL = Debt / LiquidationValue
$$

## **What is the meaning of 1x, 2x, 3x leverage on the Agent's dashboard?**

These values represent the inverse of the DTL ratio. For example, a 75% DTL corresponds to roughly 4x leverage on collateral.

## **If I try to borrow and withdraw 10,000 FIL, and borrow from sealing, how much can I still borrow from GLIF?**

To determine how much you can borrow from GLIF, you need to understand the [Debt-to-Liquidation (DTL) ratio](../../../for-storage-providers/borrowing-limits-and-dtl.md). DTL ratio must be less than 75%. If the SP joined the [GLIF+ program](../../../glif+-storage-providers-loyalty-rewards/storage-provider-loyalty-card.md) as a Gold Card member, the DTL increases to 90%. Read [here](../../../for-storage-providers/borrowing-limits-and-dtl.md) for more details.\
The DTL ratio is calculated as:

$$
DTL = Debt / LiquidationValue
$$

Let's take a look at how borrowing for sealing and withdrawing affect your DTL ratio:

1. **Borrowing FIL for sealing:**
   * When you borrow FIL for sealing, the borrowed amount is **added** to your Agent.
   * You **keep** the FIL within your Agent and its miners.
   * Both your **debt** and **liquidation value** **increase** by the borrowed amount.

> [!NOTE]
> Pledged FIL from sealing incurs a hypothetical “termination fee” - which is the amount of FIL that would be lost in a liquidation scenario. As a result, using borrowed FIL for sealing slightly decreases the Agent's liquidation value. However, the Agent's liquidation value increases every time one of its miners' earns a block reward.

2. **Borrow FIL for withdrawing:**
   * When you borrow FIL for withdrawing, the borrowed amount is **removed** from your Agent.
   * Your **debt** increases, but your **liquidation value decreases** by the withdrawn amount.

> [!NOTE]
> Your DTL will gradually rise as interest accumulates.

### Key Takeaways:

Borrowing FIL for sealing on one of your Agent's miners allows you to get higher leverage - withdrawing FIL from your Agent significantly increases its DTL. Always remember to keep your DTL under 75%.

For detailed uses of borrowed FIL, read [here](../../../for-storage-providers/uses-of-borrowed-fil.md) for more details.

### Example:

Let's imagine the following scenario:

* **Agent Debt:** 100 FIL
* **Agent Liquidation Value:** 200 FIL
* **DTL:** 50%

If you **borrow 100 FIL**:

* **New Agent Debt:** 200 FIL
* **New Agent Liquidation Value:** 300 FIL
* **New DTL:** 66% ✅

Now, if you use that 100 FIL for sealing, your DTL remains at 66%, allowing you to borrow more while the DTL is within 75%.

However, if you decide to **withdraw 100 FIL** instead:

* **Agent Debt:** 200 FIL
* **Agent Liquidation Value:** 200 FIL
* **DTL:** 100% ❌

In this case, you cannot withdraw 100 FIL because the DTL is above 75%.

As you can see, withdrawing the FIL increases your DTL ratio much faster, which can limit your borrowing capacity.
