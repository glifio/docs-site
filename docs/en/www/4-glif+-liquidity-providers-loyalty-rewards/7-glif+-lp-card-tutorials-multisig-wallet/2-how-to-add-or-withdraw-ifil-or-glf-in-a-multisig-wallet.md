# How to add/withdraw iFIL or GLF in GLIF+ in a multisig wallet

This guide explains how to move GLF or iFIL between your **multisig wallet** and your GLIF+ Loyalty Card. In your GLIF+ LP Card, managing these balances allows you to control your GLF:iFIL ratio and redeem FIL at a higher premium. For details on premium tiers, see [this page](/docs/glif-liquidity-providers-loyalty-rewards/how-fil-capsules-work). For other tutorials on managing your GLIF+ Card, see [this page](/docs/glif-liquidity-providers-loyalty-rewards/glif-lp-card-tutorials-multisig-wallet).

If you are using a single-signature wallet, check [this tutorial](/docs/glif-liquidity-providers-loyalty-rewards/glif-lp-card-tutorials/how-to-add-or-withdraw-ifil-or-glf) for a step by step guide.

> [!NOTE]
> All screenshots and steps in this tutorial are illustrated with iFIL as the example token. The steps for adding or withdrawing $GLF are the same as for iFIL.

***

## Add iFIL/GLF from your multisig wallet to your Card

1. Go to the **'Loyalty'** tab on the GLIF website, then open the **'Summary'** section.
2. Find the **'+'** icon next to your **'iFIL balance'** or **'GLF balance'**, depending on which token you want to move.
3. Enter the amount you want to deposit.
4. Choose the source of the deposit. Since your Card is owned by a multisig, you may choose to deposit from the Card Owner (the multisig) or from your connected wallet.
5. Two transactions are required to complete the deposit. Click **'Send'** and confirm the first transaction in your wallet.
6. Then click **'Send'** again for the second transaction and confirm it in your wallet.
7. Two proposals will be generated inside your multisig. All signers must approve these proposals. If you are moving iFIL, you will see two proposals: **'Approve'** and **'Add YBT'**. If you are moving GLF, you will see **'Approve'** and **'Add RWT'**.

> [!NOTE]
> If the funding source is your single-signature wallet instead of your multisig, no proposal will be generated. The GLF balance will be sent directly to the card.

8. Approve both in every signer's account and confirm in the wallet.

> [!WARNING]
> Approve the "**Approve**" proposal first, then approve the "**Add YBT**" or "**Add RWT**" proposal. Otherwise an error may occur.

9. After all approvals are completed, your iFIL or GLF will be sent from the selected source to your GLIF+ Card.
10. The balance in your Card Summary will increase once the transaction is fully executed on chain.

***

## Withdraw iFIL/GLF from your Card to your multisig wallet

1. Go to the **Loyalty** tab and open the **Summary** section of your Card.
2. Click the **'-'** icon next to your **'iFIL balance'** or **'GLF balance'**, depending on which token you want to move.
3. Enter the recipient address and the amount of iFIL you want to withdraw.
4. Click **"Send"** and confirm the transaction in your wallet.
5. After submitting the transaction, a multisig proposal will be created.
   * For iFIL withdrawals, a **Remove YBT** proposal will appear.
   * For GLF withdrawals, a **Remove RWT** proposal will appear.
6. Navigate to the **Proposals** tab. Approve in every signer's account and confirm in the wallet.
7. Once all signers have approved, wait one to two minutes for the transaction to be processed.
8. After completion, the withdrawn iFIL will be sent to the recipient address, and the balance in your Card Summary will decrease accordingly.

***

## Conclusion

Your tokens have been successfully added or withdrawn between your GLIF+ Card and your wallet. You can now use them to activate benefits and manage your GLF:iFIL ratio.

You may want to check out the other [tutorials](/docs/glif-liquidity-providers-loyalty-rewards/glif-lp-card-tutorials-multisig-wallet) to learn more about managing your GLIF+ LP Card.
