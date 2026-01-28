# Exit - Withdraw stICNT

Today, the mechanism for redeeming ICNT for stICNT tokens is through our [Uniswap](https://app.uniswap.org/explore/pools/base/0x655c8ae242c2707fa13ab5b093567d3c6f114ad60cae2d5c9adf106670bca15c) pool on Base. stICNT holders can simply swap stICNT for ICNT at the current price quoted by the pool.

### Protocol Owned Liquidity

The ICN Pool uses rewards in 2 ways:

1. For restaking rewards back into the pool to compound yield
2. For adding exit liquidity to the DEX Pool on Uniswap

Over time, an increasing percentage of rewards are added as DEX liquidity rather than restaked into ICN Protocol - this is called “Protocol owned Liquidity” (or “PoL” for short).

![Protocol Owned Liquidity](icn-image-6.png)

### Native Exits

Eventually, the delegated stakes that are locked on the ICN Protocol will come due - meaning, they can be unstaked at any time. As we get closer to this date (which will not occur before 1 year from launch date), native exits through the protocol become possible. The native exit mechanism is still in design, but a few parts are generally known:

#### Exit Reserve

Once native exits are enabled, the pool will maintain an asset reserve specifically for facilitating stICNT exit. The asset reserve (also known as “exit reserve”) is not available for staking activities or for Hardware Providers (HP) to borrow ICNT from. If GLIF's liquidity dips under the exit reserve requirement, all staking and lending activities are paused until the reserve is rebuilt.

#### Shortest lockup tokens unstaked first

If the exit reserve drops under its minimum requirement, the pool will automatically search for the shortest lockup duration vault to unstake first. It does this because delegated staking positions that are “expired” still earn rewards according to their original lockup periods. For instance, if an ICNT position is made with a 3 month lockup, after 3 months passes, the position still earns rewards and can be unstaked within a 1 day turnaround.

Therefore, the “shortest lockup tokens unstaked first” strategy means that - all else equal - a 3 month position will be unstaked to refill the exit reserve before a 6 month (or longer) position gets unstaked. The pool effectively tries to unstake the _minumum_ possible amount to satisfy exit requirements.
