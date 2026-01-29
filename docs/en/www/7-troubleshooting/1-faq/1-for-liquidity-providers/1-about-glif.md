# About GLIF

## What is GLIF?

GLIF is the foundational DeFi primitive of [Filecoin](https://filecoin.io/) - enabling Filecoin token holders to earn sustainable rewards on their FIL by lending (aka “leasing”) it to a diverse pool of Filecoin miners (also known as “Storage Providers”). Storage Providers (SPs) borrow FIL to use as pledge collateral in Filecoin mining, which helps Storage Providers grow and simultaneously improves the security of the Filecoin network. Similar to “liquid staking” solutions for PoS networks like [Lido](https://lido.fi/) or [Jito](https://www.jito.network/zh-TW/), GLIF solves a major capital inefficiency on the Filecoin network, and is Filecoin's first and most popular DeFi protocol.

The GLIF brand has been a long-term trusted partner of the Filecoin ecosystem since early 2019, receiving more than 4 million dollars in grant funding from Protocol Labs and the Filecoin Foundation to build critical apps and tools for the Filecoin network. Most notably, GLIF built the first Filecoin web wallet and multisig wallet for Filecoin's Mainnet launch, which are still widely used today across the ecosystem for employee payments, grants, and general day-to-day operations.

Click [here](https://docs.glif.io/) to know more about GLIF.

## What can I do with GLIF as a FIL Token Holder?

There are a couple ways you can use GLIF as a FIL token holder:

1. Use our built-in wallet or multisig features - GLIF's [wallet](https://www.glif.io/en/wallet) and [multisig](https://www.glif.io/en/multisig) are used by a large portion of the Filecoin network for sending/receiving/custodying FIL.
2. Deposit FIL into GLIF to earn rewards. You can read more it [here](/2-for-liquidity-providers/2-glif-reward-mechanism-ifil).

## Why is GLIF important?

Prior to the launch of the [FVM](https://fvm.filecoin.io/) (Filecoin's built-in virtual machine allowing developers to deploy custom solidity smart contracts to the Filecoin blockchain), the network was bottlenecked with capital inefficiencies. Storage Providers had no permissionless, efficient, and flexible way to borrow FIL to use as mining collateral, and the majority of Filecoin token holders had no safe and accessible opportunities to lease FIL to Storage Providers to earn native, sustainable rewards.

GLIF fills the gap between FIL token holders and Storage Providers through the use of smart contracts, creating a highly efficient, scalable, and trust-minimized marketplace with predictable rules. GLIF enables token holders to sustainably earn rewards and Storage Providers to scale their growth.

## I don't understand the usage scenario of GLIF. Why do miners need to deposit FIL in GLIF and borrow FIL back when they are the same token?

Indeed, miners, or Storage Providers (SPs), do not need to deposit FIL into GLIF. Instead, they use the FIL already pledged on their miner(s) as collateral. Let's explore how GLIF works with SPs:

GLIF enables SPs to borrow FIL from a large group of Liquidity Providers (LPs), without giving away any private keys or needing to go through a manual diligence process. Borrowed funds can be used for sealing, or for withdrawing out of the system entirely. In order to become eligible for borrowing, SPs must add collateral to GLIF. SPs can use pledge collateral already locked in their existing miners to borrow FIL, enabling them to scale operations without buying more FIL.

## When SPs borrow from GLIF, what do they use as collateral?

By reusing pledge collateral and vesting rewards already locked in existing miners, Storage Providers (SPs) can efficiently scale their operations without needing to purchase more FIL. The FIL collateral provided by SPs is illiquid, having already been pledged to the Filecoin network for storage mining.

## Why do SPs need to provide collateral?

Collateral plays a crucial role in ensuring the security and stability of the entire pool. If SPs break the rules of the pool, their collateral can be liquidated, which allows the pool to recover FIL on behalf of LPs, to mitigate (and ideally avoid all together) any losses.
