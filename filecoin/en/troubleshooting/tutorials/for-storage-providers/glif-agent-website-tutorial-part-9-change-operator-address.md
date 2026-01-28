# GLIF Agent Website Tutorial Part 9- Change operator address

_If you don't understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_[ ](glif-agent-website-tutorial-part-1-preparation-setup.md)[_Part 1_ ](glif-agent-website-tutorial-part-1-preparation-setup.md)_and_[ _Part 2_ ](glif-agent-website-tutorial-part-2-create-your-agent.md)_of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you have created or completed the following:

1. Your Agent Owner multisig wallet ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
2. Your Agent smart contract ([Part 1](glif-agent-website-tutorial-part-1-preparation-setup.md) & [Part 2](glif-agent-website-tutorial-part-2-create-your-agent.md))
3. Adding your miner to the Agent ([Part 3](glif-agent-website-tutorial-part-3-add-your-miner.md))
4. Borrowing FIL from GLIF ([Part 4](glif-agent-website-tutorial-part-4-borrow.md))
5. Moving FIL from Miner to Agent and back ([Part 5](glif-agent-website-tutorial-part-5-moving-fil-between-miner-and-agent.md))
6. Withdrawing rewards / cash advance ([Part 6](glif-agent-website-tutorial-part-6-withdraw-rewards-cash-advance.md))
7. Removing a miner from an Agent ([Part 7](glif-agent-website-tutorial-part-7-remove-a-miner-from-an-agent.md))
8. Make a payment to GLIF ([Part 8](glif-agent-website-tutorial-part-8-payment.md))

In this part of the tutorial, we will guide you through the process of changing operator address using the GLIF website interface.

***

## Step 1: Initiate Remove Miner Operator Proposal

1. Navigate to the “**Admin**” section on your Agent page. Make sure you are in the “**Owner mode**”
2. Click the icon next to the operator.

![The Icon button](en-image-263.png)

3. In the “**Change Operator of Your Agent**” multisig proposal interface, enter the new operator address for the miner.

![Address input](en-image-264.png)

4. Click “**Send**” and approve the transaction in your wallet.

![Approve button](en-image-265.png)

5. Wait for the transaction to complete. A “**Transfer Operator**” proposal will appear in the “**Agent Owner Proposals**” section.

![Transaction pending](en-image-266.png)

### Step 2: Approve the Proposal

1. Connect to another approver wallet from your Agent's owner multisig wallet.
2. Navigate to the “**Agent Owner Proposals**” section and find the “**Transfer Operator**” proposal.
3. Click “**Approve Proposal**”.

![Proposal approval](en-image-267.png)

4. Confirm the transaction in your wallet.

## Step 3: Accept Operator Role

1. Connect to the proposed operator wallet.
2. Navigate to the “**Admin**” section of the Agent page. You will see the address of the pending operator.
3. Click “**Accept operator role**”.

![Approve proposal](en-image-269.png)

4. Click “**Send**”.

![Send button](en-image-270.png)

5. Wait for the transaction to complete (1–2 minutes). The updated operator address will appear in the “**Admin**” panel.

***

## Congratulations!

You've successfully change your operator address!

## **Next Steps:**

This is the end of this tutorial series. If you would like to learn how to withdraw FIL from the Agent to an exchange, check out this [tutorial](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md).

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
