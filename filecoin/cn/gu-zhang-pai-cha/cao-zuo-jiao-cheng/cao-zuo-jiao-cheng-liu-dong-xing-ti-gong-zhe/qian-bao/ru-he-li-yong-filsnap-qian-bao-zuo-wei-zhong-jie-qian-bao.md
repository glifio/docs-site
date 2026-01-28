# 如何利用 FilSnap 钱包作为中介钱包

Filecoin生态系统中有各种类型的地址，例如f0、f1、f2、f3和f410（或0x）。某些钱包，如Metamask，仅支持0x地址，而某些交易所仅能识别f1地址。由于这些差异，某些钱包或交易所可能无法将特定的地址类型识别为有效的Filecoin接收地址。在这种情况下，可能需要一个中介钱包来充当桥梁。

\
本教程解释了如何创建一个带有f1地址的FilSnap钱包，可以用作中转点，将FIL从主钱包转移到最终目的地。除了FilSnap钱包，您还可以选择使用[Ledger钱包](ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md)或[Burner钱包](ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md) 作为中介钱包。

## 操作教程

要获取FilSnap钱包，您需要：

1. 安装 MetaMask Chrome 插件 [https://metamask.io/download/](https://metamask.io/download/)
2. 创建助记词并设置MetaMask，确保将助记词安全备份。
3. 安装并设置完成后，到 [https://glif.io](https://glif.io/) 并点击右上角的“**连接钱包**”。选择“**FilSnap (Filecoin)**”选项：

![操作教程](cn-image-44.png)

4. 批准GLIF安装并连接到您的FilSnap，这将在MetaMask中以两个单独的要求出现：

![MetaMask prompt](en-image-364.png)

![MetaMask prompt](en-image-363.png)

5. 连接后，您将在GLIF网站的右上角看到FilSnap钱包的f1地址，复制f1地址备用。

![操作教程](cn-image-45.png)

> [!TIP]
> 强烈建议在转移任何FIL之前断开并重新连接您新创建的FilSnap钱包，以确保您了解如何再次连接，减少不能使用钱包的风险。

## 结论

恭喜！您已获得一个带有`f1`地址的FilSnap钱包作为中介钱包。

请记住保管好钱包助记词，并在发送大量资金之前进行小額测试！
