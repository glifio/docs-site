# How to claim cash back from GLIF+ SP Card

This tutorial explains how storage providers can claim FIL rewards from the cash back balance after paying interest. The cash back program is an efficient way for storage providers to lower borrowing costs. After each interest payment, the protocol swaps your $GLF into FIL at a premium determined by your tier. Up to 10% of each interest payment can be redeemed with $GLF, with Gold members receiving up to a +25% premium.

For more information about the different [tiers](/docs/glif-storage-providers-loyalty-rewards/tiers-and-limits) and how GLIF+ Cards benefit you, see [this page](/docs/glif-storage-providers-loyalty-rewards/benefits-for-storage-providers).

For other tutorials on managing your GLIF+ SP Card, see [this page](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials).

> [!NOTE]
> You can also add or withdraw funds in your GLIF+ cash back vault using the GLIF Command Line Interface (CLI). To do so, upgrade to the [latest release](https://github.com/glifio/glif/releases). You can find the instructions about the GLIF+ related command on the GLIF CLI on [this page](https://github.com/glifio/glif?tab=readme-ov-file#glif-loyalty-cards).

***
## Step-by-step Guide

1. Before claiming cash back, you must first pay the interest you owe. You do not need to pay the full amount of interest you owe.

![Interest payment screen](claim-cashback-image-1.png "500")

2. The amount of cash back rewards you receive depends on the amount of interest paid, the cash back percentage you set, and your tier. You can check these parameters in your Loyalty Card summary.

![Loyalty Card summary with cash back parameters](claim-cashback-image-2.png "500")

> [!NOTE]
> Check [this tutorial](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials/how-to-adjust-cash-back-percentage) for how to adjust the cash back percentage, and [this tutorial](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials/how-to-add-or-withdraw-from-your-cash-back-vault) for adding funds to your cash back vault.

3. After paying the interest, go to your Loyalty Card page. You will see the available reward FIL amount displayed.

4. Click **'Claim'**.

![Available FIL reward with Claim and Send buttons](claim-cashback-image-3.png "500")

5. Select the recipient address where the reward FIL should be sent.

6. Click **'Send'**.

![Recipient address selection](claim-cashback-image-4.png "500")

7. A **'ClaimCashBack'** proposal will be created automatically.

![ClaimCashBack proposal in Proposals tab](claim-cashback-image-5.png "500")

8. Connect each signer and approve the proposal. All signers must approve the proposal for it to be executed.


9. After the transaction is processed, the $GLF amount in your cash back balance vault will decrease and the reward FIL will be sent to the selected recipient address. Once the claim is completed, the cash back reward balance will reset to zero.

![Updated cash back balance after claim](claim-cashback-image-6.png "500")

***

## Conclusion

Your cash back rewards have been successfully claimed.

You may want to check out the other [tutorials](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials) to learn more about managing your GLIF+ SP Card.
