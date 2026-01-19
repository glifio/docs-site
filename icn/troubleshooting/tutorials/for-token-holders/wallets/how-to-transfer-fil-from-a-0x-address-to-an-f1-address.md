# How to transfer FIL from a 0x address to an f1 address

To send FIL from a 0x address to an f1 address, you will need to use an intermediary wallet such as a [FilSnap wallet](how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md), [burner wallet](how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md), or [Ledger](how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md), which facilitates the necessary conversions. This guide will walk you through the process of creating an intermediary wallet and using it as an intermediary to transfer FIL from your 0x address to the desired f1 address.

{% hint style="info" %}
This tutorial uses MetaMask wallet as an example, as it works better with FEVM; other wallets also work.You can refer to our [FAQ](../../../faq/faq-for-liquidity-providers/wallet-connection.md) if you encounter any trouble or please contact GLIF through a [Discord support ticket](https://discord.gg/5qsJjsP3Re).
{% endhint %}

## Contents

This guide will walk you through:

**Step 1:** [**Set Up Your Intermediary Wallet**](how-to-transfer-fil-from-a-0x-address-to-an-f1-address.md#step-1-set-up-your-burner-wallet-on-glif)

**Step 2:** [**Send FIL from 0x address (MetaMask) to f1 address (intermediary wallet)**](how-to-transfer-fil-from-a-0x-address-to-an-f1-address.md#step-2-send-fil-from-0x-address-main-wallet-to-f1-address-intermediary-wallet)

**Step 3:** [**Transfer FIL from Burner Wallet to your f1 address (final destination)**](how-to-transfer-fil-from-a-0x-address-to-an-f1-address.md#step-3-transfer-fil-from-burner-wallet-to-your-f1-address-final-destination)

{% hint style="info" %}
**Before your send any FIL to any wallet, test it with a small amount of FIL.**

No matter which wallet you use, always make sure to back up your secret recovery phrase, store it securely, and never share it with anyone.&#x20;
{% endhint %}

## Step 1: Set Up Your Intermediary Wallet

You can choose an intermediary wallet to obtain an **f1** address from the following options:

* [Choice A: Burner Wallet](how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md)
* [Choice B: FilSnap Wallet](how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md)
* [Choice C: Ledger Wallet](how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md)

For details on creating an intermediary wallet, please refer to the tutorial by clicking the link.

## Step 2: Send FIL from 0x address (main wallet) to f1 address (intermediary Wallet)

{% hint style="danger" %}
Remember to use the **"Send/Forward FIL" page within GLIF** when you attempt to send from a 0x address to an f1 address.&#x20;

**Do not use the MetaMask browser extension wallet to send FIL in this step.** Otherwise, your MetaMask may be connected to the Ethereum mainnet instead of the Filecoin mainnet.
{% endhint %}

{% hint style="info" %}
It will be easier to manage the transaction if you open **two tabs**:

* **Tab 1:** Connected to **MetaMask** for sending funds.
* **Tab 2:** Connected to a **burner wallet** for receiving funds, then sending them to your **F1 address**.
{% endhint %}

1. Visit the GLIF website and click **"Connect Wallet."** Select your **main wallet**, which is the one holding your FIL.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (193).png" alt="" width="378"><figcaption></figcaption></figure></div>

2. Connect your main wallet to the Filecoin mainnet. Click "**Connect**".

<div align="left"><figure><img src="../../../../.gitbook/assets/image (297).png" alt="" width="355"><figcaption></figcaption></figure></div>

3. If you see this page, it means your wallet is connected.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (196).png" alt=""><figcaption></figcaption></figure></div>

4. In the top right corner of GLIF website, click **"Send / Forward FIL"** .

<div align="left"><figure><img src="../../../../.gitbook/assets/image (151).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. In the "**Forward FIL**" page, paste your **intermediary wallet's f1 address** in the recipient field. This is the wallet created in [Step 1](how-to-transfer-fil-from-a-0x-address-to-an-f1-address.md#step-1-set-up-your-intermediary-wallet). Burner wallet is used as an example here.
6. Enter the amount of FIL you wish to transfer (start with a small test amount).

{% hint style="warning" %}
**Before your send any FIL to the burner wallet, test it with a small amount of FIL.**
{% endhint %}

<div align="left"><figure><img src="../../../../.gitbook/assets/image (153).png" alt="" width="563"><figcaption></figcaption></figure></div>

7. Click **"Confirm"** in MetaMask.

{% hint style="warning" %}
Please ensure you have sufficient FIL for gas fees; 0.001 FIL is usually more than enough.
{% endhint %}

<div align="left"><figure><img src="../../../../.gitbook/assets/image (200).png" alt="" width="284"><figcaption></figcaption></figure></div>

{% hint style="info" %}
If you are unable to get a confirmation in your main wallet (e.g. MetaMask), there may be an internal error. Try these steps:

1. Restart your browser.
2. Sign back into your main wallet.
3. Ensure your main wallet is connected to the Filecoin Mainnet.
4. Open GLIF website and reconnect your main wallet.
5. Try sending the funds again.
{% endhint %}

8. In the bottom right corner of the webpage, a notification box will appear, indicating **"Transaction Pending"** and providing you with a tx hash. When the transaction is completed, it will change to **"Transaction Completed".**

<div align="left"><figure><img src="../../../../.gitbook/assets/image (154).png" alt="" width="375"><figcaption></figcaption></figure></div>

{% hint style="info" %}
The GLIF team **cannot** help you find your tx hash. Please record your tx hash for tracking your transaction.
{% endhint %}

9. &#x20;You can check the transaction details on [filfox.info](https://filfox.info/en) by searching the tx hash.
10. To confirm that the FIL you transferred went to your burner address, click **"internal transfer"** on the [filfox.info](https://filfox.info/en) transaction details page to view the address details. The **"To"** address should match your burner wallet's f1 address.

<figure><img src="../../../../.gitbook/assets/image (156).png" alt=""><figcaption></figcaption></figure>

11. Once the transaction is completed, disconnect MetaMask (main wallet). Then, click **"Connect Wallet"** and connect your intermediary wallet by importing the seed phrase you saved earlier.&#x20;

For the burner wallet, remember to choose **"Filecoin (f1...)"** as the address type.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (209).png" alt="" width="503"><figcaption></figcaption></figure></div>

12. Check your intermediary wallet balance on the GLIF **"wallet"** page, or verify it by searching your burner wallet's f1 address on [filfox.info](https://filfox.info/en).

<div align="left"><figure><img src="../../../../.gitbook/assets/image (157).png" alt="" width="563"><figcaption></figcaption></figure></div>

## Step 3: Transfer FIL from Burner Wallet to your f1 address (final destination)

1. Stay connected to your burner wallet. On the GLIF website, click **"Send FIL."**

<div align="left"><figure><img src="../../../../.gitbook/assets/image (158).png" alt="" width="563"><figcaption></figcaption></figure></div>

2. Paste your final f1 destination address in the recipient field.
3. Enter the desired amount of FIL to transfer.
4. Click **"Send"** and confirm the transaction.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (159).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. After the transaction completed, you can check the transaction hash in the bottom right corner of the GLIF page.

<div align="left"><figure><img src="../../../../.gitbook/assets/image (160).png" alt="" width="188"><figcaption></figcaption></figure></div>

6. Once the transaction is completed, you can verify the balance of your final f1 address on[ filfox.info ](https://filfox.info/en)or by pasting your address after [https://www.glif.io/en/address](https://www.glif.io/en/address/your_f1_address)/(your f1 address).
7. Congrats! Your FIL has been successfully transferred from a 0x address to your f1 address!

## Conclusion

By following this step-by-step guide, you can successfully transfer FIL from your 0x address to an f1 address using an intermediary wallet. Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
