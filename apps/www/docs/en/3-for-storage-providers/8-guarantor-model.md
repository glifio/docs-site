# Guarantor Model

Sometimes SPs control multiple, individual Miner Actors. Each Miner Actor might be different in its collateral value, scalability, and geography. The guarantor model allows a single SP to aggregate multiple Miner Actors together, aggregating its equity and borrowing power. This architecture allows a big Miner Actor with large collateral value to post collateral for a much smaller Miner Actor to borrow funds.

![Guarantor Model](en-guarantor-model.webp)

The Miner Actor that serves as the collateral node does not need to be the Miner Actor that ends up receiving borrowed funds. See more information about aggregating borrowing power under the [Agents](/for-storage-providers/manage-miner-actors-with-agents) section.
