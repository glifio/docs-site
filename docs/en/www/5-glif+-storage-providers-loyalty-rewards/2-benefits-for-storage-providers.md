# Benefits for Storage Providers

GLIF+ Card holders receive two primary benefits:

1. **Increased borrowing limits** - up to 10x leverage (tier-dependent)
2. **FIL interest cash back** - pay part of your interest in $GLF and receive FIL back at a premium

## Increased borrowing limits

Active GLIF+ cardholders receive higher borrowing limits, up to 10× leverage. See the [Tier Table](/docs/5-glif+-storage-providers-loyalty-rewards/3-tiers-and-limits) for exact limits per status.

## FIL Interest Cash Back

Today, SPs who want to realize FIL from their $GLF typically swap $GLF→$FIL on SushiSwap or via our site. The Cash back program is a more efficient alternative: use $GLF to cover a portion of each interest payment and receive FIL back at a premium.

> [!CAUTION]
> It is recommended not to withdraw directly to an exchange, since some exchanges may not support the transaction format and this could result in loss of funds. Because all cash back is sent in a single transaction, a test transfer is not possible. For safety, please withdraw to a wallet you own first, confirm the balance, and then send to an exchange if needed.

#### How it works:

1. You've borrowed from GLIF and have interest due.
2. You hold an active GLIF+ Loyalty Card (see activation steps in [next section](/docs/5-glif+-storage-providers-loyalty-rewards/4-how-to-join-glif+-sp-program)).
3. You fund your Card with $GLF for cash back.

Once funded, up to 10% of every interest payment can be redeemed with your $GLF. The protocol swaps your $GLF into FIL at a premium determined by your tier—up to +25% for Gold members. See the [Tier Table](/docs/5-glif+-storage-providers-loyalty-rewards/3-tiers-and-limits) for details.

#### **Example**

* Imagine you're a Storage Provider with a Silver card, and 1000 FIL in outstanding interest owed to the GLIF Protocol.
* You load up your GLIF+ Loyalty Card with 20000 $GLF Tokens to participate in the cash back program.
* When you make your interest payment of 1000 FIL, 10% of the payment (100 FIL) is eligible for cash back.
* The Protocol looks at the current price of GLF:FIL on the market, and applies the Tier premium to the exchange rate.
  * For simplicity purposes, let's say the base price of GLF:FIL ⇒ 1 $GLF : 0.005 FIL
  * The Silver tier premium is +10%, so the premium price for Silver Tier Card holders is 1 $GLF = 0.0055 FIL
  * The Protocol makes the 100 FIL available to the Card holder, in exchange for 18181.8 $GLF Tokens
* The end effect is that the Storage Provider was able to swap 18181.8 $GLF Tokens for 100 FIL after paying interest. If the SP had tried to swap 18181.8 $GLF Tokens on the DEX for FIL, after fees and slippage, the trade would result in significantly less FIL tokens.

### **TWAP Pricing**

DEX prices can be volatile. For security, cash back uses a 7-day time-weighted average price (TWAP) for $GLF. Short-term price spikes do not impact the TWAP. Tier premiums are applied over the program's TWAP price.

### Cash back Vault

To maintain economic security and prevent the treasury from being drained by unusually large or extremely delayed interest payments, the cash back program uses a capped vault that is refilled (at most) every two weeks. Each refill brings the vault balance up to the lesser of:

1. 5,000 FIL, or
2. 50% of the treasury fees earned during the previous two-week period.

If an SP makes an interest payment while the cash back vault has 0 FIL, the payment processes normally and no GLF tokens are used. If the vault has some FIL but not enough to cover the full cash back amount, the program will apply the maximum available FIL and use a pro-rata amount of GLF tokens for the remainder.
