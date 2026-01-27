---
description: A New Way for LPs to Earn FIL Through GLIF+
---

# How FIL Capsules Work

## What are FIL Capsules

A FIL Capsule is an on-chain NFT that _encapsulates a predefined amount of FIL inside it,_ sourced directly from the GLIF protocol treasury.

* The encapsulated FIL can be unlocked by providing a fixed amount of $GLF tokens.
* The encapsulated FIL and required $GLF amounts are set at the moment the Capsule is issued and do not change.

### How to receive new FIL Capsules

* As long as your GLIF+ LP Card remains active, new Capsules are automatically issued to your wallet **every week**, and each Capsule remains valid for **30 days.**
* You get to decide when or if you want to unlock FIL Capsules

### Where FIL Capsule Rewards Come From

FIL Capsule rewards are funded by the **GLIF protocol treasury**. Every week, the protocol allocates a percentage of its FIL earnings to the GLIF+ LP program.

* The FIL encapsulated in each Capsule reflects your share of total iFIL staked across all active LP Cards.

> [!NOTE]
> At launch, either 1,000 FIL or 20 percent of all FIL earned during each week (whichever is less) is allocated to FIL Capsules.

***

## Premium Tiers

| **Ratio GLF:iFIL**    | **Premium to TWAP**                      |
| --------------------- | ---------------------------------------- |
| 1:1 (minimum)         | +1%                                      |
| Between 1:1 and 100:1 | Linear prorated premium from +1% to +25% |
| 100:1 (maximum)       | +25%                                     |

There are generally 3 scenarios to consider:

1. **Ratio below 1:1**
   * Your Card becomes inactive until you add more $GLF.
2. **Ratio between 1:1 and 100:1**
   * Your premium is calculated _pro-rata_ between the minimum and maximum.
   * **Example:** a 25:1 ratio receives a premium roughly one-quarter of the way between +1% and +25% (i.e., about +7%).
3. **Ratio above 100:1**
   * Your premium is capped at +25%.

> [!NOTE]
> These parameters will likely change as more data is gathered from real usage to support long-term economic durability and sustainability.

***

### Example

To illustrate, consider two Card holders: **Bob** and **Alice**.

| **Card Holder** | **$iFIL Staked** | **$GLF Staked** | **GLF:iFIL Staking Ratio** |
| --------------- | ---------------- | --------------- | -------------------------- |
| Bob             | 10               | 10              | 1:1                        |
| Alice           | 20               | 2000            | 100:1                      |

#### **Determining FIL per Capsule**

If the protocol issues **100 FIL total** for all LP Capsules during a given week , Alice’s Capsule will contain **twice as much FIL** as Bob’s, simply because she has staked **twice the iFIL**.

#### **Determining the Exchange Rate**

Your **GLF : iFIL staking ratio** determines your premium - the amount of $GLF tokens it costs to unlock the FIL inside your Capsule.

In the example above:

* Bob’s ratio: **10 GLF : 10 iFIL → 1:1 → 1% premium**
* Alice’s ratio: **2000 GLF : 20 iFIL → 100:1 → 25% premium**

Because Alice’s GLF:iFIL ratio is higher, she receives a **higher premium** above the $GLF market 7 day time weighted average price (TWAP) than Bob. The premium ensures that Alice, Bob, and all LPs receive a **better $GLF→FIL rate** than the prior 7-day TWAP when they unlock their Capsules, since they are redeeming $GLF directly with the protocol rather than swapping on a DEX.

> [!NOTE]
> When you unlock the FIL inside of a Capsule, the associated $GLF tokens used for the unlock are taken from your Card balance. This means that over time, your ratio of GLF : iFIL tokens will decrease unless you add more $GLF tokens to it.

#### Putting It All Together

Using our earlier numbers, assume:

* **FIL:GLF TWAP = 0.005 FIL per $GLF**
* **100 FIL** is issued across all LP Capsules for that epoch

We can define the Capsules that Alice and Bob receive:

| Card Holder | FIL Encapsulation Amount | Estimated Exchange Rate Premium | Exchange Rate   | $GLF Required To Unlock FIL | Validity Duration |
| ----------- | ------------------------ | ------------------------------- | --------------- | --------------------------- | ----------------- |
| Bob         | 33.333 FIL               | +1%                             | 0.00505 FIL/GLF | 6,600.59 $GLF               | 30 Days           |
| Alice       | 66.666 FIL               | +25%                            | 0.00625 FIL/GLF | 10,666.56 $GLF              | 30 Days           |
