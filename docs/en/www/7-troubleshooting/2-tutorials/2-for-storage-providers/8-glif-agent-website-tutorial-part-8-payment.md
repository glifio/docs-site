# GLIF Agent Website Tutorial Part 8 -  Payment

_If you don't understand the basics of GLIF Agents, Agent owners, or how to create your Agent on the GLIF website, we suggest starting with_ [_Part 1_](/7-troubleshooting/2-tutorials/2-for-storage-providers/1-glif-agent-website-tutorial-part-1-preparation-setup) _and_ [_Part 2_](/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent) _of this tutorial series. You can find all the tutorials about using Agents on the **GLIF website** on this_ [_page_](./)_. You can find the instructions about the Agent's command on the **GLIF Command Line Interface** on this_ [_page_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_._

***

## Before You Begin

In the previous parts of this tutorial series, you have created or completed the following:

1. Your Agent Owner multisig wallet ([Part 1](/7-troubleshooting/2-tutorials/2-for-storage-providers/1-glif-agent-website-tutorial-part-1-preparation-setup) & [Part 2](/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent))
2. Your Agent smart contract ([Part 1](/7-troubleshooting/2-tutorials/2-for-storage-providers/1-glif-agent-website-tutorial-part-1-preparation-setup) & [Part 2](/7-troubleshooting/2-tutorials/2-for-storage-providers/2-glif-agent-website-tutorial-part-2-create-your-agent))
3. Adding your miner to the Agent ([Part 3](/7-troubleshooting/2-tutorials/2-for-storage-providers/3-glif-agent-website-tutorial-part-3-add-your-miner))
4. Borrowing FIL from GLIF ([Part 4](/7-troubleshooting/2-tutorials/2-for-storage-providers/4-glif-agent-website-tutorial-part-4-borrow))
5. Moving FIL from Miner to Agent and back ([Part 5](/7-troubleshooting/2-tutorials/2-for-storage-providers/5-glif-agent-website-tutorial-part-5-moving-fil-between-miner-and-agent))
6. Withdrawing rewards / cash advance ([Part 6](/7-troubleshooting/2-tutorials/2-for-storage-providers/6-glif-agent-website-tutorial-part-6-withdraw-rewards-cash-advance))
7. Removing a miner from an Agent ([Part 7](/7-troubleshooting/2-tutorials/2-for-storage-providers/7-glif-agent-website-tutorial-part-7-remove-a-miner-from-an-agent))

After borrowing, Storage Providers are expected to make a payment when they have finished using their borrowed FIL. They can repay the fee to GLIF at any time, with no due dates or early repayment penalties. In this part of the tutorial, we will guide you through the process of making a payment using the GLIF website interface.

***

## Pay FIL from your agent

### Step 1: Initiate Payment proposal

1. Navigate to the right-side panel on your Agent page. Click the “**Pay**” tab.
2. Enter the amount to pay. To complete the payment, your Agent must have a sufficient balance.
3. Click “**Pay**.”

![Payment form](en-image-248.png)

4. In the “**Pay FIL from your agent**” multisig proposal interface, review the details and click “**Sign Transaction**.”

> [!WARNING]
> Credentials are valid for only 5 minutes. If you see the error “_AgentPolice: Invalid Credential_”, it means the credentials have expired, so please start over.

![Initiate payment](en-image-250.png)

5. Click “**Send**” and approve the transaction in your wallet.

![Approve button](en-image-251.png)

6. Wait for the transaction to complete. A “**Pay**” proposal will appear in the “**Agent Owner Proposals**” section.

![Transaction pending](en-image-252.png)

### Step 2: Approve the Proposal

1. Connect to another approver wallet from your Agent's owner multisig wallet.
2. Navigate to the “**Agent Owner Proposals**” section and find the “**Pay**” proposal.
3. Click “**Approve Proposal**”

![Proposal approval](en-image-246.png)

4. Confirm the transaction in your wallet.
5. Wait for the transaction to complete (1–2 minutes). You will see the total debt updated in the agent panel.

![Transaction pending](en-image-247.png)

***

## Autopilot

Manually making payments regularly can be annoying. You can set up Autopilot on the Command Line Interface, please check [this page](https://github.com/glifio/glif?tab=readme-ov-file#autopilot) for instructions.

> [!NOTE]
> SPs can borrow FIL from GLIF for as long as necessary - whenever SPs are done with their borrowed FIL, they can pay it back anytime to GLIF with no due dates or early repayment fees.

***

## Leave the pool

If you want to leave the pool for good, all you have to do is pay back all of your principal. Sometimes, a small amount of FIL may remain as unpaid principal or interest. To fully repay everything, you can send 1 extra FIL. This will cover any remaining balance and allow you to exit the pool. If you overpay, any extra FIL will be returned to your agent.

You can also exit the pool using the command line interface with `glif agent exit`

As this will ensure _all_ the principal is paid off, and no tiny amounts of attofil remain borrowed.

***

## Congratulations!

You've successfully made a payment to GLIF!

## **Next Steps:**

In [Part 9](/7-troubleshooting/2-tutorials/2-for-storage-providers/9-glif-agent-website-tutorial-part-9-change-operator-address) of this tutorial, we will show you how to change your operator address.
