---
description: Add your miner to the Agent
---

# GLIF Agent Website Tutorial Part 4 — Borrow

_If you don’t understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ ](glif-agent-website-tutorial-part-1-preparation-setup.md)[_Part 1_ ](glif-agent-website-tutorial-part-1-preparation-setup.md)_and_[ _Part 2_ ](glif-agent-website-tutorial-part-2-create-your-agent.md)_of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you have created or completed the following:

1. Your Agent Owner multisig wallet ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
2. Your Agent smart contract ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
3. Adding your miner to the Agent ([Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md))

Once your Agent has a Miner pledged to it, the next step is to borrow from GLIF. In this part of the tutorial, we will guide you through the process of borrowing FIL using the GLIF website interface.

***

## How Much Can You Borrow

Before borrowing from GLIF, you must provide collateral to your Agent. There are two methods to add collateral and unlock borrowing capacity:

#### 1. Available Balance in the Agent

If you would like to send FIL directly to your agent, copy your Agent address (f410/0x) from the Agent page. Send FIL to this address from your wallet. Use the “**Send FIL**” option in the top-right dropdown menu. It works like sending FIL to any other wallet.

![Copy address](../../../.gitbook/assets/image (213).png)

#### 2. Available Balance in a Miner Added to the Agent

Please refer to [Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md) of this tutorial series for steps to add a miner to your Agent. Miner’s balance can be used as collateral.

***

Once collateral is added, your borrowing limit (maximum amount you can borrow) will display on the Agent page. This limit varies based on:

* Borrowing method: "**Borrow to Seal**" or "**Borrow to Withdraw.**"
* Your Agent’s DTL ratio.

See the [docs](../../../for-storage-providers/borrowing-limits-and-dtl.md) here for details.

***

## Step 1: Propose a Multisig Proposal to Borrow

1. Connect to one of the approver wallets in your Agent’s owner multisig wallet.
2. Navigate to the right-side panel on the Agent page.
3. Select your borrowing method: "**Borrow to Seal**" or "**Borrow to Withdraw**".
4. Enter the amount to borrow (must not exceed the "maximum borrow to seal/withdraw" limit).
5. Review the APR, new debt amount, daily interest, and updated DTL ratio.
6. Click "**Borrow**."

![Borrow button](../../../.gitbook/assets/image (224).png)

7. Confirm details and click “**Sign Transaction".** A multisig proposal will be created.

![Transaction confirmation](../../../.gitbook/assets/image (217).png)

> [!CAUTION]
> Credentials are valid for only 5 minutes. If you see this error, it means the credentials have expired, so please start over.

![Borrow step](../../../.gitbook/assets/image (212).png)

8. Click “**Send**” and approve the transaction in your wallet.

![Approve button](../../../.gitbook/assets/image (218).png)

9. Wait for the transaction to complete. A new proposal will appear in the Agent owner proposals section.

> [!WARNING]
> Minimum borrow amount is 1 FIL. If you see this error, please check if your borrowing amount is too low.

![Borrow form](../../../.gitbook/assets/image (211).png)

***

## Step 2: Approve the Proposal

1. Connect to another signer wallet from your Agent’s owner multisig wallet.
2. Go to the Agent page and locate the proposal in the "**Agent Owner Proposals**" section.

![Approve proposal](../../../.gitbook/assets/image (221).png)

3. Click “**Approve Proposal**”.

![Proposal approval](../../../.gitbook/assets/image (219).png)

4. Confirm the transaction in your wallet.
5. Wait for completion (may take a few minutes). The Agent’s available balance will update once approved.

![Approve proposal](../../../.gitbook/assets/image (223).png)

6. You can also check the new DTL and total debt on the Agent page's dashboard.

![Approve proposal](../../../.gitbook/assets/image (222).png)

***

## Congratulations!

You’ve successfully borrowed FIL to your Agent!

## **Next Steps:**

In [Part 5](glif-agent-website-tutorial-part-5-moving-fil-between-miner-and-agent.md) of this tutorial, we will show you how to move FIL from Miner to Agent and back.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
