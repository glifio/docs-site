# How to add or withdraw funds in your cash back vault

This tutorial explains how to add or withdraw $GLF funds from the cash back vault of your GLIF+ SP Card. The cash back vault stores the $GLF token used to cover part of your interest payments and receive FIL at a premium.

For other tutorials on managing your GLIF+ SP Card, see [this page](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials).

You can also add or withdraw funds in your GLIF+ cash back vault using the GLIF Command Line Interface (CLI). To do so, upgrade to the [latest release](https://github.com/glifio/glif/releases/tag/v2.5.3). You can find the instructions about the GLIF+ related command on the GLIF CLI on [this page](https://github.com/glifio/glif?tab=readme-ov-file#glif-loyalty-cards).

In this tutorial, you will be guided through the following steps:

1. Add fund to your cash back vault
2. Withdraw fund from your cash back vault

***

## Add funds to your cash back vault

1. Go to your Agents page and navigate to the **Summary** section of your Card.

2. Open the **'Cash Back Balance'** section and click the arrow icon.

3. Click the downward arrow to add funds.

4. Choose the source of the deposit. You may deposit from the Card Owner (the multisig wallet) or from your connected single-signature wallet.

![Cash back balance section with arrow icon](add-cashback-image-1.png)

5. Enter the amount you want to add to the cash back vault.

6. Click **'Approve GLF Transfer'** and confirm the approval request in your wallet.

![Approve GLF Transfer button](add-cashback-image-2.png)

> [!NOTE]
> If the funding source is your single-signature wallet instead of your Card Owner (the multisig wallet), no multisig wallet proposal will be generated. The GLF balance will be sent directly to the card.

7. Wait for the transaction to be processed. Then click **'Send'** again to execute the actual transfer of funds. Confirm in your wallet.

![Send button to execute the fund transfer](add-cashback-image-3.png)

8. Navigate to the **Proposals** tab. You will see two proposals: **'Approve'** and **'FundGlfVault'**.

![Proposals tab showing Approve and FundGlfVault proposals](add-cashback-image-4.png)

> [!WARNING]
> Approve the **'Approve'** proposal first, then approve the **'FundGlfVault'** proposal. Otherwise an error may occur.

9. Approve both proposals in every signer's account and confirm in the wallet. Wait 1 to 2 minutes for the on-chain process to complete.

![Approving both proposals](add-cashback-image-5.png)

10. Once processed, the cash back balance will be updated and the available amount increased.

![Updated cash back balance after adding funds](add-cashback-image-6.png)

***

## Withdraw funds from your cash back vault

1. Go to your Agents page and navigate to the **Summary** section of your Card.

2. Open the **'Cash Back Balance'** section and click the upward arrow to withdraw funds.

3. Choose the recipient of the withdrawal.

4. Enter the amount you want to remove from the cash back vault.

5. Click **'Send'**.

![Withdraw funds form with Send button](add-cashback-image-7.png)

6. Confirm in your wallet. Wait 1 to 2 minutes for the on-chain process to complete.

7. Approve the **'WithdrawGlfVault'** proposal in every signer's account and confirm in the wallet.

![WithdrawGlfVault proposal in Proposals tab](add-cashback-image-8.png)

8. Once processed, the cash back balance will be updated and the available amount reduced.

![Updated cash back balance after withdrawal](add-cashback-image-9.png)

***

## Conclusion

Your cash back vault has been successfully updated. You can now manage your GLF funding level and optimize how much FIL cash back you receive when paying interest with your GLIF+ SP Card.

You may want to check out the other [tutorials](/docs/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials) to learn more about managing your GLIF+ SP Card.
