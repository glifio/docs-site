# 如何利用 Ledger 钱包作为中介钱包

Filecoin生态系统中有各种类型的地址，例如f0、f1、f2、f3和f410（或0x）。某些钱包，如Metamask，仅支持0x地址，而某些交易所仅能识别f1地址。由于这些差异，某些钱包或交易所可能无法将特定的地址类型识别为有效的Filecoin接收地址。在这种情况下，可能需要一个中介钱包来充当桥梁。

本教程解释了如何使用带有f1地址的Ledger作为中介钱包，可以用作中转点，将FIL从主钱包转移到最终目的地。除了Ledger钱包，您还可以选择使用[Burner钱包](ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md)或[FilSnap钱包](ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)作为中介钱包。

## 准备

要获取Ledger钱包地址，您需要先设置您的Ledger设备（[Nano S](https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true)、[Nano X](https://support.ledger.com/hc/en-us/articles/360018784134-Set-up-your-Ledger-Nano-X?docs=true)）。

## 步骤1. 将硬件钱包连接到电脑

1. 确保您的Ledger已连接到电脑（使用提供的电线），并输入密码解锁。

![步骤1. 将硬件钱包连接到电脑](../../../../.gitbook/assets/image (91).png)

## 步骤2. 将您的钱包连接到GLIF

1. 访问[GLIF网站](https://glif.io)，点击屏幕右上角的“**连接钱包**”。您将看到可连接的钱包列表，选择“**Ledger（Filecoin）**”。

![步骤2. 将您的钱包连接到GL](https://glif.io)，点击屏幕右上角的“**连...](../../../../.gitbook/assets/image (36).png)

2. 如果您的硬件钱包已解锁并连接，浏览器会弹出一个窗口，询问是否连接HID设备。

![步骤2. 将您的钱包连接到GL](../../../../.gitbook/assets/image (93).png)

3. 在尝试连接之前，确保设备上的Filecoin应用已打开。

{% hint style="info" %}
如果您在 Ledger 中添加 Filecoin 应用时遇到问题，请[查看此处](https://docs.filecoin.io/basics/assets/metamask-setup#install-the-ledger-app)的教程。
{% endhint %}

![MetaMask prompt](../../../../.gitbook/assets/image (94).png)

4. 当设备显示“**Filecoin Ready**”时，在浏览器弹出窗口中选择该设备并点击“**连接**”。

![步骤2. 将您的钱包连接到GL](../../../../.gitbook/assets/image (95).png)

5. 连接后，将在GLIF网站的右上角看到您的硬件钱包Filecoin地址，以及 FIL总余额。
6. 复制 f1 地址备用。这将是您的第一个Ledger地址。

![步骤2. 将您的钱包连接到GL](../../../../.gitbook/assets/image (37).png)

## 步骤3：生成第二个地址（如有需要）

1. 如果您需要生成第二个地址，点击左上角选择栏的“钱包”。

![步骤3：生成第二个地址（如有需](../../../../.gitbook/assets/image (40).png)

2. 点击屏幕左侧的“添加账户”，复制第二个地址备用。

![步骤3：生成第二个地址（如有需](../../../../.gitbook/assets/image (39).png)

## 结论

使用带有f1地址的 Ledger 作为中介钱包是很快速的过程，并讓您的交易顺利进行。

请记住保管好钱包助记词，并在发送大量资金之前进行小額测试！

## **加入我们的社区！**

欢迎加入我们的[Discord](https://discord.gg/5qsJjsP3Re)和[Telegram](https://t.me/glifio)，或在[X](https://twitter.com/glifio)上关注我们，以获取最新消息。

如果您遇到任何困难，请随时通过我们的[Discord支持工单](https://discord.gg/5qsJjsP3Re)与我们联系。
