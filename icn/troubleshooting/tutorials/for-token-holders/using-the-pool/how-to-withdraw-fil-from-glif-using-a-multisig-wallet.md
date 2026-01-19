---
description: Step-by-step guide to withdrawing deposited FIL from a multisig wallet
---

# How to withdraw FIL from GLIF using a multisig wallet

Withdrawing FIL from GLIF using a multisig wallet involves a two-step proposal process to ensure security and consensus among wallet signers. This tutorial will guide you through withdrawing your deposited FIL and converting your iFIL back to FIL.

In this tutorial, you will follow these two main steps:

1. Approve the GLIF pool to transfer your iFIL
2. Withdraw from the GLIF pool

***

### **Prerequisites**

In this tutorial, a GLIF multisig wallet with deposited FIL, holding iFIL, is created. If you have not set one up yet, refer to our [previous tutorial ](how-to-deposit-fil-to-glif-using-multisig-wallet.md)on creating a multisig wallet and depositing FIL.

***

### **Step 1: Approve the Infinity Pool to Transfer Your iFIL**

1. **Access your multisig wallet**

Go to the [GLIF website](https://glif.io) and navigate to the "**Multisig"** tab.&#x20;

<div align="left"><figure><img src="../../../../.gitbook/assets/image (71).png" alt="" width="563"><figcaption></figcaption></figure></div>

Ensure your wallet is connected and you are viewing your multisig wallet.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (8).png" alt="" width="563"><figcaption></figcaption></figure></div>

2. **Initiate the withdrawal approval**

Go to the "**Tokens"** section, click on the **"⋯"** button next to your iFIL balance. Select **"Withdraw from Pool"** from the dropdown menu.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (88).png" alt=""><figcaption></figcaption></figure></div>

3. **Enter withdrawal amount**

Input the amount of iFIL you wish to withdraw. Click **"Approve"** to allow the GLIF Pool to transfer your iFIL.

{% hint style="info" %}
In the left sidebar, you will see that Step 1, **'Approve the Infinity Pool to transfer your iFIL'** is highlighted.&#x20;
{% endhint %}

<div align="left"><figure><img src="../../../../.gitbook/assets/image (9).png" alt="" width="563"><figcaption></figcaption></figure></div>

4. **Create the approval proposal**

A prompt will appear in your connected wallet. Confirm the transaction to create the approval proposal. This step may take a few minutes as the transaction is processed on the network.

You will be able to withdraw your iFIL once the multisig proposal to approve the transfer by the Infinity Pool is approved. There is a '**View Proposal**' button, click it.&#x20;

<div align="left"><figure><img src="../../../../.gitbook/assets/image (10).png" alt="" width="563"><figcaption></figcaption></figure></div>

You should now see the pending multisig proposal. If not, navigate to the **"Multisig Proposals"** section in your multisig wallet interface.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (104).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. **Other signers connect wallet and access the proposal**

Now, **the proposer's wallet** should be disconnected. **Other signers** need to connect their wallets and approve the proposal.&#x20;

Then, navigate to the **"Multisig Proposals"** section in your multisig wallet interface. Locate the pending proposal, created by the proposer (another wallet).

<div align="left"><figure><img src="../../../../.gitbook/assets/image (11).png" alt="" width="563"><figcaption></figcaption></figure></div>

6. **Other signers approve the proposal**

&#x20;After selecting the proposal, click '**Approve Proposal**' and confirm the approval in the wallet prompt.

{% hint style="info" %}
Each signer's wallet must have a small amount of FIL to cover the gas fee.
{% endhint %}

<div align="left"><figure><img src="../../../../.gitbook/assets/image (84).png" alt="" width="563"><figcaption></figcaption></figure></div>

7. **Confirmed approval**

Once the required number of signers have approved, the approval transaction will be executed.If you don't see immediate updates, try refreshing the page or reconnecting your wallet after a few minutes.

You can check the transaction details on the '**Transactions**' page at the bottom of the **Multisig** page, where the method column will display '**Approve**.'

<div align="left"><figure><img src="../../../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure></div>

***

### **Step 2: Withdraw from the Infinity Pool**

After completing Step 1, the Infinity Pool is now allowed to transfer the specified amount of iFIL entered in Step 1.&#x20;

1. **Initiate the withdrawal**

Return to the "**Tokens"** section in your multisig wallet. Click on the **"⋯"** button next to your iFIL balance and select **"Withdraw from Pool"** again.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure></div>

You should see a small checkmark next to '**Approve the Infinity Pool to transfer your iFIL"**. Then, you can proceed to **Step 2 to initiate the withdrawal!**

If you need to withdraw more than the previously approved amount, you will need to return to Step 1.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (91).png" alt="" width="352"><figcaption></figcaption></figure></div>

2. **Confirm withdrawal**&#x20;

You will now see step 2, **"Withdraw from the Infinity Pool"**. Confirm the details and click **"Withdraw"**.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (12).png" alt="" width="563"><figcaption></figcaption></figure></div>

3. **Create another withdrawal proposal**&#x20;

Confirm the transaction in the wallet to create the proposal.&#x20;

Then, a new multisig proposal will be created for the withdrawal transaction. You can check the details of this proposal in the "**Multisig proposals**" section.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (13).png" alt="" width="563"><figcaption></figcaption></figure></div>

4. **Approve the Withdrawal Proposal**

Now, _similar to step 1_, **the proposer's wallet** should be disconnected. **Other signers** need to connect their wallets and approve the proposal.&#x20;

Then, navigate to the **"Multisig Proposals"** section in your multisig wallet interface. Locate the pending proposal, created by the proposer's wallet. Click "**Approve proposal**" and confirm the approval in the **other signers' wallets.**

5. **Check the transactions**

Once the required number of signers have approved, the transaction will be executed. Please wait if you cannot see the transaction immediately, as it may take a few minutes for it to be confirmed on the network.&#x20;

You can check the transaction details in the **"Transactions"** section at the bottom of the multisig page.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (14).png" alt="" width="563"><figcaption></figcaption></figure></div>

6. **Complete the Withdrawal**

Once the required approvals are obtained, the withdrawal transaction will be executed. Your iFIL will be converted back to FIL and deposited to your multisig wallet. Check the "**Filecoin Balance"** section to confirm your updated FIL balance.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (15).png" alt="" width="375"><figcaption></figcaption></figure></div>

**Congratulations! You have successfully withdrawn your deposited FIL from GLIF using your multisig wallet.**

## **Conclusion**

By following this step-by-step guide, you can successfully withdraw your deposited FIL in the GLIF pool using a multisig wallet.&#x20;

Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

If you want to learn how to **deposit** from the GLIF pool using a multisig wallet, refer to our previous tutorial [here](how-to-deposit-fil-to-glif-using-multisig-wallet.md).

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).

