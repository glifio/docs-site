# How to withdraw FIL from the agent to an exchange at GLIF

In order to withdraw from a GLIF Agent smart contract to an exchange like Binance, you need to use an intermediary wallet, which can be a **FilSnap, Burner Wallet, or Ledger Wallet**. The strategy is to withdraw FIL from your Agent to your intermediary wallet, and from your intermediary wallet to the exchange. The reason for this approach is due to certain exchanges not yet supporting Filecoin deposits from FEVM smart contracts.

## Contents

This guide will walk you through:

**Step 1:** [**Setting up your intermediary wallet**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1-set-up-your-intermediary-wallet)

**Step 2: Withdrawing from your agent to the intermediary wallet**

You can choose from the following options:

* [**Step 2a: through GLIF website**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1c-creating-an-intermediary-wallet-to-transfer-fil-ledger-wallet)
* [**Step 2b: through CLI**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-2b-withdrawing-from-your-agent-to-the-intermediary-wallet-through-cli)

**Step 3:** [**Transferring FIL from the intermediary wallet to the desired “f1” address on the exchange**](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-3-transferring-fil-from-the-intermediary-wallet-to-the-desired-f1-address-on-the-exchange)

> [!IMPORTANT]
> **Before your send any FIL to any wallet, test it with a small amount of FIL.**
>
> No matter which wallet you use, always make sure to back up your secret recovery phrase, store it securely, and never share it with anyone.

> [!WARNING]
> When withdrawing FIL from **the agent** using multisig wallets, you have five minutes to finish the proposal, from **proposing** it to approving the transaction. Missing the window means starting the process again.

## Step 1: Setting up your intermediary wallet

You can choose an intermediary wallet to obtain an **f1** address from the following options:

* [Choice A: Burner Wallet](../for-token-holders/wallets/how-to-obtain-a-burner-wallet-as-the-intermediary-wallet.md)
* [Choice B: FilSnap Wallet](../for-token-holders/wallets/how-to-obtain-a-filsnap-wallet-as-the-intermediary-wallet.md)
* [Choice C: Ledger Wallet](../for-token-holders/wallets/how-to-obtain-a-ledger-wallet-as-the-intermediary-wallet.md)

For details on creating an intermediary wallet, please refer to the tutorial by clicking the link above.

## **Step 2a :** Withdrawing from your agent to the intermediary wallet - through GLIF website

1. Connect to one of the wallets that is a signer for your agent's multisig wallet.
2. Navigate to the “**Withdraw**” tab within the agent.

![Withdrawal step](../../../.gitbook/assets/image (281).png)

3. Enter the intermediary wallet you created in[ Step 1 ](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1-setting-up-your-intermediary-wallet)as the recipient.
4. Enter the amount to withdraw.
5. Click “**Withdraw**”

> [!WARNING]
> Wallets with no prior transactions on chain are not supported as the intermediary wallet. Please make some transactions with this wallet before this step.

![Withdraw FIL](../../../.gitbook/assets/image (279).png)

6. Click “**Sign Transaction**”.

![Sign prompt](../../../.gitbook/assets/image (284).png)

7. After signing the transaction, you will receive a signed credential that **expires in around 5 minutes**. Complete the transaction within this time.
8. Click “**Send**”.

> [!WARNING]
> If you do not complete the transaction and **sign the proposal with your other signer wallets within 5 minutes**, you will need to repeat this step.

![Withdrawal step](../../../.gitbook/assets/image (296).png)

9. Approve the transaction in your wallet.

![Approval step](../../../.gitbook/assets/image (286).png)

10. Wait for the transaction to be processed. This may take 1-2 minutes.
11. Sign in to the additional signer wallet in your agent's multisig wallet.
12. Click on the proposal just made in the “**Owner Proposals**” tab on the agent page..

![Toggle button](../../../.gitbook/assets/image (287).png)

13. Click “**Approve proposal**”.

> [!IMPORTANT]
> Make sure all signer wallets have **enough gas fees** to proceed with the transaction.

![Approve proposal](../../../.gitbook/assets/image (288).png)

14. Wait for the transaction to be processed. This may take 1-2 minutes.
15. Once the multisig proposal is complete, it will disappear, and a successful transaction will be displayed in the “**Transaction**” tab.

![Approve proposal](../../../.gitbook/assets/image (290).png)

16. Verify your balance in the intermediary wallet to ensure the transaction was successful on the GLIF “**wallet**” page, or verify it by searching your f1 address on [filfox.info](https://filfox.info/en).

## **Step 2b :** Withdrawing from your agent to the intermediary wallet - through CLI

1. Open your agent's command line interface.
2. Use the following commands:

* **1st Command**: `glif agent --help`

![Withdrawal step](../../../.gitbook/assets/image (291).png)

* **2nd Command**: `glif agent withdraw --help`

![Withdraw FIL](../../../.gitbook/assets/image (292).png)

* **3rd Command**: `glif agent withdraw 100 f1...abc`
  * Replace **100** with the amount you want to withdraw.
  * Replace **f1...abc** with your intermediary wallet address.

![Withdrawal step](../../../.gitbook/assets/image (293).png)

3. Verify your balance in the intermediary wallet to ensure the transaction was successful on the GLIF “**wallet**” page, or verify it by searching your f1 wallet address on [filfox.info](https://filfox.info/en).

## Step 3**:** Transferring FIL from the intermediary wallet to the desired “f1” address on the exchange

1. Connect to your intermediary wallet made in [step 1](how-to-withdraw-fil-from-the-agent-to-an-exchange-at-glif.md#step-1a-creating-an-intermediary-wallet-burner-wallet). On the GLIF website, click “**Send FIL.**”

![Send button](../../../.gitbook/assets/image (158).png)

2. Paste your f1 address on the exchange in the recipient field.
3. Enter the desired amount of FIL to transfer.
4. Click “**Send**” and confirm the transaction.

![Transaction confirmation](../../../.gitbook/assets/image (159).png)

5. After the transaction completed, you can check the transaction hash in the bottom right corner of the GLIF page.

![Transaction complete](../../../.gitbook/assets/image (160).png)

6. Once the transaction is completed, you can verify the balance of your final f1 address on[ filfox.info ](https://filfox.info/en)or by pasting your address after [https://www.glif.io/en/address](https://www.glif.io/en/address/your_f1_address)/(your f1 address).

![Transfer FIL](../../../.gitbook/assets/image (161).png)

7. Congrats! Your FIL has been successfully withdraw FIL from your agent to your f1 address on the exchange!

## Conclusion

By following this step-by-step guide, you can successfully withdraw FIL from your agent to an f1 address on exchange using an intermediary wallet. Remember to always double-check addresses and transaction details to ensure the accuracy and security of your funds.

## Join our community!

Feel free to join our [Discord](https://discord.gg/5qsJjsP3Re) and [Telegram](https://t.me/+iFJuXAMp-Xg5NGIx) or follow us on[ X](https://twitter.com/glifio) for the latest updates.

If you encounter any difficulties, please feel free to contact us through our [Discord support ticket](https://discord.gg/5qsJjsP3Re).
