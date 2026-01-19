---
description: Add your miner to the Agent
---

# GLIF Agent Website Tutorial Part 3 — Add Your Miner

_If you don’t understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ ](glif-agent-website-tutorial-part-1-preparation-setup.md)[_Part 1_ ](glif-agent-website-tutorial-part-1-preparation-setup.md)_and_[ _Part 2_ ](glif-agent-website-tutorial-part-2-create-your-agent.md)_of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

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

<div align="left"><figure><img src="../../../.gitbook/assets/image (368).png" alt="" width="375"><figcaption></figcaption></figure></div>

## Step 2: Propose the “Add Miner” Proposal (Through website UI)

1. Connect to the wallet that is one of the signers of your multisig created in [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md).

{% hint style="info" %}
When you propose transactions to your agent using your owner wallet, you must do so with a non-Ledger wallet, such as the Filecoin Snap wallet or a burner wallet. You cannot propose these transactions from a Ledger device. The Ledger can only act as the approver.&#x20;

This is the same for all owner transactions on the agent: they must be initiated with a non-Ledger signer.
{% endhint %}

2. Go to the "**Miners**" section in your Agent page. Click “**Add a Miner”**.

<div align="left"><figure><img src="../../../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure></div>

3. Enter your miner address in the "**Add a miner to your Agent**" page.
4. Click "**Sign transaction**".

<div align="left"><figure><img src="../../../.gitbook/assets/image (16).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. After clicking '**Sign transaction**,' a message will be displayed indicating how many minutes remain for this credential. You can also revoke the credential by clicking "**Revoke credential**".

{% hint style="warning" %}
If you do not complete the transaction and **sign the proposal with your other signer wallets within 5 minutes**, you will need to repeat this step.
{% endhint %}

6. Click **“Send”** to create a new proposal. You will be prompted to sign the transaction with your currently connected wallet.&#x20;

<div align="left"><figure><img src="../../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure></div>

7. Approve the transaction in your wallet.

<div align="left"><figure><img src="../../../.gitbook/assets/image (18).png" alt="" width="308"><figcaption></figcaption></figure></div>

8. Wait for the transaction to complete, which may take 1-2 minutes.&#x20;

## Step 3: Approve the proposal by other signers

Your Agent owner wallet is a multisig wallet which requires multiple signers to confirm important changes. Now that you have created aproposal to add a miner, you need the other signer(s) to approve it.

1. Connect with the other signer wallets. You can find all signer wallets in the "**Required Approvals"** section on your multisig page. These should be the same wallets used in [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md).

<div align="left"><figure><img src="../../../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure></div>

2. Navigate to the "**Multisig**" tab.&#x20;

<div align="left"><figure><img src="../../../.gitbook/assets/image (22).png" alt="" width="375"><figcaption></figcaption></figure></div>

3. The '**AddMiner**' proposal should appear in the "**Agent owner proposals**" queue.

<div align="left"><figure><img src="../../../.gitbook/assets/image (274).png" alt=""><figcaption></figcaption></figure></div>

3. **Select the Proposal** that you just created.

<div align="left"><figure><img src="../../../.gitbook/assets/image (26).png" alt="" width="375"><figcaption></figcaption></figure></div>

5. Click **“Approve proposal”.**

<div align="left"><figure><img src="../../../.gitbook/assets/image (27).png" alt="" width="563"><figcaption></figcaption></figure></div>

6. Confirm the transaction in your wallet.&#x20;
7. If your multisig requires approval from more than two signers, repeat the same steps using the other signer wallets. Once approved by the required number of signers, the proposal will be executed on-chain. Wait for the transaction confirmation, which may take a few minutes.
8. Return to your Agent’s page on the GLIF website. You should now see the newly added miner associated with your Agent in the "**Miners**" section.

<div align="left"><figure><img src="../../../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure></div>

***

## Congratulations!

You’ve successfully added a miner to your Agent!

## **Next Steps:**

In [Part 4](glif-agent-website-tutorial-part-4-borrow.md) of this tutorial, we will show you how to borrow FIL.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
