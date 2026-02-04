# Transfer FIL from GLIF to MEXC

This tutorial will guide you through the process of withdraw your iFIL tokens from GLIF to an exchange.  This tutorial is specifically for transferring FIL to MEXC. Check this [page](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/3-transfer-fil-to-from-exchanges/1-transfer-fil-between-exchange-and-glif) for tutorials on other exchanges.

> [!HINT]
> GLIF is compatible with most EVM wallets. This tutorial uses MetaMask wallet as an example; other wallets also work.
>
> You can refer to our [FAQ](/docs/7-troubleshooting/1-faq/1-for-liquidity-providers/5-wallet-connection) and [Wallet tutorials](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/1-wallets) for more information. If you encounter any trouble, please contact GLIF through a [Discord support ticket](https://discord.gg/5qsJjsP3Re).

## Contents

[Step 1: Withdrawing FIL from GLIF to your main wallet](#step-1-withdrawing-fil-from-glif-to-your-main-wallet)

[Step 2: Set up an intermediary wallet (optional)](#step-2-set-up-an-intermediary-wallet-optional)

[Step 3: Send FIL from 0x/f410 address (main wallet) to f1 address (Intermediary wallet)](#step-3-send-fil-from-0x-f410-address-main-wallet-to-f1-address-intermediary-wallet)

[Step 4: Locate your recipient address in the exchange](#step-4-locate-your-recipient-address-in-the-exchange)

[Step 5: Send FIL from your wallet to exchange](#step-5-send-fil-from-your-wallet-to-exchange)

## Step 1: Withdrawing FIL from GLIF to your main wallet

1. Connect your main wallet to GLIF, which was used to deposit into GLIF and holds iFIL.
2. To transfer your iFIL from the GLIF pool to FIL, follow the [step-by-step guide](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/2-using-the-pool/4-withdraw-fil-from-glif) in this tutorial.
3. After withdrawn FIL, you will receive FIL in your main wallet. Click on “**Wallet**” tab in the GLIF navigation, and you will be able to see the FIL and iFIL balance in the “**Account**” section.

![Token balances](en-image-60.png)

## Step 2: Set up an intermediary wallet (optional)

**If your main wallet holding FIL has an address starting with `f1`:**

* You can skip to [Step 4](#step-4-locate-your-recipient-address-in-the-exchange) and [Step 5](#step-5-send-fil-from-your-wallet-to-exchange) directly.

\
**If your main wallet holding FIL has an address starting with `f410` or `0x`:**

* You will need to use an intermediary wallet such as a [FilSnap wallet](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/1-wallets/4-how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet), [burner wallet](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/1-wallets/3-how-to-obtain-a-burner-wallet-as-the-intermediary-wallet), or [Ledger](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/1-wallets/2-how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet). Check out the step-by-step guide for creating your intermediary wallet by clicking the link.
* This is because some exchanges, including MEXC, do not support deposit from `f410` or `0x` addresses. Check this [page](/docs/7-troubleshooting/2-tutorials/1-for-token-holders/3-transfer-fil-to-from-exchanges/1-transfer-fil-between-exchange-and-glif) for more details.

Once done, your intermediary wallet's address, starting with `f1`, will be visible in the top right dropdown. Copy this address.

![Copy address](en-image-44.png)

## Step 3: Send FIL from 0x/f410 address (main wallet) to f1 address (Intermediary wallet)

1. Connect to your main wallet, which is the one we just withdrew FIL into.
2. In the top right corner of GLIF website, click “**Send / Forward FIL**”.

> [!CAUTION]
> Do not use the MetaMask browser extension wallet to send FIL in this step. Otherwise, your MetaMask may be connected to the Ethereum mainnet instead of the Filecoin mainnet.

![MetaMask prompt](en-image-86.png)

3. In the “**Forward FIL**” page, paste your **intermediary wallet's f1 address** in the recipient field. This is the wallet created in [Step 2](#step-2-set-up-an-intermediary-wallet-optional).
4. Enter the amount of FIL you wish to transfer (start with a small test amount)
5. Click “**Send**”

![Send button](en-image-46.png)

> [!NOTE]
> Please ensure you have sufficient FIL for gas fees; 0.001 FIL is usually more than enough.

6. Click “**Confirm**” in your main wallet.
7. After the transaction completed, you can check the balance of your intermediary wallet in the “**Wallet**” tab in GLIF.

## Step 4: Locate your recipient address in the exchange

1. Go to your centralized exchange, MEXC, and locate FIL in your portfolio. Click “**Deposit**.”
2. Copy the `f1` address provided.

![Copy address](en-image-47.png)

> [!CAUTION]
> **WARNING**: Before transferring a large amount of funds to an exchange, send a small amount as a test transaction first.

## Step 5: Send FIL from your wallet to exchange

1. Connect to the intermediary wallet or your main wallet which address starting with `f1`.
2. In the top right corner of the GLIF website, click “**Send FIL**.”

![Send button](en-image-93.png)

3. Paste your exchange address copied in [step 4.](#step-4-locate-your-recipient-address-in-the-exchange)
4. Enter the desired amount of FIL to transfer.
5. Click “**Send**” and confirm the transaction in your wallet.

![Wallet confirmation](en-image-94.png)

6. After the transaction is completed, you can check the balance in your exchange.

> [!WARNING]
> Since it requires a high number of block confirmations, **it may take up to an hour for the exchange to confirm your transfer**. If the transaction does not arrive after more than a day, try contacting the exchange support.

## Conclusion

By following this step-by-step guide, you can successfully withdraw FIL from GLIF to your exchange! Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.
