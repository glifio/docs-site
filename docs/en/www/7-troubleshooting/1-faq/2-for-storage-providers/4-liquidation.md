# Liquidation

## What happens if an SP exceeds the **Debt-to-Liquidation (DTL)** limits?

If an SP's **DTL exceeds their limit**, all borrowing and withdrawing functionality will be temporarily disabled until the SP gets back into a healthy financial position. The SP is in the “**administration**” state. The SP is not at immediate risk of liquidation. The GLIF protocol can make payments on behalf of the SP to lower the SP's debt and help it get back into good standing.

If an SP exceeds the **DTL liquidation threshold (92%)**, it is then at risk of being liquidated. Immediate corrective actions and proactive communication with the GLIF team are essential to avoid liquidation and minimize further losses.

Read [here](/docs/for-storage-providers/liquidations) for more details.

## What tools are available to help SPs manage their borrowing limits?

GLIF provides a Borrowing Limit Calculator on their website to help SP calculate potential borrowing amounts based on their current financial ratios. (coming soon)

## In what situation can DTL exceed the limit (75-90%)?

There are two main reasons DTL can rise above its cap.

1. **Accumulated fault fees**\
   DTL may rise above the limit when an SP borrows up to the maximum and then accumulates ongoing fault fees on the Filecoin network. These fees are small but accumulate over time and can gradually push DTL above the limit.
2. **Interest accrual**\
   Interest accrual can also raise DTL. If an SP does not repay interest using rewards, the debt grows because debt equals principal plus interest. When interest increases faster than liquidation value, DTL can exceed the limit.

These increases usually happen slowly and can be detected by monitoring systems.
