# Transaction Issue

## Why is the amount of FIL available to borrow for my node so small given that I have more collateral available?

The current quota system within the pool may limit your borrowing capacity. This quota increases once the GLIF team has established a point of contact with the agent. Initially, this mechanism ensured that the team could communicate important upgrades or information to Storage Providers (SPs). You can request a quota increase [here](https://forms.gle/oSHkyXNixdaE4DUP7).

## Why does the address I'm transferring money to show a different one in the hash?

The hash is a unique identifier for your transaction. The transaction involves several underlying smart contract function calls before it finally transfers the FIL to the provided address.

## Why does it show that the transfer was successful, but the chain shows the amount as 0, and my receiving account didn't receive the transfer?

This can be confusing but is correct. The top-level transaction is from your agent owner to your agent. The FIL transfer is an internal transaction within the system.
