# Unstaking

stICNT holders can redeem their tokens for ICNT directly through GLIF at any time, provided that the Impossible Cloud pool has sufficient liquidity to process the withdrawal.

## How it works

The Impossible Cloud pool maintains a built-in exit reserve specifically for facilitating stICNT withdrawal. 10% of the pool's assets are held in ICNT to ensure liquidity for withdrawals.

* Whenever exit liquidity is available, stICNT holders can redeem ICNT directly from the pool.
* If the exit reserve ever drops below 10%, the system automatically redirects all rewards and new deposits into the reserve until the target balance is restored.

## Redemption Fee

Each withdrawal carries a 0.5% withdrawal fee, which is fully distributed to remaining stakers in the pool. Due to the compounding of assets in the pool, this fee is generally offset by yield after a short staking period.

> [!NOTE]
> Long-term stakers benefit when others withdraw early, as compounded yield offsets the withdrawal fee.

### Purpose of the Withdrawal Fee

1. Economic Security: Prevents opportunistic withdrawals that could rapidly drain exit reserves, ensuring sustainable liquidity for everyone in the pool.
2. Long-Term Alignment: The underlying ICNT stakes are delegated to ICN nodes for up to four years to maximize network rewards. The fee discourages short-term churn and aligns incentives with the network's long-term growth.
