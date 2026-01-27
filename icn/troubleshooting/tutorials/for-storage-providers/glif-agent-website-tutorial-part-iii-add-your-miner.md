
# GLIF Agent Website Tutorial Part III — Add Your Miner

_If you don't understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ _Part I_ ](glif-agent-website-tutorial-part-i-preparation-setup.md)_and_ [_Part II_](glif-agent-website-tutorial-part-ii-create-your-agent.md) _of this tutorial series._

***

## Before You Begin

In the previous parts of this tutorial, you created:

1. Your Agent Owner multisig wallet
2. Your Agent smart contract

With your Agent now set up, the next step is to add a miner to your Agent. By doing this, you will provide your Agent with the asset in your miner as the collateral needed to borrow FIL from GLIF. In this part of the tutorial, we will guide you through the process of adding a miner to your Agent using the GLIF website interface.

***

## **Step 1: Proposing an Ownership change (Through lotus)**

This step occurs outside of GLIF and our command line. Depending on what mining software you use, this step will change. However, if you are running the `lotus-miner` command line, you can run the following command to propose the ownership change:

`lotus-miner actor set-owner --really-do-it <agent-f410> <current-miner-owner>`

Your Agent's `f4` address can be found by running `glif agent info` and inspecting the logs:

```
➜ glif agent info

BASIC INFO

...
Agent f4 Addr                         f410fh3njwnl6uirpnvi2o7qtnki43c47iyn5mf2q3nq
...
```

Once this transaction succeeds, you can proceed to step 2.

## **Step 2: Approving the ownership change (Through lotus)**

Your Agent must approve the ownership change in order to complete the process of adding a Miner to your Agent. To approve the ownership change, run:

`glif agent miners add <miner-id>`

A single Agent can own more than 1 Miner, which increases the aggregate amount a Storage Provider can borrow under a single Agent.

## Step 3: Propose the “Add Miner” Proposal (Through website UI)

1. Connect to the wallet that is one of the signers of your multisig created in [Part II](glif-agent-website-tutorial-part-ii-create-your-agent.md).

> [!IMPORTANT]
> When you propose transactions to your agent using your owner wallet, you must do so with a non-Ledger wallet, such as the Filecoin Snap wallet or a burner wallet. You cannot propose these transactions from a Ledger device. The Ledger can only act as the approver.
>
> This is the same for all owner transactions on the agent: they must be initiated with a non-Ledger signer.

2. Go to the “**Miners**” section in your Agent page. Click “**Add a Miner**”.

![Add miner form](../../../.gitbook/assets/image (311).png)

3. Enter your miner address in the “**Add a miner to your Agent**” page.
4. Click “**Sign transaction**”.

![Sign prompt](../../../.gitbook/assets/image (315).png)

5. After clicking “**Sign transaction**”, a message will be displayed indicating how many minutes remain for this credential. You can also revoke the credential by clicking “**Revoke credential**”.

> [!WARNING]
> If you do not complete the transaction and **sign the proposal with your other signer wallets within 5 minutes**, you will need to repeat this step.

6. Click “**Send**” to create a new proposal. You will be prompted to sign the transaction with your currently connected wallet.

![Send button](../../../.gitbook/assets/image (316).png)

7. Approve the transaction in your wallet.

![Approval step](../../../.gitbook/assets/image (317).png)

8. Wait for the transaction to complete, which may take 1-2 minutes.

## Step 4: Approve the proposal by other signers

Your Agent owner wallet is a multisig wallet which requires multiple signers to confirm important changes. Now that you have created aproposal to add a miner, you need the other signer(s) to approve it.

1. Connect with the other signer wallets. You can find all signer wallets in the “**Required Approvals**” section on your multisig page. These should be the same wallets used in [Part II](glif-agent-website-tutorial-part-ii-create-your-agent.md).

![Agent creation](../../../.gitbook/assets/image (323).png)

2. Navigate to the “**Multisig**” tab.

![Approve proposal](../../../.gitbook/assets/image (321).png)

3. The “**AddMiner**” proposal should appear in the “**Multisig proposals**” queue.

![Add miner form](../../../.gitbook/assets/image (318).png)

4. **Select the Proposal** that you just created.

![Approve proposal](../../../.gitbook/assets/image (325).png)

5. Click **“Approve proposal”.**

![Proposal approval](../../../.gitbook/assets/image (326).png)

6. Confirm the transaction in your wallet.
7. If your multisig requires approval from more than two signers, repeat the same steps using the other signer wallets. Once approved by the required number of signers, the proposal will be executed on-chain. Wait for the transaction confirmation, which may take a few minutes.
8. Return to your Agent's page on the GLIF website. You should now see the newly added miner associated with your Agent in the “**Miners**” section.

![Add miner form](../../../.gitbook/assets/image (327).png)

***

## Congratulations!

You've successfully added a miner to your Agent!

## **Next Steps:**

In Part IV of this tutorial, we will show you how to push and pull fund into your miner from your Agent.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
