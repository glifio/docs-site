---
description: Add your miner to the Agent
---

# GLIF Agent Website Tutorial Part 7 - Remove a Miner from an Agent

_If you don’t understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ ](glif-agent-website-tutorial-part-1-preparation-setup.md)[_Part 1_ ](glif-agent-website-tutorial-part-1-preparation-setup.md)_and_[ _Part 2_ ](glif-agent-website-tutorial-part-2-create-your-agent.md)_of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you have created or completed the following:

1. Your Agent Owner multisig wallet ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
2. Your Agent smart contract ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
3. Adding your miner to the Agent ([Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md))
4. Borrowing FIL from GLIF ([Part 4](glif-agent-website-tutorial-part-4-borrow.md))
5. Moving FIL from Miner to Agent and back ([Part 5](glif-agent-website-tutorial-part-5-moving-fil-between-miner-and-agent.md))
6. Withdrawing rewards / cash advance ([Part 6](glif-agent-website-tutorial-part-6-withdraw-rewards-cash-advance.md))

In this part of the tutorial, we will guide you through the process of remove a miner from an Agent using the GLIF website interface.

***

## Step 1: Initiate Remove Miner Proposal

1. Navigate to the "**Miners**" section on your Agent page.
2. Click the "trash can" icon next to the miner you want to fund.

![The button](../../../.gitbook/assets/image (253).png)

3. In the "**Remove a miner from your Agent**" multisig proposal interface, enter the new owner address of the miner.
4. Review the details and click “**Sign Transaction**.”

{% hint style="warning" %}
Credentials are valid for only 5 minutes. If you see the error "_AgentPolice: Invalid Credential_", it means the credentials have expired, so please start over.
{% endhint %}

![Initiate removal](../../../.gitbook/assets/image (254).png)

5. Click “**Send**” and approve the transaction in your wallet.

![Approve button](../../../.gitbook/assets/image (255).png)

6. Wait for the transaction to complete. A "**RemoveMiner**" proposal will appear in the "**Agent Owner Proposals**" section.

![Transaction pending](../../../.gitbook/assets/image (256).png)

## Step 2: Approve the Proposal

1. Connect to another approver wallet from your Agent’s owner multisig wallet.
2. Navigate to the "**Agent Owner Proposals"** section and find the "**Withdraw**" proposal.
3. Click “**Approve Proposal**”

![Proposal approval](../../../.gitbook/assets/image (246).png)

4. Confirm the transaction in your wallet.
5. Wait for the transaction to complete (1–2 minutes). The miner will be removed from your Agent.

![Transaction pending](../../../.gitbook/assets/image (257).png)

***

## Congratulations!

You’ve successfully removed a Miner from your Agent!

## **Next Steps:**

In [Part 8 ](glif-agent-website-tutorial-part-8-payment.md)of this tutorial, we will show you how to make a payment to GLIF.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
