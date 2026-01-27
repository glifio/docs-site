---
description: >-
  Understand the main components of GLIF Agents, and get prepared to create an
  Agent on the GLIF website
---

# GLIF Agent Website Tutorial Part 1— Preparation Setup

In Part 1 of the GLIF Agent Setup Tutorial, we are covering two topics:

1. Understand the different components of GLIF Agents and the basics of how they work.
2. Prepare to create an Agent on the GLIF website.

If you already understand the basics and you’re ready to get started creating your Agent on the website, you can skip this Part 1 and go directly to[ Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md).

> [!TIP]
> You can find all the tutorials about using Agents on the **GLIF website** on this [page](./).
>
> You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this [page](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing).

## GLIF Agents — The Basics

1. **Agent —** An Agent is a smart contract that borrows FIL from GLIF. You will deploy, own, and operate your Agent smart contract yourself (covered in [Part II](glif-agent-website-tutorial-part-2-create-your-agent.md) of the tutorial). In order to borrow FIL, your Agent needs collateral, which it gets by taking ownership of your Filecoin miner(s). A more detailed description of Agents can be found [here](../../../for-storage-providers/manage-miner-actors-with-agents.md).
2. **Agent owner** **wallet** — The Agent’s owner wallet is the wallet that controls your Agent. Whoever is in control of your Agent’s owner wallet can operate your Agent. It is very important to keep the Agent’s owner wallet secure, which GLIF will help you do automatically.

When creating an Agent on the GLIF website, your Agent owner wallet will be a Filecoin multisig wallet with at least 2 signers, though 3 signers are recommended. This is the most secure type of wallet you can use to own your Agent.

### Multisig wallets

A **multisig wallet** is a smart contract wallet with multiple signing parties (“signers”) attached to it. Multisigs enforce a minimum number of signers to approve a specific proposal before executing the transaction. Multisig wallets have a proposal/approval flow where:

* One of the multisig signers submits a proposal to execute a transaction
* The other multisig signers must approve the proposal
* Once the minimum number of signatures have approved the proposal, the transaction executes

### **GLIF Agent Multisig Owner Wallet Configuration**

Multisig wallets on Filecoin are generally very flexible in their configuration, however, GLIF recommends a specific, more secure configuration with 3 signers:

1. Signer 1 — “the proposer” — is a Filecoin Snap wallet, also called “FILSnap wallet” (more tutorial on this [here](../for-token-holders/wallets/how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md))
2. Signer 2 — “the approver” — is a Filecoin Ledger wallet or _another_ FilSnap Wallet or burner wallet
3. Signer 3 — “backup” — is _another_ (different) Filecoin ledger wallet or _another_ FilSnap Wallet or _another_ burner wallet

The GLIF Agent Multisig Owner Wallet is recommended to have a signing threshold of 2 — meaning, 2 signatures are required in order to execute a transaction. In other words:

1. Signer 1 (“the proposer”) proposes a transaction to the Agent Multisig Owner Wallet to perform some action (like borrow FIL from GLIF)
2. Signer 2 (“the approver”) approves the transaction proposed in step 1
3. The transaction executes successfully

> [!TIP]
> If you lose any of your signer keys (either Ledger devices or the Filecoin Snap wallet) then you can easily replace it with a new one! This is why Multisig wallets are a more secure way to own your Agent.

![GLIF Agent Multisig Owner](../../../.gitbook/assets/image (282).png)

## Prepare to Create an Agent

In order to prepare for Agent creation, you’ll need 3 addresses:

1. FILSnap Wallet Address 1
2. FILSnap Wallet Address 2 OR Ledger Address 1 OR Burner Wallet Address 1
3. FILSnap Wallet Address 3 OR Ledger Address 2 OR Burner Wallet Address 2

For details on obtaining a [FilSnap](../for-token-holders/wallets/how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md), [Burner](../for-token-holders/wallets/how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md), or [Ledger](../for-token-holders/wallets/how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md) wallet address, please refer to the tutorial by clicking the link.

> [!TIP]
> For added security, it's recommended that you use two separate Ledger devices, but it is OK to start with 1 Ledger Device and then switch to use 2 separate Ledger devices soon after.
>
> If you do not want to use your Ledger, you can set up another FilSnap address or burner wallet address as your second or third address. It could work, but using a Ledger is recommended to enhance security.

## Next steps

Once you have 3 Filecoin wallet addresses:

1. FILSnap wallet address
2. 2 Ledger wallet addresses or burner wallet addresses

Then you are ready to move on to[ ](glif-agent-website-tutorial-part-2-create-your-agent.md)[Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md) of this tutorial.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
