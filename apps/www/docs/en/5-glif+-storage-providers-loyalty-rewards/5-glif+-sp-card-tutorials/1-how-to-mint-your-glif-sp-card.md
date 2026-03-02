# How to mint your GLIF+ SP Card

This tutorial explains how to mint a GLIF+ Storage Provider Card on the GLIF website using your Agent's multisig wallet. For more information about the different [tiers](/glif-storage-providers-loyalty-rewards/tiers-and-limits) and how GLIF+ Cards benefit you, see [this page](/glif-storage-providers-loyalty-rewards/benefits-for-storage-providers).

For other tutorials on managing your GLIF+ SP Card, see [this page](/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials).

> [!NOTE]
> You can also add or withdraw funds in your GLIF+ cash back vault using the GLIF Command Line Interface (CLI). To do so, upgrade to the [latest release](https://github.com/glifio/glif/releases). You can find the instructions about the GLIF+ related command on the GLIF CLI on [this page](https://github.com/glifio/glif?tab=readme-ov-file#glif-loyalty-cards).

In this tutorial, you will be guided through the following steps:

- [Step 1: Select your Agent](#step-1-select-your-agent)
- [Step 2: Select your tier](#step-2-select-your-tier)
- [Step 3: Enter cash back vault amount](#step-3-enter-cash-back-vault-amount)
- [Step 4: Mint and Activate](#step-4-mint-and-activate)
- [Step 5: Approve the first multisig proposal](#step-5-approve-the-first-multisig-proposal)
- [Step 6: Approve the second multisig proposal](#step-6-approve-the-second-multisig-proposal)
- [Step 7: View your minted Card](#step-7-view-your-minted-card)

***

## Step 1: Select your Agent

1. Connect your wallet and navigate to the **'Loyalty'** tab of your Agent page on the GLIF website.

2. Click **'Mint'**.

![Loyalty tab with Mint button](mint-sp-image-1.png)

***

## Step 2: Select your tier

1. The Agent address should already be pre-filled. If not, enter your **Agent address** to continue.

2. Choose your desired tier from **Bronze, Silver, or Gold**.

2. Review the details to compare leverage, exchange TWAP benefits, and the stake requirement, which indicates how many $GLF tokens you must stake to activate the selected tier.
![Agent address pre-filled](mint-sp-image-2.png)



> [!NOTE]
> Higher tiers provide stronger benefits such as higher TWAP exchange rates and higher borrowing leverage. For example, the Gold tier offers a maximum Debt to Liquidation ratio of 90%. For explanations of terms such as exchange TWAP or maximum leverage, refer to [this page](/glif-storage-providers-loyalty-rewards/tiers-and-limits).



***

## Step 3: Enter cash back vault amount

1. Enter the amount of $GLF you want to put into the cash back vault.

The maximum amount shown here represents the $GLF you have, after deducting the mint cost and the stake requirement to deposit into the cash back vault. 
![Tier selection with comparison table](mint-sp-image-3.png)

>[!NOTE]
> GLF in this vault allows you to cover part of each interest payment and receive FIL at a premium. You may add or withdraw GLF from the vault at any time. Funding the vault is optional and not required to mint the card.




***

## Step 4: Mint and Activate

1. Review the three cost components:
   - **Mint cost**: 5000 $GLF, non-refundable.
   - **Staking requirement**: $GLF required to stake for the selected tier.
   - **Cash back vault funding**: $GLF you choose to deposit for the cash back mechanism.

2. Click **'Mint and activate'**.
![Tier comparison details](mint-sp-image-4.png)

3. Review the details and click **'Approve'**.

![Mint and Activate button with cost summary](mint-sp-image-6.png)

4. Confirm the transaction in your wallet. Wait one to two minutes for the transaction to process.

5. After the approval transaction is successfully submitted and confirmed, the active purple icon switches from **'Approve'** to **'Mint'**. Click **'Mint'** to generate another proposal.

![Cash back vault amount entry](mint-sp-image-5.png)



***

## Step 5: Approve the first multisig proposal

1. After clicking **'Mint'**, wait until the transaction is finished.

2. Go to your Agent and open the **'Proposals'** tab.

3. The system will generate a multisig **'Approve'** proposal and a **'MintActivateAndFund'** proposal.

![Approve then Mint button flow](mint-sp-image-7.png)



4. Connect the wallet of the next signer. Locate the **'Approve'** proposal in the Agent page.

5. Click **'Approve proposal'** and confirm in your wallet.

![Proposals tab showing Approve and MintActivateAndFund proposals](mint-sp-image-8.png)

6. Connect each signer and approve the proposal. All signers must approve the proposal for it to be executed. Wait one to two minutes for the transaction to process.



> [!WARNING]
> If you see an error at this stage, it is because the **'MintActivateAndFund'** proposal cannot be approved until the **'Approve'** proposal is approved by all other signers. Please wait until the **'Approve'** proposal is fully approved before proceeding.
![Approve proposal button](mint-sp-image-9.png)

***

## Step 6: Approve the second multisig proposal

1. After the first proposal is approved, return to the **'Proposals'** tab.

2. Locate the **'MintActivateAndFund'** proposal.

![Error message for premature MintActivateAndFund approval](mint-sp-image-10.png)

3. Click **'Approve proposal'** and confirm in your wallet.

![MintActivateAndFund proposal](mint-sp-image-11.png)

4. Repeat this step for all remaining signers.

5. Wait one to two minutes for the transaction to process.

***

## Step 7: View your minted Card

1. After both proposals are approved, return to the **'Loyalty'** tab.

2. You should now see your GLIF+ SP Card minted and showing the tier you selected.

![Minted GLIF+ SP Card](mint-sp-image-12.png)

***

## Conclusion

Your GLIF+ SP Card has been successfully minted and activated. You can now use your selected tier to access higher borrowing limits, redeem GLF for FIL at a premium TWAP rate, and manage your GLIF+ benefits through your Agent.

You may want to check out the other [tutorials](/glif-storage-providers-loyalty-rewards/glif-sp-card-tutorials) to learn more about managing your GLIF+ SP Card.
