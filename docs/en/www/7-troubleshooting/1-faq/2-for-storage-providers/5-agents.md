# Agents

## What is the role of agents in the GLIF system?

Agents are smart contracts that allow Storage Providers (SPs) to collateralize their Filecoin Miner Actors to borrow FIL. Agents act as intermediaries between SPs and GLIF, allowing SPs to maintain ownership and control over their Miner Actors while borrowing from GLIF.

Agents are the only smart contracts that are allowed to borrow FIL from the pool. When an Agent borrows FIL from the pool, it can either withdraw it out of the system, or send it to one of the Agent's pledged miners to use in the Filecoin Storage Mining process.

Read [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for more details.

## How does the guarantor model work?

The [guarantor model](/docs/3-for-storage-providers/8-guarantor-model) allows an SP to use a larger, more valuable Miner Actor as collateral to support borrowing for other Miner Actors. In other words, the miner used as collateral does not also have to be the miner used for sealing.

## What are the responsibilities of the Agent owner and Agent operator keys?

Just like the Filecoin Miner Actor's owner, worker, and control addresses, GLIF Agents have an owner and operator address with different permissions:

* **Owner Key**: Manages sensitive actions like borrowing, withdrawing,  and adding/removing miner actors from the Agent.
* **Operator Key**: Handles payments, worker addresses, and day to day operations.

Read [here](/docs/3-for-storage-providers/7-manage-miner-actors-with-agents) for more details.

## What is the Agent Police and its function?

The Agent Police is GLIF's keeper contract that ensures each Agent stays within debt-to-liquidation (DTL) ratio when executing actions like borrowing or withdrawing FIL. If an Agent violates system rules, the Agent Police is responsible for processing Agent state transitions and liquidations.

## How to remove a miner from an agent?

**Step 1:**

Propose an ownership change for your miner (miner-id) to set the new-owner-address as the new owner with this command:

`glif agent miners remove <miner-id> <new-owner-address>`

**Step 2:**

Step 2 has to be done outside of GLIF – the new owner address must confirm the ownership change. If you're using Lotus, this command is implemented as:

`lotus actor set-owner --really-do-it …`
