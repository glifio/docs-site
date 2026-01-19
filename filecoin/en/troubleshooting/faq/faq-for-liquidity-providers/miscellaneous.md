# Miscellaneous

## When I use GLIF to transfer FIL to an exchange, why doesn't the transferred amount show up in my exchange balance?

Some exchanges currently do not support the FEVM. Therefore, if you transfer FIL from a 0x wallet address to a receiving exchange that does not support this format, your transfer may not appear in your holdings. The FIL you sent still exists at the receiving address, but the exchange will not reflect your balance until they upgrade to recognize 0x/f410 wallet addresses.

The issue arises because in order to transfer FIL from a 0x address to certain exchange addresses, the transaction must be sent through the [FIL Forwarder smart contract](https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/filforwarder). Exchanges don't immediately recognize that the transaction was sent "to" the FIL Forwarder, who then forwarded the FIL to the exchange address. If you check "internal transactions" on [filfox.info](https://filfox.info/) for a particular transaction that was sent through the FIL Forwarder, you will see the FIL being transferred to the correct receiver address.

You will need to open a support ticket with the specific exchange and provide proof of your transaction, showing that the FIL forwarder internally sends the FIL to the address.
