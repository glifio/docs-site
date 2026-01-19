# Transfer FIL from MEXC to GLIF

If your FIL tokens are currently on an exchange and you are eager to utilize it to earn rewards, and depositing to GLIF, this guide will simplify the process for you.&#x20;

This tutorial is specifically for transferring FIL from MEXC. Check this [page](../transfer-fil-between-exchange-and-glif.md) for tutorials on other exchanges.

{% hint style="info" %}
GLIF is compatible with most EVM wallets. This tutorial uses MetaMask wallet as an example; other wallets also work.&#x20;

You can refer to our [FAQ](../../../../faq/faq-for-liquidity-providers/wallet-connection.md) and [Wallet tutorials](../../wallets/) for more information. If you encounter any trouble, please contact GLIF through a [Discord support ticket](https://discord.gg/5qsJjsP3Re).
{% endhint %}

## Contents

[Step 1: Set up an intermediary wallet (optional)](transfer-fil-from-mexc-to-glif.md#step-1-set-up-an-intermediary-wallet-optional)

[Step 2: Send Filecoin from the exchange to the intermediary wallet](transfer-fil-from-mexc-to-glif.md#step-2-send-filecoin-from-the-exchange-to-the-intermediary-wallet)

[Step 3: Check FIL balance in your intermediary wallet](transfer-fil-from-mexc-to-glif.md#step-3-check-fil-balance-in-your-intermediary-wallet)

[Step 4: Connect your main wallet to GLIF and Filecoin Mainnet](transfer-fil-from-mexc-to-glif.md#step-4-connect-your-main-wallet-to-glif-and-filecoin-mainnet)

[Step 5: Transfer Filecoin from the intermediary wallet to your main wallet](transfer-fil-from-mexc-to-glif.md#step-5-transfer-filecoin-from-the-intermediary-wallet-to-your-main-wallet)

[Step 6: Deposit your Filecoin with GLIF](transfer-fil-from-mexc-to-glif.md#step-6-deposit-your-filecoin-with-glif)

## Step 1: Set up an intermediary wallet (optional)

**If the wallet you want to transfer FIL to has an address starting with "**<mark style="background-color:orange;">**f1**</mark>**":**

* You can skip to [Step 2](transfer-fil-from-mexc-to-glif.md#step-2-send-filecoin-from-the-exchange-to-the-intermediary-wallet) and [Step 6](transfer-fil-from-mexc-to-glif.md#step-6-deposit-your-filecoin-with-glif) directly.

\
**If the wallet you want to transfer FIL to has an address starting with "**<mark style="background-color:orange;">**f410**</mark>**" or "**<mark style="background-color:orange;">**0x**</mark>**":**

* You will need to use an intermediary wallet such as a [FilSnap wallet](../../wallets/how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md), [burner wallet](../../wallets/how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md), or [Ledger](../../wallets/how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md). Check out the step-by-step guide for creating your intermediary wallet by clicking the link.
* This is because some exchanges, including MEXC, do not support transfer to "f410" or "0x" addresses. Check this [page](../transfer-fil-between-exchange-and-glif.md) for more details.

Once done, your intermediary wallet’s address, starting with ‘**f1**’, will be visible in the top right dropdown. Copy this address.

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (44).png" alt="" width="563"><figcaption></figcaption></figure></div>

## Step 2: Send Filecoin from the exchange to the intermediary wallet

1. Go to your centralized exchange, MEXC and locate FIL in your portfolio. Click "**Withdraw"**.
2. Select Network as "**FIL**".
3. Enter the intermediary wallet address created in[ step 1](transfer-fil-from-mexc-to-glif.md#step-1-set-up-an-intermediary-wallet-optional). Make sure you have copied the address correctly.
4. Enter the amount you want to send.

{% hint style="warning" %}
If you are doing this for the first time, it's good practice to send a small amount first in case you make any mistakes.
{% endhint %}

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (45).png" alt="" width="345"><figcaption></figcaption></figure></div>

Once the transaction is complete, your Filecoin balance will appear in the wallet.

## Step 3: Check FIL balance in your intermediary wallet

1. Once the transaction is completed, you can verify your intermediary wallet balance by clicking the "**Wallet**" tab on the GLIF website.&#x20;

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (57).png" alt="" width="563"><figcaption></figcaption></figure></div>

2. Check your FIL balance in the "**Account**" tab and view transaction details in the "**Transaction**" tab.

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (58).png" alt="" width="563"><figcaption></figcaption></figure></div>

## Step 4: Connect your main wallet to GLIF and Filecoin Mainnet

1. Connect to the main wallet you want to transfer FIL to.&#x20;
2. Copy your account address (starting with ‘0x’ or 'f410' address).

For detailed instructions on how to connect your wallet to the Filecoin Mainnet, check out this [tutorial](../../wallets/how-to-connect-your-wallet-to-filecoin-mainnet.md).

## Step 5: Transfer Filecoin from the intermediary wallet to your main wallet

1. Once the Filecoin is in your intermediary wallet, connect to your intermediary wallet.
2. Click the top-right dropdown in GLIF and choose **‘Send FIL’**.

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (167).png" alt="" width="563"><figcaption></figcaption></figure></div>

3. Paste your main wallet address copied in [step 4](transfer-fil-from-mexc-to-glif.md#step-4-connect-your-main-wallet-to-glif-and-filecoin-mainnet), into the recipient field in GLIF and specify the amount to send.&#x20;

{% hint style="info" %}
You need to make sure that you leave enough FIL in the wallet to cover gas fees.
{% endhint %}

4. Then hit **‘Send’**.

<div align="left"><figure><img src="../../../../../.gitbook/assets/image (169).png" alt="" width="563"><figcaption></figcaption></figure></div>

After a few moments, your Filecoin balance will appear in your main wallet!

## Step 6: Deposit your Filecoin with GLIF

Now, you can deposit your tokens directly from your main wallet to GLIF and start earning rewards! Check the[ step-by-step guide](../../using-the-pool/deposit-fil-into-glif-to-earn-rewards.md) in this tutorial for detailed deposit instructions.

## Conclusion

By following this step-by-step guide, you can successfully transfer FIL from your exchange to GLIF! Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
