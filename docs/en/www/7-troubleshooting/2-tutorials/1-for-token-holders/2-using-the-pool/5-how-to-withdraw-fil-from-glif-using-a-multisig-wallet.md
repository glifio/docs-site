# How to withdraw FIL from GLIF using a multisig wallet

Withdrawing FIL from GLIF using a multisig wallet involves a two-step proposal process to ensure security and consensus among wallet signers. This tutorial will guide you through withdrawing your deposited FIL and converting your iFIL back to FIL.

In this tutorial, you will follow these two main steps:

1. Approve the GLIF pool to transfer your iFIL
2. Withdraw from the GLIF pool

***

### **Prerequisites**

In this tutorial, a GLIF multisig wallet with deposited FIL, holding iFIL, is created. If you have not set one up yet, refer to our [previous tutorial](/docs/troubleshooting/tutorials/for-token-holders/using-the-pool/how-to-deposit-fil-to-glif-using-multisig-wallet) on creating a multisig wallet and depositing FIL.

***

### **Step 1: Approve the Infinity Pool to Transfer Your iFIL**

1. **Access your multisig wallet**

Go to the [GLIF website](/) and navigate to the “**Multisig**” tab.

![Approve pool access](en-image-310.png)

Ensure your wallet is connected and you are viewing your multisig wallet.

![Approve pool access](en-image.png)

2. **Initiate the withdrawal approval**

Go to the “**Tokens**” section, click on the “**⋯**” button next to your iFIL balance. Select “**Withdraw from Pool**” from the dropdown menu.

![Withdraw button](en-image-327.png)

3. **Enter withdrawal amount**

Input the amount of iFIL you wish to withdraw. Click “**Approve**” to allow the GLIF Pool to transfer your iFIL.

> [!NOTE]
> In the left sidebar, you will see that Step 1, “**Approve the Infinity Pool to transfer your iFIL**” is highlighted.

![Approve pool access](en-image-1.png)

4. **Create the approval proposal**

A prompt will appear in your connected wallet. Confirm the transaction to create the approval proposal. This step may take a few minutes as the transaction is processed on the network.

You will be able to withdraw your iFIL once the multisig proposal to approve the transfer by the Infinity Pool is approved. There is a “**View Proposal**” button, click it.

![Proposal approval](en-image-2.png)

You should now see the pending multisig proposal. If not, navigate to the “**Multisig Proposals**” section in your multisig wallet interface.

![Approve pool access](en-image-343.png)

5. **Other signers connect wallet and access the proposal**

Now, **the proposer's wallet** should be disconnected. **Other signers** need to connect their wallets and approve the proposal.

Then, navigate to the “**Multisig Proposals**” section in your multisig wallet interface. Locate the pending proposal, created by the proposer (another wallet).

![Approve pool access](en-image-3.png)

6. **Other signers approve the proposal**

After selecting the proposal, click “**Approve Proposal**” and confirm the approval in the wallet prompt.

> [!NOTE]
> Each signer's wallet must have a small amount of FIL to cover the gas fee.

![Approve pool access](en-image-323.png)

7. **Confirmed approval**

Once the required number of signers have approved, the approval transaction will be executed.If you don't see immediate updates, try refreshing the page or reconnecting your wallet after a few minutes.

You can check the transaction details on the “**Transactions**” page at the bottom of the **Multisig** page, where the method column will display “**Approve**”.

![Approve pool access](en-image-277.png)

***

### **Step 2: Withdraw from the Infinity Pool**

After completing Step 1, the Infinity Pool is now allowed to transfer the specified amount of iFIL entered in Step 1.

1. **Initiate the withdrawal**

Return to the “**Tokens**” section in your multisig wallet. Click on the “**⋯**” button next to your iFIL balance and select “**Withdraw from Pool**” again.

![Withdraw button](en-image-324.png)

You should see a small checkmark next to “**Approve the Infinity Pool to transfer your iFIL**”. Then, you can proceed to **Step 2 to initiate the withdrawal!**

If you need to withdraw more than the previously approved amount, you will need to return to Step 1.

![Approve pool access](en-image-330.png)

2. **Confirm withdrawal**

You will now see step 2, “**Withdraw from the Infinity Pool**”. Confirm the details and click “**Withdraw**”.

![Withdraw button](en-image-4.png)

3. **Create another withdrawal proposal**

Confirm the transaction in the wallet to create the proposal.

Then, a new multisig proposal will be created for the withdrawal transaction. You can check the details of this proposal in the “**Multisig proposals**” section.

![Create multisig](en-image-5.png)

4. **Approve the Withdrawal Proposal**

Now, _similar to step 1_, **the proposer's wallet** should be disconnected. **Other signers** need to connect their wallets and approve the proposal.

Then, navigate to the “**Multisig Proposals**” section in your multisig wallet interface. Locate the pending proposal, created by the proposer's wallet. Click “**Approve proposal**” and confirm the approval in the **other signers' wallets.**

5. **Check the transactions**

Once the required number of signers have approved, the transaction will be executed. Please wait if you cannot see the transaction immediately, as it may take a few minutes for it to be confirmed on the network.

You can check the transaction details in the “**Transactions**” section at the bottom of the multisig page.

![Approve proposal](en-image-6.png)

6. **Complete the Withdrawal**

Once the required approvals are obtained, the withdrawal transaction will be executed. Your iFIL will be converted back to FIL and deposited to your multisig wallet. Check the “**Filecoin Balance**” section to confirm your updated FIL balance.

![FIL balance](en-image-7.png)

**Congratulations! You have successfully withdrawn your deposited FIL from GLIF using your multisig wallet.**

## **Conclusion**

By following this step-by-step guide, you can successfully withdraw your deposited FIL in the GLIF pool using a multisig wallet.

Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

If you want to learn how to **deposit** from the GLIF pool using a multisig wallet, refer to our previous tutorial [here](/docs/troubleshooting/tutorials/for-token-holders/using-the-pool/how-to-deposit-fil-to-glif-using-multisig-wallet).
