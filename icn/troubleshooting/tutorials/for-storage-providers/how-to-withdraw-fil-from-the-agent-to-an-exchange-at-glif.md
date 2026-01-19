# How to withdraw FIL from the agent to an exchange at GLIF

In order to withdraw from a GLIF Agent smart contract to an exchange like Binance, you need to use an intermediary wallet, which can be a **FilSnap, Burner Wallet, or Ledger Wallet**. The strategy is to withdraw FIL from your Agent to your intermediary wallet, and from your intermediary wallet to the exchange. The reason for this approach is due to certain exchanges not yet supporting Filecoin deposits from FEVM smart contracts.

## Contents

This guide will walk you through:

**Step 1:** [**Setting up your intermediary wallet**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1-set-up-your-intermediary-wallet)

**Step 2: Withdrawing from your agent to the intermediary wallet**

You can choose from the following options:

* [**Step 2a: through GLIF website**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1c-creating-an-intermediary-wallet-to-transfer-fil-ledger-wallet)
* [**Step 2b: through CLI**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-2b-withdrawing-from-your-agent-to-the-intermediary-wallet-through-cli)

**Step 3:** [**Transferring FIL from the intermediary wallet to the desired "f1" address on the exchange**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-3-transferring-fil-from-the-intermediary-wallet-to-the-desired-f1-address-on-the-exchange)

{% hint style="info" %}
**Before your send any FIL to any wallet, test it with a small amount of FIL.**

No matter which wallet you use, always make sure to back up your secret recovery phrase, store it securely, and never share it with anyone.&#x20;
{% endhint %}

{% hint style="warning" %}
When withdrawing FIL from **the agent** using multisig wallets, you have five minutes to finish the proposal, from **proposing** it to approving the transaction. Missing the window means starting the process again.
{% endhint %}

## Step 1: Setting up your intermediary wallet

You can choose an intermediary wallet to obtain an **f1** address from the following options:

* [Choice A: Burner Wallet](../for-token-holders/wallets/how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md)
* [Choice B: FilSnap Wallet](../for-token-holders/wallets/how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md)
* [Choice C: Ledger Wallet](../for-token-holders/wallets/how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md)

For details on creating an intermediary wallet, please refer to the tutorial by clicking the link above.

## **Step 2a :** Withdrawing from your agent to the intermediary wallet - through GLIF website&#x20;

1. Connect to one of the wallets that is a signer for your agent's multisig wallet.
2. Navigate to the "**Withdraw"** tab within the agent.

<div align="left"><figure><img src="../../../.gitbook/assets/image (281).png" alt=""><figcaption></figcaption></figure></div>

3. Enter the intermediary wallet you created in[ Step 1 ](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1-setting-up-your-intermediary-wallet)as the recipient.
4. Enter the amount to withdraw.
5. Click "**Withdraw**"

{% hint style="warning" %}
Wallets with no prior transactions on chain are not supported as the intermediary wallet. Please make some transactions with this wallet before this step.
{% endhint %}

<div align="left"><figure><img src="../../../.gitbook/assets/image (279).png" alt="" width="375"><figcaption></figcaption></figure></div>

6. Click "**Sign Transaction"**.

<div align="left"><figure><img src="../../../.gitbook/assets/image (284).png" alt="" width="375"><figcaption></figcaption></figure></div>

7. After signing the transaction, you will receive a signed credential that **expires in around 5 minutes**. Complete the transaction within this time.
8. Click "**Send"**.

{% hint style="info" %}
If you do not complete the transaction and **sign the proposal with your other signer wallets within 5 minutes**, you will need to repeat this step.
{% endhint %}

<div align="left"><figure><img src="../../../.gitbook/assets/image (296).png" alt="" width="563"><figcaption></figcaption></figure></div>

9. Approve the transaction in your wallet.

<div align="left"><figure><img src="../../../.gitbook/assets/image (286).png" alt="" width="367"><figcaption></figcaption></figure></div>

10. Wait for the transaction to be processed. This may take 1-2 minutes.
11. Sign in to the additional signer wallet in your agent’s multisig wallet.&#x20;
12. Click on the proposal just made in the "**Owner Proposals**" tab on the agent page..

<div align="left"><figure><img src="../../../.gitbook/assets/image (287).png" alt=""><figcaption></figcaption></figure></div>

13. Click "**Approve proposal**".

{% hint style="info" %}
Make sure all signer wallets have **enough gas fees** to proceed with the transaction.
{% endhint %}

<div align="left"><figure><img src="../../../.gitbook/assets/image (288).png" alt="" width="563"><figcaption></figcaption></figure></div>

14. Wait for the transaction to be processed. This may take 1-2 minutes.
15. Once the multisig proposal is complete, it will disappear, and a successful transaction will be displayed in the "**Transaction**" tab.

<div align="left"><figure><img src="../../../.gitbook/assets/image (290).png" alt=""><figcaption></figcaption></figure></div>

16. Verify your balance in the intermediary wallet to ensure the transaction was successful on the GLIF **"wallet"** page, or verify it by searching your f1 address on [filfox.info](https://filfox.info/en).

## **Step 2b :** Withdrawing from your agent to the intermediary wallet - through CLI

1. Open your agent's command line interface.
2. Use the following commands:

* **1st Command**: `glif agent --help`

<div align="left"><figure><img src="../../../.gitbook/assets/image (291).png" alt=""><figcaption></figcaption></figure></div>

* **2nd Command**: `glif agent withdraw --help`

<div align="left"><figure><img src="../../../.gitbook/assets/image (292).png" alt=""><figcaption></figcaption></figure></div>

* **3rd Command**: `glif agent withdraw 100 f1...abc`
  * Replace **100** with the amount you want to withdraw.
  * Replace **f1...abc** with your intermediary wallet address.

<div align="left"><figure><img src="../../../.gitbook/assets/image (293).png" alt=""><figcaption></figcaption></figure></div>

3. Verify your balance in the intermediary wallet to ensure the transaction was successful on the GLIF **"wallet"** page, or verify it by searching your f1 wallet address on [filfox.info](https://filfox.info/en).

## Step &#x33;**:** Transferring FIL from the intermediary wallet to the desired "f1" address on the exchange

1. Connect to your intermediary wallet made in [step 1](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1a-creating-an-intermediary-wallet-burner-wallet). On the GLIF website, click **"Send FIL."**

<div align="left"><figure><img src="../../../.gitbook/assets/image (158).png" alt="" width="563"><figcaption></figcaption></figure></div>

2. Paste your f1 address on the exchange in the recipient field.
3. Enter the desired amount of FIL to transfer.
4. Click **"Send"** and confirm the transaction.

<div align="left"><figure><img src="../../../.gitbook/assets/image (159).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. After the transaction completed, you can check the transaction hash in the bottom right corner of the GLIF page.

<div align="left"><figure><img src="../../../.gitbook/assets/image (160).png" alt="" width="188"><figcaption></figcaption></figure></div>

6. Once the transaction is completed, you can verify the balance of your final f1 address on[ filfox.info ](https://filfox.info/en)or by pasting your address after [https://www.glif.io/en/address](https://www.glif.io/en/address/your_f1_address)/(your f1 address).

<div align="left"><figure><img src="../../../.gitbook/assets/image (161).png" alt="" width="563"><figcaption></figcaption></figure></div>

7. Congrats! Your FIL has been successfully withdraw FIL from your agent to your f1 address on the exchange!

## Conclusion

By following this step-by-step guide, you can successfully withdraw FIL from your agent to an f1 address on exchange using an intermediary wallet. Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
