# How to obtain a Ledger wallet as the intermediary wallet

The Filecoin ecosystem includes various types of addresses, such as **f0**, **f1**, **f2**, **f3**, and **f410** (or **0x**). Some wallets, like Metamask, only support **0x** addresses, while certain exchanges recognize only **f1** addresses. Due to these differences, some wallets or exchanges may not recognize specific address types as valid Filecoin destinations. In such cases, an intermediary wallet may be needed to act as a bridge.

This guide explains how to use Ledger as an intermediary wallet with an **f1** address, which you can use as a middle point to transfer your FIL from your main wallet to its final destination. Other than Ledger wallet, you can also choose an intermediary wallet to obtain a [burner wallet](how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md) or [FilSnap wallet](how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md).

## Preparation

To obtain a Ledger wallet address, you will need to setup your Ledger device ([Nano S](https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true), [Nano X](https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true)) first.

## Step 1. Connect your hardware wallet to your laptop

Make sure you have your device connected to your computer (e.g., with the supplied cable), and enter your pin to unlock it.

![Connect wallet](../../../../.gitbook/assets/image (162).png)

## Step 2. Connect your wallet to GLIF

1. Go to [GLIF website](https://www.glif.io) and click on **Connect Wallet** in the top right of the screen. You will see a list of wallets to connect. Choose ‘**Ledger (Filecoin)**’.

![Toggle button](../../../../.gitbook/assets/image (164).png)

2. If your hardware wallet is unlocked and connected, you will see a pop-up in your browser asking to connect the HID device.

![Connect wallet](../../../../.gitbook/assets/image (165).png)

3. Make sure the Filecoin app is open on your device before you try to connect it.&#x20;

{% hint style="info" %}
If you have a problem adding the Filecoin app to your Ledger, please check the tutorial [here](https://docs.filecoin.io/basics/assets/metamask-setup#install-the-ledger-app).
{% endhint %}

![MetaMask prompt](../../../../.gitbook/assets/image (166).png)

4. When the device says "**Filecoin Ready"**, then select the device in the browser popup and hit "**Connect"**.

![Connect wallet](../../../../.gitbook/assets/image (168).png)

5. Once you are connected, you will see your hardware wallet Filecoin address in the top right of the GLIF website, as well as your total FIL balance.
6. Copy the f1 address for later use. This will be your first Ledger address.

![Copy address](../../../../.gitbook/assets/image (32).png)

## Step 3: Generate a second address (optional)

1. If you need to generate a second address, click “**Wallet**” in the top left navigation bar.

![Connect wallet](../../../../.gitbook/assets/image (30).png)

2. Click **“Add Account”** on the left side of the screen. Copy the second address for later use if needed.

![Copy address](https://miro.medium.com/v2/resize:fit:700/0*L0iNyYyAE-q7hKvp)

## Conclusion

Obtaining an intermediary wallet using the Ledger with an **f1** address is a quick process and ensures your transactions proceed smoothly.

Remember to keep your seed phrase safe and private, and always perform a test transaction before sending a large amount!

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
