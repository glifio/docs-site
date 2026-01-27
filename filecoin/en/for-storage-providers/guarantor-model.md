---
description: Enable using miners as collateral for other miners
---

# Guarantor Model

Sometimes SPs control multiple, individual Miner Actors. Each Miner Actor might be different in its collateral value, scalability, and geography. The guarantor model allows a single SP to aggregate multiple Miner Actors together, aggregating its equity and borrowing power. This architecture allows a big Miner Actor with large collateral value to post collateral for a much smaller Miner Actor to borrow funds.

![Guarantor Model](https://docs.glif.io/~gitbook/image?url=https%3A%2F%2F4283338172-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FsLhVfzjYL8y6kgO9L4m4%252Fuploads%252FAtsRMONVmuLeUEzGn53i%252FFrame%2520138172.png%3Falt%3Dmedia%26token%3D3e04d4c4-3957-4436-a1ad-bad93899d31f&width=768&dpr=4&quality=100&sign=55e062e3&sv=1)

The Miner Actor that serves as the collateral node does not need to be the Miner Actor that ends up receiving borrowed funds. See more information about aggregating borrowing power under the [Agents](manage-miner-actors-with-agents.md) section.
