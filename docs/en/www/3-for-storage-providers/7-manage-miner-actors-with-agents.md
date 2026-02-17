# Manage Miner Actors with Agents

## What are Agents

Agents are smart contracts on the FEVM that allow Storage Providers (SPs) to collateralize Filecoin Miner Actors (miners) in order to borrow FIL from GLIF. Every Storage Provider deploys and owns their own Agent smart contract. Agents act as intermediaries between SPs and GLIF, allowing SPs to maintain ownership and control over their miner(s) while borrowing from GLIF.

![Borrow form](en-image-386.png)

## Deploy an Agent

1. Through GLIF [website](/agent)
2. Through the GLIF [CLI](https://github.com/glifio/glif)

Please find the detailed tutorial for agent [here](/docs/troubleshooting/tutorials/for-storage-providers).

## Add Collateral to an Agent

Agents can borrow once they have collateral. You can add collateral simply by sending FIL to an Agent smart contract, or by pledging one or more Filecoin Miner Actors. In depth tutorials will be posted soon for adding collateral to Agents.

> [!NOTE]
> To pledge a Filecoin Miner Actor to a GLIF Agent smart contract, the Storage Provider must assign Ownership of their Filecoin Miner Actor to the address of their GLIF Agent smart contract.

The more mining power added to an Agent, the greater the Agent's liquidation value, which increases the total amount of FIL the Agent can borrow.

![Add Collateral to an](en-image-281.png)

## Agent Ownership

The Storage Provider that deploys an Agent is in complete and total control of the Agent. If the Storage Provider loses its Agent ownership keys, there is nothing the GLIF team can do to recover the Storage Providers assets.

> [!IMPORTANT]
> It is extremely important that Storage Providers manage and backup their Agent keys in a secure and responsible way

## Agent Owner and Operator Keys

The GLIF protocol utilizes two distinct keys for managing Agents smart contracts. Only the SP should have access to these keys, and it's important to keep them private and safe. Changes to these keys follow a secure two-step process that involves a proposal by the current holder and acceptance by the new holder.

### **Owner Key:**

The owner key has executive privileges to move FIL in and out of the Agent. It allows actions such as borrowing, withdrawing funds, adding or removing Miner and changing the operator, typically controlled by Storage Provider management.

### **Operator Key:**

The operator key enables operational functions like making payments, managing worker addresses, and moving funds to and from the Agent to any of its Miner.

## Agent Police

The Agent Police is GLIF's keeper contract that ensures each Agent stays within debt-to-liquidation (DTL) ratio when executing actions like borrowing or withdrawing FIL. If an Agent violates system rules, the Agent Police is responsible for processing Agent state transitions and liquidations.

## **Agent Data Oracle (ADO)**

The FVM runtime does not provide much rich, contextual, or historical data about SPs. Even if it did, it would be gas intensive in a L1 smart contract environment to make accurate risk computations on-chain. The ADO is an off-chain data aggregator that allows the pools to receive any real-time and/or historical data on SPs securely and at a very low cost. Each pool can receive its own unique data from the ADO, allowing maximum flexibility.

When an Agent wants to take an action like borrowing funds from a pool, it must first make a request to the ADO to get a credential. The ADO makes its [security checks](https://docs.google.com/document/d/1nHpdoUqtPuOGBWZu2BsqiaHle8qY4aTTxRr46bMLXR8/edit#heading=h.3qy3cyd2t1qj), and issues a signed credential to the Agent containing the latest snapshot of data concerning the associated Agent and all of its associated miner actors. The Agent then takes this credential to GLIF, which the pool uses to make a decision about approving the action.

## Quota System

The current default quota is 500,000 FIL for all agents. You can request a quota increase by opening a support ticket in our [Discord](https://discord.gg/5qsJjsP3Re) server (#support-ticket). This mechanism ensures that the team can communicate important upgrades or information to SPs.

For security purposes, the Level 2 Agent's quota is set to 0. This allows us to quickly disable borrowing capabilities for an agent if necessary. This mechanism does not affect most agents.
