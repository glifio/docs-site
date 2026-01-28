# Transfer FIL between exchange and GLIF

If your FIL tokens are currently on an exchange and you are eager to utilize them to earn rewards by depositing to GLIF, or if you want to withdraw from GLIF to an exchange, this guide will simplify the process for you.

> [!WARNING]
> **WARNING**: Before transferring a large amount of funds to an exchange, send a small amount as a test transaction first.

## Understand Filecoin Address Types

Filecoin wallets have five address types: **f0, f1, f2, f3,** and **f410 (or 0x)**

An `f410` address means the first three digits after “f” are “410”, while a `0x` address means the first two characters are “0x”.

### **f410 or 0x address**

To use applications on the FVM, you may need to have FIL inside an `f410` or `0x` type address. Any `f410` wallet address also has an equivalent `0x` Ethereum-style address, so you can convert any `f410` address into a `0x` address, and vice versa. Check out this [tutorial](../wallets/how-to-find-your-corresponding-0x-f410-wallet-address.md) for instructions on how to convert `0x` and `f410` wallet addresses.

### **f1 address**

An `f1` wallet address is generated from a secp256k public key. The `f1` address is widely recognized by most exchanges. However, some centralized exchanges recognize only `f1` addresses and may not yet support receiving Filecoin directly from `f410` or `0x` type addresses as they do not recognize them as valid Filecoin destinations.

> [!NOTE]
> To check if your exchange supports transferring Filecoin to/from `f410` or `0x` type addresses, refer to the most up-to-date information [here](https://filecointldr.io/how-to-buy-filecoin).

## Step-by-step guide

Before conducting any transactions between your wallet and an exchange, **check if your wallet supports the address type you are using.** You can follow the step-by-step guides for different exchanges to learn how to perform the corresponding transaction:

* Binance:
  * [Transfer FIL from Binance to GLIF](binance/transfer-fil-from-binance-to-glif.md)
  * [Transfer FIL from GLIF to Binance](binance/transfer-fil-from-glif-to-binance.md)
* MEXC:
  * [Transfer FIL from MEXC to GLIF](mexc/transfer-fil-from-mexc-to-glif.md)
  * [Transfer FIL from GLIF to MEXC](mexc/transfer-fil-from-glif-to-mexc.md)

> [!CAUTION]
> **WARNING**: Certain exchanges like Bybit, MEXC, Binance US and others do not support transfers from 0x style Filecoin addresses yet. Before transferring any funds to an exchange, send a test transaction first.

***

## Conclusion

Now, you can deposit your tokens directly from your exchange to GLIF and start earning rewards! Check the[ step-by-step guide](../using-the-pool/deposit-fil-into-glif-to-earn-rewards.md) in this tutorial for detailed deposit instructions.

Finally, put your FIL to use and earn rewards with GLIF!
