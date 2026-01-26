---
description: Add your miner to the Agent
---

# GLIF Agent Website Tutorial Part 6 - Withdraw Rewards / Cash Advance

_If you don’t understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ ](glif-agent-website-tutorial-part-1-preparation-setup.md)[_Part 1_ ](glif-agent-website-tutorial-part-1-preparation-setup.md)_and_[ _Part 2_ ](glif-agent-website-tutorial-part-2-create-your-agent.md)_of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you have created or completed the following:

1. Your Agent Owner multisig wallet ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
2. Your Agent smart contract ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
3. Adding your miner to the Agent ([Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md))
4. Borrowing FIL from GLIF ([Part 4](glif-agent-website-tutorial-part-4-borrow.md))&#x20;
5. Moving FIL from Miner to Agent and back ([Part 5](glif-agent-website-tutorial-part-5-moving-fil-between-miner-and-agent.md))

Sometimes you may need FIL to pay for gas or to sell on exchanges to pay for fiat denominated bills. In this case, you will want to withdraw funds off your Agent, and out of the GLIF Pool. In this part of the tutorial, we will guide you through this process using the GLIF website interface.

You can do this when you meet the DTL requirement on your Agent - to read more about the DTL, see our [docs](../../../for-storage-providers/borrowing-limits-and-dtl.md).

***

## Step 1: Initiate Withdraw Proposal

1. Navigate to the right-side panel on your Agent page. Click the "**Withdraw**" tab.
2. Enter the recipient address and the amount to withdraw.

{% hint style="warning" %}
The maximum withdrawal amount is displayed here and depends on your DTL. See [docs](../../../for-storage-providers/borrowing-limits-and-dtl.md) for details.
{% endhint %}

3. Click “**Withdraw**.”

![Withdraw button](../../../.gitbook/assets/image (249).png)

4. Review the details and click “**Sign Transaction**.”

{% hint style="warning" %}
Credentials are valid for only 5 minutes. If you see the error "_AgentPolice: Invalid Credential_", it means the credentials have expired, so please start over.
{% endhint %}

![Withdrawal step](../../../.gitbook/assets/image (243).png)

5. Click “**Send**” and approve the transaction in your wallet.

![Approve button](../../../.gitbook/assets/image (244).png)

6. Wait for the transaction to complete. A "**Withdraw**" proposal will appear in the "**Agent Owner Proposals**" section.

![Transaction pending](../../../.gitbook/assets/image (245).png)

## Step 2: Approve the Proposal

1. Connect to another approver wallet from your Agent’s owner multisig wallet.
2. Navigate to the "**Agent Owner Proposals"** section and find the "**Withdraw**" proposal.
3. Click “**Approve Proposal**”

![Proposal approval](../../../.gitbook/assets/image (246).png)

4. Confirm the transaction in your wallet.
5. Wait for the transaction to complete (1–2 minutes). The FIL will be sent to the recipient wallet.

***

## Congratulations!

You’ve successfully withdrawn funds from your Agent!

## **Next Steps:**

In [Part 7](glif-agent-website-tutorial-part-7-remove-a-miner-from-an-agent.md) of this tutorial, we will show you how to remove a miner from an Agent.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
