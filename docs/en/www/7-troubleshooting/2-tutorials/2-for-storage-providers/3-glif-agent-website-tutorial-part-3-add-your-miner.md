# GLIF Agent Website Tutorial Part 3 — Add Your Miner

_If you don't understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_ [_Part 1_](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers/1-glif-agent-website-tutorial-part-1-preparation-setup) _and_ [_Part 2_](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent) _of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you created:

1. Your Agent Owner multisig wallet
2. Your Agent smart contract

With your Agent now set up, the next step is to add a miner to your Agent. By doing this, you will provide your Agent with the asset in your miner as the collateral needed to borrow FIL from GLIF. In this part of the tutorial, we will guide you through the process of adding a miner to your Agent using the GLIF website interface.

***

## **Step 1: Proposing an Ownership change (Through lotus)**

This step occurs outside of GLIF and our command line. Depending on what mining software you use, this step will change. However, if you are running the `lotus-miner` command line, you can run the following command to propose the ownership change:

`lotus-miner actor set-owner --really-do-it <agent-f410> <current-miner-owner>`

Your Agent's `f4` address can be found on the Agent page of the website:

![Tutorial step](en-image-368.png)

## Step 2: Propose the “Add Miner” Proposal (Through website UI)

1. Connect to the wallet that is one of the signers of your multisig created in [Part 2](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent).

> [!IMPORTANT]
> When you propose transactions to your agent using your owner wallet, you must do so with a non-Ledger wallet, such as the Filecoin Snap wallet or a burner wallet. You cannot propose these transactions from a Ledger device. The Ledger can only act as the approver.
>
> This is the same for all owner transactions on the agent: they must be initiated with a non-Ledger signer.

2. Go to the “**Miners**” section in your Agent page. Click “**Add a Miner**”.

![Add miner form](en-image-12.png)

3. Enter your miner address in the “**Add a miner to your Agent**” page.
4. Click “**Sign transaction**”.

![Sign prompt](en-image-16.png)

5. After clicking “**Sign transaction**”, a message will be displayed indicating how many minutes remain for this credential. You can also revoke the credential by clicking “**Revoke credential**”.

> [!WARNING]
> If you do not complete the transaction and **sign the proposal with your other signer wallets within 5 minutes**, you will need to repeat this step.

6. Click “**Send**” to create a new proposal. You will be prompted to sign the transaction with your currently connected wallet.

![Send button](en-image-17.png)

7. Approve the transaction in your wallet.

![Approval step](en-image-18.png)

8. Wait for the transaction to complete, which may take 1-2 minutes.

## Step 3: Approve the proposal by other signers

Your Agent owner wallet is a multisig wallet which requires multiple signers to confirm important changes. Now that you have created aproposal to add a miner, you need the other signer(s) to approve it.

1. Connect with the other signer wallets. You can find all signer wallets in the “**Required Approvals**” section on your multisig page. These should be the same wallets used in [Part 2](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent).

![Agent creation](en-image-24.png)

2. Navigate to the “**Multisig**” tab.

![Approve proposal](en-image-22.png)

3. The “**AddMiner**” proposal should appear in the “**Agent owner proposals**” queue.

![Add miner form](en-image-274.png)

3. **Select the Proposal** that you just created.

![Approve proposal](en-image-26.png)

5. Click **“Approve proposal”.**

![Proposal approval](en-image-27.png)

6. Confirm the transaction in your wallet.
7. If your multisig requires approval from more than two signers, repeat the same steps using the other signer wallets. Once approved by the required number of signers, the proposal will be executed on-chain. Wait for the transaction confirmation, which may take a few minutes.
8. Return to your Agent's page on the GLIF website. You should now see the newly added miner associated with your Agent in the “**Miners**” section.

![Add miner form](en-image-28.png)

***

## Congratulations!

You've successfully added a miner to your Agent!

## **Next Steps:**

In [Part 4](/docs/7-troubleshooting/2-tutorials/2-for-storage-providers/4-glif-agent-website-tutorial-part-4-borrow) of this tutorial, we will show you how to borrow FIL.
