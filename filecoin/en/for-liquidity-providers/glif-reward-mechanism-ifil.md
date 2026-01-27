
# GLIF Reward Mechanism - iFIL

## About iFIL

iFIL is GLIF's reward token - an ERC20 token deployed on FEVM. Liquidity Providers (LPs) hold iFIL tokens to earn rewards.

When an LP deposits FIL into the pool, they receive a proportionate amount of iFIL tokens in return, based on the current price of iFIL. As Storage Providers (SPs) accrue interest by borrowing FIL, the price of iFIL increases.

LPs can exchange iFIL back to FIL when they choose to withdraw. iFIL can be transferred to other wallets, traded on secondary markets, and used in other DeFi protocols.

## Calculation of iFIL

The amount of FIL that can be redeemed with 1 iFIL token is calculated by dividing the total accrued assets in the pool by the circulating supply of iFIL tokens. Therefore, the price of iFIL increases every block.

The iFIL price is computed as:

$$
iFIL Price = Pool Total Assets / iFIL Circulating Supply
$$

Where:

$$
Pool Total Assets = LP Deposits + Accrued Fees - Treasury Fees
$$

### **Basic Example:**

1. **iFIL Price:** Let’s imagine a simple scenario where the current price of iFIL is 1 FIL. So `1 iFIL == 1 FIL`
2. **LP Deposits:** An LP deposits 1 FIL into GLIF and receives 1 iFIL.
3. **SP Borrows and accrues interest:** As SP borrows and (over time) accrues interest, meaning the pool's total assets increase.
4. **Value Increase:** The iFIL price increases because as more total assets are earned by the pool. If the iFIL value increases by 5%, 1 iFIL is now worth 1.05 FIL.
5. **Withdrawal:** The LP can withdraw 1.05 FIL by redeeming 1 iFIL.

## Source of rewards

Rewards come from the interest accrued by SPs who borrow FIL from GLIF. The expected interest received from SPs is split proportionately among iFIL holders, and is automatically compounded in GLIF.

From an economic perspective, GLIF implements an accrual basis accounting method. In other words, it counts interest that it is owed from SP as part of its total assets before any payments are made. As a result, GLIF LPs earns rewards every block.

## Reward rates

SPs borrow FIL from the pool at a fixed interest rate of **15%**.

Only borrowed FIL by SP generates rewards. The borrowed FIL proportionate to the total FIL in the pool is referred to as the pool’s “utilization rate”.

* Utilization rate is computed as:

$$
Utilization Rate = FIL Borrowed / TotalFIL*100\%
$$

* The reward distributed to the LP is computed as:

$$
Reward=InterestRatePaidBy SP *UtilizationRate*90\%
$$

* The 90% factor accounts for the 10% fee taken by the GLIF protocol treasury

### See your rewards

LPs can check their FIL value of iFIL holdings by connecting wallet to GLIF, or visiting the [wallet](https://www.glif.io/en/wallet) or [multisig](https://www.glif.io/en/multisig) page of a particular address.

iFIL returns are shown in "_Tokens section":_

![Token section](https://lh7-us.googleusercontent.com/docsz/AD_4nXceJhIlPoW8eiSHHp4UI9OxvJEWmm8ewUaYGqcFYvczUDH-DA5CwEcYqK3mp1aeAMzE7hZ_ZC2D3FhoyjwwpjFT4qxJlbP9TdYjKOKXZKQhtRIvMH8npmLXI8IcnE3RkMV0gZCL3p6azpC0ppONEFnuajA?key=B4TufszgVJXBgC3iG30KYw)
