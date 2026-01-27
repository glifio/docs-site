
# GLIF Agent Website Tutorial Part 2 — Create your Agent

_If you don’t yet understand the basics of GLIF Agents and the preparation steps to get started creating Agents on the GLIF website, we suggest you start by reading_ [_Part 1_](glif-agent-website-tutorial-part-1-preparation-setup.md) _of this tutorial. You can find all the tutorials about using Agents on the GLIF website on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Agents, Agent Owners, and Login Keys

Before creating your Agent on the website, it’s important to understand 2 “roles” within GLIF. As a brief refresher:

1. **Agent —** An Agent is a smart contract that borrows FIL from GLIF. You will deploy, own, and operate your Agent smart contract yourself (covered in [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md) of the tutorial). In order to borrow FIL, your Agent needs collateral, which it gets by taking ownership of your Filecoin miner(s). A more detailed description of Agents can be found [here](../../../for-storage-providers/manage-miner-actors-with-agents.md).
2. **Agent owner** **wallet** — The Agent’s owner wallet is the wallet that controls your Agent. Whoever is in control of your Agent’s owner wallet can operate your Agent. It is very important to keep the Agent’s owner wallet secure, which GLIF will help you do automatically.

## Agent Creation Wizard

In this tutorial, you will:

1. Create your Agent Owner multisig wallet
2. Create your Agent smart contract

The Agent Creation Wizard on the GLIF website will walk you through these steps. Read on for a guided walkthrough.

## Create your Agent on the website

**Step 1 —** go to [https://glif.io/agent](https://glif.io/agent) and click the “**Create new agent**” button on the left hand panel:

![Agent creation](../../../.gitbook/assets/image (366).png)

***

**Step 2 —** Connect the “proposer” Filecoin Snap wallet you created in[ Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) of the tutorial.

![Agent creation](../../../.gitbook/assets/image (348).png)

Once you click the “Connect” button, you must approve GLIF to connect to your wallet. You may see this popup appear two times, you should approve both requests to connect.

![Approve button](../../../.gitbook/assets/image (387).png)

Your FilSnap wallet needs some funds to perform the transactions required to create a new Agent.

If your wallet is empty, please make a deposit from another wallet using the 'Deposit' button, or send funds to the wallet's address from an exchange. If you encounter any issues with the deposit, check the tutorial [here](../for-token-holders/transfer-fil-to-from-exchanges/).

![Create your Agent on](../../../.gitbook/assets/image (388).png)

***

**Step 3** — Enter your two additional wallet addresses (“approver”, “backup”) signers and create your Agent owner wallet. These are the two other FilSnap or Ledger wallet addresses you created in [Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) of this tutorial.

![Address input](../../../.gitbook/assets/image (389).png)

If you want to use 2 signers only, open the owner settings, set 'Required approvals' to 2, and remove the "Signer 3".

![Create your Agent on](../../../.gitbook/assets/image (351).png)

Once you click “Create Owner”, you must approve the transaction in MetaMask:

![MetaMask prompt](../../../.gitbook/assets/image (352).png)

Great work so far! Once you’ve approved this Agent Owner multisig creation transaction, you’re almost ready to create your Agent smart contract.

***

**Step 4 —** Wait for your Agent owner multisig creation transaction to complete.

In order to create your Agent, we must first wait for your Agent owner multisig wallet to exist on-chain.

> [!NOTE]
> If you see "Failed to load address information" under your "owner address", this is because your Agent owner multisig wallet creation transaction is still pending.

![Create your Agent on](../../../.gitbook/assets/image (390).png)

Once your Agent owner multisig creation transaction has confirmed, you should be able to click the “Create Agent” button, and approve the transaction in MetaMask.

![MetaMask prompt](../../../.gitbook/assets/image (391).png)

Once you click the “Create Agent” button, you must approve the transaction in MetaMask:

![MetaMask prompt](../../../.gitbook/assets/image (356).png)

***

**Step 5** — wait for your Agent creation transaction to confirm

![Transaction pending](../../../.gitbook/assets/image (9).png)

**Step 6** — Success! You can see we’ve created a new Agent.

![Agent creation](../../../.gitbook/assets/image (11).png)

## Important Agent Information

A couple pieces of important information to note after creating your Agent:

1. **Agent ID** — The Agent ID is a number that GLIF uses internally in its smart contract infrastructure to identify your Agent.
2. **Agent f410 Address** — The Agent f410 address is the smart contract address of your Agent, displayed in a Filecoin native format.
3. **Agent 0x Address** — The Agent 0x address is another representation of the smart contract address of your Agent, dislayed in an Ethereum native format. An Agent’s f410 and 0x addresses are functionally equivalent to each other.
4. **Agent Owner** — The Agent Owner is the multisig wallet that owns your Agent smart contract, which we created at the beginning of this tutorial.
5. **Agent Operator** — the Agent Operator, to change this address, please refer to [Part 9 ](glif-agent-website-tutorial-part-9-change-operator-address.md)of this tutorial.

## Next Steps

Congratulations! You just created your GLIF Agent. To recap, in [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md) of this tutorial, you should have:

1. Created a new Agent Owner multisig wallet, using your FilSnap wallet and 2 Ledger wallets or buner wallet addresses as signers
2. Created a new Agent smart contract

In[ ](glif-agent-website-tutorial-part-3-add-your-miner.md)[Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md) of this tutorial, we will show you how to add miners to your Agent.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
