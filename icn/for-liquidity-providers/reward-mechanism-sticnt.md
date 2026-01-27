
# Reward Mechanism - stICNT

## **About stICNT**

stICNT is a reward bearing $ICNT token. It's an ERC20 deployed on Base. Liquidity Providers (LPs) hold stICNT tokens to earn rewards.\
\
When an LP deposits ICNT into the pool, they receive a proportionate amount of stICNT tokens in return, based on the current price of stICNT. As staking rewards accrue, the price of stICNT increases.\
\
LPs can exchange stICNT back to ICNT on Uniswap, and later on, directly through the Pool. stICNT can be transferred to other wallets, traded on secondary markets, and used in other DeFi protocols.

There is theoretically no "max supply" of stICNT, since new stICNT will be minted whenever an ICNT token holder deposits tokens into the Pool. Technically speaking, there can never be more than 700,000,000 stICNT, since this is the maximum supply of ICNT.

## **Calculation of stICNT**

The amount of ICNT that can be redeemed with 1 stICNT token is calculated by dividing the total accrued assets in the pool by the circulating supply of stICNT tokens. Therefore, the price of stICNT increases continuously over time.

\
The stICNT price is computed as:

$$
stICNT Price = Pool Total Assets / stICNT Circulating Supply
$$

Where:

$$
Pool Total Assets = LP Deposits + Accrued Fees - Treasury Fees
$$

### **Basic Example:**

1. **stICNT Price:** Let’s imagine a simple scenario where the current price of stICNT is 1 ICNT. So `1 stICNT == 1 ICNT`
2. **LP Deposits:** An LP deposits 1 ICNT into GLIF and receives 1 stICNT.
3. **Staking rewards accrue:** As staking rewards accrue, the pool's total assets increase.
4. **Value Increase:** The stICNT price increases because as more total assets are earned by the pool. If the stICNT value increases by 5%, 1 stICNT is now worth 1.05 ICNT.

## Source of rewards

Today, rewards come from delegated staking positions on the ICN Protocol. The expected returns are determined solely by ICN Protocol. As more tokens are staked into ICN, the prospective return rates drop.

In the next version of the protocol, in addition to staking in delegated collateral positions, ICNT tokens from the pool can be lent out to Hardware Providers in order for them to post collateral and bring on more hardware. Once the staking yields drop lower than the potential interest earned from lending ICNT, the lending model will turn on.
