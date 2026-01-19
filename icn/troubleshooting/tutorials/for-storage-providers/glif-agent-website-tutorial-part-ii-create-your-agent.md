---
description: Create your Agent on the GLIF Website
---

# GLIF Agent Website Tutorial Part II — Create your Agent

_If you don’t yet understand the basics of GLIF Agents and the preparation steps to get started creating Agents on the GLIF website, we suggest you start by reading_ [_Part_ ](glif-agent-website-tutorial-part-i-preparation-setup.md)[_I_](glif-agent-website-tutorial-part-i-preparation-setup.md) _of this tutorial._

***

## Agents, Agent Owners, and Login Keys <a href="#def4" id="def4"></a>

Before creating your Agent on the website, it’s important to understand 2 “roles” within GLIF. As a brief refresher:

1. **Agent —** An Agent is a smart contract that borrows FIL from GLIF. You will deploy, own, and operate your Agent smart contract yourself (covered in Part II of the tutorial). In order to borrow FIL, your Agent needs collateral, which it gets by taking ownership of your Filecoin miner(s). A more detailed description of Agents can be found [here](/broken/pages/omFM6JzI9yZVD3SJxLRM).
2. **Agent owner** **wallet** — The Agent’s owner wallet is the wallet that controls your Agent. Whoever is in control of your Agent’s owner wallet can operate your Agent. It is very important to keep the Agent’s owner wallet secure, which GLIF will help you do automatically.

## Agent Creation Wizard <a href="#id-7537" id="id-7537"></a>

In this tutorial, you will:

1. Create your Agent Owner multisig wallet
2. Create your Agent smart contract&#x20;

The Agent Creation Wizard on the GLIF website will walk you through these steps. Read on for a guided walkthrough.

## Create your Agent on the website <a href="#ccc3" id="ccc3"></a>

**Step 1 —** go to [https://glif.io/agent](https://glif.io/agent) and click the “**Create new agent**” button on the left hand panel:

<div align="left"><figure><img src="../../../.gitbook/assets/image (259).png" alt=""><figcaption></figcaption></figure></div>

***

**Step 2 —** Connect the “proposer” Filecoin Snap wallet you created in [Part I](glif-agent-website-tutorial-part-i-preparation-setup.md) of the tutorial.

<figure><img src="../../../.gitbook/assets/image (109).png" alt=""><figcaption></figcaption></figure>

Once you click the “Connect” button, you must approve GLIF to connect to your wallet. You may see this popup appear two times, you should approve both requests to connect.

<div align="left"><figure><img src="../../../.gitbook/assets/image (19).png" alt="" width="375"><figcaption></figcaption></figure></div>

Your FilSnap wallet needs some funds to perform the transactions required to create a new Agent.&#x20;

If your wallet is empty, please make a deposit from another wallet using the 'Deposit' button, or send funds to the wallet's address from an exchange. If you encounter any issues with the deposit, check the tutorial [here](../for-token-holders/transfer-fil-to-from-exchanges/).

<div align="left"><figure><img src="../../../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure></div>

***

**Step 3** — Enter your two additional wallet addresses (“approver”, “backup”) signers and create your Agent owner wallet. These are the two other FilSnap or Ledger wallet addresses you created in [Part I](glif-agent-website-tutorial-part-i-preparation-setup.md) of this tutorial.&#x20;

<div align="left"><figure><img src="../../../.gitbook/assets/image (21).png" alt="" width="563"><figcaption></figcaption></figure></div>

If you want to use 2 signers only, open the owner settings, set 'Required approvals' to 2, and remove the "Signer 3".

<div align="left"><figure><img src="../../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure></div>

Once you click “Create Owner”, you must approve the transaction in MetaMask:

<div align="left"><figure><img src="../../../.gitbook/assets/image (113).png" alt="" width="317"><figcaption></figcaption></figure></div>

Great work so far! Once you’ve approved this Agent Owner multisig creation transaction, you’re almost ready to create your Agent smart contract.

***

**Step 4 —** Wait for your Agent owner multisig creation transaction to complete.

In order to create your Agent, we must first wait for your Agent owner multisig wallet to exist on-chain.

{% hint style="info" %}
If you see “Failed to load address information” under your “owner address”, this is because your Agent owner multisig wallet creation transaction is still pending.
{% endhint %}

<div align="left"><figure><img src="../../../.gitbook/assets/image (22).png" alt="" width="563"><figcaption></figcaption></figure></div>

Once your Agent owner multisig creation transaction has confirmed, you should be able to click the “Create Agent” button, and approve the transaction in MetaMask.

<div align="left"><figure><img src="../../../.gitbook/assets/image (23).png" alt="" width="563"><figcaption></figcaption></figure></div>

Once you click the “Create Agent” button, you must approve the transaction in MetaMask:

<div align="left"><figure><img src="../../../.gitbook/assets/image (117).png" alt="" width="255"><figcaption></figcaption></figure></div>

***

**Step 5** — wait for your Agent creation transaction to confirm

<div align="left"><figure><img src="../../../.gitbook/assets/image (308).png" alt=""><figcaption></figcaption></figure></div>

**Step 6** — Success! You can see we’ve created a new Agent.

<div align="left"><figure><img src="../../../.gitbook/assets/image (310).png" alt=""><figcaption></figcaption></figure></div>

## Important Agent Information <a href="#b829" id="b829"></a>

A couple pieces of important information to note after creating your Agent:

1. **Agent ID** — The Agent ID is a number that GLIF uses internally in its smart contract infrastructure to identify your Agent.&#x20;
2. **Agent f410 Address** — The Agent f410 address is the smart contract address of your Agent, displayed in a Filecoin native format.&#x20;
3. **Agent 0x Address** — The Agent 0x address is another representation of the smart contract address of your Agent, dislayed in an Ethereum native format. An Agent’s f410 and 0x addresses are functionally equivalent to each other.&#x20;
4. **Agent Owner** — The Agent Owner is the multisig wallet that owns your Agent smart contract, which we created at the beginning of this tutorial.
5. **Agent Operator** — the Agent Operator is written about in more detail in later part of this tutorial.

## Next Steps <a href="#efe6" id="efe6"></a>

Congratulations! You just created your GLIF Agent. To recap, in Part II of this tutorial, you should have:

1. Created a new Agent Owner multisig wallet, using your FilSnap wallet and 2 Ledger wallets or buner wallet addresses as signers
2. Created a new Agent smart contract

In[ Part III](glif-agent-website-tutorial-part-iii-add-your-miner.md) of this tutorial, we will show you how to add miners to your Agent.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
