# Wallet Connection

## Which wallet is recommended to use in GLIF?

We suggest using [MetaMask](https://metamask.io/) or [Ledger](https://www.ledger.com/) with the Filecoin app.

## **Why can't I use a certain wallet to deposit or withdraw, e.g., OKX Wallet?**

It should be possible to have multiple wallet extensions installed simultaneously. However, the conventions for wallets to become detectable are still evolving, and some wallets may not be compatible.

## **I generated a f1 address in my Filecoin account with Ledger, and it seems different from the 0x address that MetaMask uses. I can't see my FIL in the Filecoin network under MetaMask.**

MetaMask doesn't support Filecoin f1 addresses, so you won't be able to see your FIL balance directly in MetaMask if you’re using a native (f1) Filecoin address.&#x20;

Instead, you can connect your Ledger device directly to GLIF and see your balances on the GLIF website.&#x20;

## When I use Ledger for deposits on GLIF, it produces an f1 address, while using MetaMask generates a 0x address. What's the difference between these address types?

For technical details on different address types, see: [Filecoin Address Types](https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/address-types)

## I looked into MetaMask, but it seems to provide an Ethereum address instead of a native Filecoin address. Do I need a Filecoin add-on for MetaMask, and will it work long-term?

There are two ways to use MetaMask x GLIF - default MetaMask and Filsnap.

Default MetaMask works the same as connecting to any EVM network - you must change the network in MetaMask to point to Filecoin Mainnet. See [https://chainlist.org/chain/314](https://chainlist.org/chain/314)&#x20;

Filsnap is a plugin that can be installed inside MetaMask that will produce a native Filecoin address (beginning with f1 instead of 0x).

Certain advanced Filecoin use cases will only work with Filsnap, however, most day to day use cases work with default MetaMask and 0x addresses.

## **Why do I see the error message "Request expired" when I use Ledger to deposit or withdraw?**

After clicking "Send" in the GLIF UI, ensure you check your wallet (the browser extension) to confirm the gas fees and send the transaction. The transaction might expire if the MetaMask popup appears behind the browser window and is not addressed promptly.

## I am facing issues while trying to deposit FIL using my Ledger. The transaction failed, stating that it contained invalid data. What should I do?

On your Ledger device, it may prompt "Expert mode required." You need to enable "Expert mode" within the Filecoin App on your Ledger to proceed. This step is necessary because the Ledger does not inherently recognize Ethereum transaction parameters, requiring Expert mode to correctly sign the transactions.
