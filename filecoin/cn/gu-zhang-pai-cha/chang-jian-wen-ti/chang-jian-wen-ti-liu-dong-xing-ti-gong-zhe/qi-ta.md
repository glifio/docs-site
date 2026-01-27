# 其他

## 为什么當使用 GLIF 将 FIL 转移到交易所，它没有显示在我的交易所余额中？

某些交易所目前不支持 FEVM。因此，如果您将 FIL 从 0x 钱包地址转移到不支持此格式的交易所時，您的转账可能不会出现在您的持有量中。您发送的 FIL 仍然存在于該接收地址，但在交易所升级以能夠识别到 0x/f410 钱包地址之前，交易所不会更新您的余额。

因為为了将 FIL 从 0x 地址转移到某些交易所地址，交易必须通过[ FIL Forwarder 智能合约](https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/filforwarder)发送。交易所不会立即识别交易是先“发送”到 FIL Forwarder，然後 FIL Forwarder 再将 FIL 转发到交易所地址。如果您在 [filfox.info](https://filfox.info/) 上查看通过 FIL Forwarder 发送的特定交易的 “内部交易” (internal transaction)，您会看到 FIL 被转移到正确的接收者地址。

您需要向特定交易所提交客服單，并提供您的交易证明，表明 FIL Forwarder 在内部将 FIL 发送到该地址。
