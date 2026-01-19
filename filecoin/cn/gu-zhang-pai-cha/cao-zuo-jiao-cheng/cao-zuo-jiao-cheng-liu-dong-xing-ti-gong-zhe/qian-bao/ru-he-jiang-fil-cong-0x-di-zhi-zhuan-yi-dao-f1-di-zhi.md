# 如何将 FIL 从 0x 地址转移到 f1 地址

要将 FIL 从 0x 地址转移到 f1 地址，您需要使用一个中介钱包，例如[FilSnap钱包](ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)、[Burner钱包](ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md)或[Ledger钱包](ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md)，协助您在不同格式的地址之间转移FIL。本教程将带您创建中介钱包，并将FIL从您的0x地址转移到最终的f1地址。

{% hint style="info" %}
本教程以MetaMask钱包为例，因为它与FEVM兼容性很高，但其他钱包同样适用。如果您遇到任何问题，可以参考我们的[常见问题解答](../../../chang-jian-wen-ti/)，或通过[Discord支持工单](https://discord.gg/5qsJjsP3Re)联系GLIF团队。
{% endhint %}

## 目录

本教程将引导您完成：&#x20;

[步骤1：设置您的中介钱包 ](ru-he-jiang-fil-cong-0x-di-zhi-zhuan-yi-dao-f1-di-zhi.md#bu-zhou-1-she-zhi-nin-de-zhong-jie-qian-bao)

[步骤2：将FIL从0x地址（MetaMask）发送到f1地址（中介钱包）](ru-he-jiang-fil-cong-0x-di-zhi-zhuan-yi-dao-f1-di-zhi.md#bu-zhou-2-jiang-fil-cong-0x-di-zhi-metamask-fa-song-dao-f1-di-zhi-zhong-jie-qian-bao)&#x20;

[步骤3：将FIL从中介钱包转移到您的f1地址（最终目的地）](ru-he-jiang-fil-cong-0x-di-zhi-zhuan-yi-dao-f1-di-zhi.md#bu-zhou-3-jiang-fil-cong-zhong-jie-qian-bao-zhuan-yi-dao-nin-de-f1-di-zhi-zui-zhong-mu-di-di)

{% hint style="info" %}
**在向任何钱包发送FIL之前，请先发送少量FIL作为测试。**&#x20;

无论您使用哪种钱包，请务必备份您的秘密恢复短语，保存在安全的地方，并且永远不要与任何人分享。
{% endhint %}

## 步骤1：设置您的中介钱包&#x20;

您可以从以下中介钱包选项中，选择一个以获取f1地址：&#x20;

[选项A：Burner钱包 ](ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md)

[选项B：FilSnap钱包 ](ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)

[选项C：Ledger钱包 ](ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md)

有关创建中介钱包的详细教程，请点击以上链接。

## 步骤2：将FIL从0x地址（MetaMask）发送到f1地址（中介钱包）&#x20;

{% hint style="danger" %}
将FIL从0x地址发送到f1地址时，请记得使用GLIF内的“**发送/转发FIL**”页面。&#x20;

不要使用MetaMask钱包插件的发送功能。否则，您的MetaMask可能会被连接到以太坊主网，而不是Filecoin主网。
{% endhint %}

1. 访问GLIF网站并点击“**连接钱包**”。选择您持有FIL的主钱包。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (51).png" alt="" width="375"><figcaption></figcaption></figure></div>

2. 将您的主钱包连接到Filecoin主网，点击“**连接"。**

<div align="left"><figure><img src="../../../../.gitbook/assets/image (52).png" alt="" width="359"><figcaption></figcaption></figure></div>

2. 如果您看到此页面，表示您的钱包已连接。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (53).png" alt="" width="375"><figcaption></figcaption></figure></div>

3. 在GLIF网站的右上角，点击“**发送/转发FIL**”。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (54).png" alt="" width="375"><figcaption></figcaption></figure></div>

4. 在“**发送推送FIL**”页面，收款人填写中介钱包的f1地址。这是在[步骤1](ru-he-jiang-fil-cong-0x-di-zhi-zhuan-yi-dao-f1-di-zhi.md#bu-zhou-1-she-zhi-nin-de-zhong-jie-qian-bao)中创建的钱包。例子中使用的是Burner钱包。
5. 输入您希望转移的FIL数量（请先使用少量FIL进行测试）。

{% hint style="warning" %}
在向Burner钱包发送FIL之前，请先发送少量FIL作为测试。
{% endhint %}

<div align="left"><figure><img src="../../../../.gitbook/assets/image (30).png" alt="" width="506"><figcaption></figcaption></figure></div>

7. 在MetaMask钱包中点击“**确认**”。

{% hint style="warning" %}
请确保您有足够的FIL用于Gas Fee；通常0.001 FIL就足够了。
{% endhint %}

8. 在网页的右下角，会出现一个通知框，显示“交易待处理”并提供一个交易哈希。当交易完成时，它将变为“交易已完成”。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (55).png" alt="" width="375"><figcaption></figcaption></figure></div>

{% hint style="info" %}
GLIF团队无法帮助您查找交易哈希。请记录您的交易哈希以跟踪您的交易。
{% endhint %}

9. 您可以通过在[filfox.info](https://filfox.info)上搜索交易哈希来查看交易详情。&#x20;
10. 要确认您转移的FIL已到达您的中介钱包地址，请在[filfox.info](https://filfox.info)的交易详情页面点击“**内部转帐**”，“**接收方**”的地址应与您的Burner钱包的f1地址匹配&#x20;

<div align="left"><figure><img src="../../../../.gitbook/assets/image (56).png" alt=""><figcaption></figcaption></figure></div>

11. 交易完成后，断开MetaMask（主钱包）的连接。然后，点击“**连接钱包**”，并导入之前保存的助记词以连接中介钱包。 点击"**导入助记词**"。

如果你使用的是Burner钱包，请记得选择“**Filecoin (f1...)**”作为地址类型。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (57).png" alt="" width="334"><figcaption></figcaption></figure></div>

12. 在GLIF的“**钱包**”页面查看您的中介钱包余额，或通过在[filfox.info](https://filfox.info)上搜索中介钱包的f1地址。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (58).png" alt="" width="563"><figcaption></figcaption></figure></div>

## 步骤3：将FIL从中介钱包转移到您的f1地址（最终目的地）

1. 保持连接到您的中介钱包。在GLIF网站上，点击“**发送FIL**”。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (59).png" alt="" width="375"><figcaption></figcaption></figure></div>

2. 收款人填写您的f1地址（最终目的地) 。&#x20;
3. 输入您希望转移的FIL数量。&#x20;
4. 点击“**发送**”并在钱包确认交易。

<div align="left"><figure><img src="../../../../.gitbook/assets/image (60).png" alt="" width="563"><figcaption></figcaption></figure></div>

5. 交易完成后，您可以在GLIF页面的右下角查看交易哈希。
6. 交易完成后，您可以在https://www.glif.io/en/address/(您的f1地址)，或者[filfox.info](https://filfox.info) ，验证您的最终f1地址余额
7. 恭喜！您的FIL已成功从0x地址转移到您的f1地址！

## 结论

您現在可以使用中介钱包，成功将FIL从您的0x地址转移到f1地址！

请务必仔细检查地址和交易详情，以确保资金安全。

## **加入我们的社区！**

欢迎加入我们的[Discord](https://discord.gg/5qsJjsP3Re)和[Telegram](https://t.me/glifio)，或在[X](https://twitter.com/glifio)上关注我们，以获取最新消息。

如果您遇到任何困难，请随时通过我们的[Discord支持工单](https://discord.gg/5qsJjsP3Re)与我们联系。
