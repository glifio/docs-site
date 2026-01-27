# 如何将 FIL从 GLIF Agent 转出至交易所

如果要将 FIL 从 GLIF Agent 智能合约提取到交易所，需要使用一个中间钱包（可以是 FilSnap、Burner Wallet 或 Ledger Wallet）。基本操作是：先从 Agent 提取 FIL 到您的中间钱包，再从中间钱包转移到交易所。这样做的原因是部分交易所目前尚不支持从 FEVM 智能合约直接充值 Filecoin。

## 目录

本教程将为您介绍以下步骤：

[第一步：设置中介钱包](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#di-yi-bu-she-zhi-zhong-jie-qian-bao)

[第二步：从 Agent 提取到中介钱包](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#di-er-bu-cong-agent-ti-qu-dao-zhong-jie-qian-bao)

* [2a：通过 GLIF 网站操作](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#id-2a-tong-guo-glif-wang-zhan-cao-zuo)
* [2b：通过 CLI 操作](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#id-2b-tong-guo-cli-cao-zuo)

[第三步：从中介钱包将 FIL 转到交易所的目标 `f1` 地址](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#di-san-bu-cong-zhong-jian-qian-bao-jiang-fil-zhuan-dao-jiao-yi-suo-de-mu-biao-f1-di-zhi)

> [!TIP]
> 在向任何钱包发送 FIL 之前，最好先用少量 FIL 作为测试交易。
>
> 无论使用哪种钱包，都请务必备份好您的助记词，妥善保存，切勿与任何人分享。

> [!WARNING]
> 当使用多签钱包从 Agent 提取 FIL 时，从提出提案到批准交易整个流程有 5 分钟的时间限制。如果超时，需重新开始整个流程。

## 第一步：设置中介钱包

您可以从以下选项中选择一个作为中介钱包，以获取 f1 地址：

* [选项 A：Burner 钱包](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md)
* [选项 B：FilSnap 钱包](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)
* [选项 C：Ledger 钱包](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md)

有关创建中介钱包的更多详情，请参见上方链接的教程。

## 第二步：从 Agent 提取到中介钱包

### 2a：通过 GLIF 网站操作

1. 连接作为 Agent 多签钱包签名人的其中一个钱包。
2. 在 Agent 页面中，找到 “**取款**” 选项。

![2a：通过 GLIF 网站操作](cn-image-286.png)

3. 收款人填入您在[第一步](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#di-yi-bu-she-zhi-zhong-jie-qian-bao)创建的中介钱包地址。
4. 输入要提取的数量
5. 点击“**取款**”。

> [!WARNING]
> 如果中介钱包在链上没有任何历史交易记录，则不能作为收款地址使用。请在此步骤之前使用此钱包进行一些交易。

![2a：通过 GLIF 网站操作](cn-image-287.png)

6. 点击“**签署交易**”发起签名。

![2a：通过 GLIF 网站操作](cn-image-289.png)

7. 签完交易后，您会得到一个有效期约 5 分钟的签名凭证，务必在此时间内完成交易。
8. 点击“发送”。

> [!NOTE]
> 如果超过 5 分钟未完成交易，其他签名人未完成签名，您需要重新开始这个步骤。

![2a：通过 GLIF 网站操作](cn-image-290.png)

9. 在钱包中批准这笔交易。

![2a：通过 GLIF 网站操作](cn-image-291.png)

10. 等待交易处理完成（大约需要 1-2 分钟）。
11. 切换到其他签名人钱包。
12. 在 Agent 页面“**所有者提案**”标签下，找到刚才发起的提案

![2a：通过 GLIF 网站操作](cn-image-292.png)

13. 点击“**批准提案**”进行批准。

> [!TIP]
> 确保所有签名钱包都有足够的 Gas 费用以完成交易。

![2a：通过 GLIF 网站操作](cn-image-295.png)

14. 再次等待交易处理完成（大约 1-2 分钟）。
15. 当多签提案执行完毕后，它会从提案列表中消失，同时在“交易”标签中显示成功记录。

![2a：通过 GLIF 网站操作](cn-image-296.png)

16. 在 GLIF “**钱包**” 页面或在 [filfox.info](https://filfox.info) 搜索您的 f1 地址，检查中介钱包余额，以确认交易成功。

### 2b：通过 CLI 操作

1. 打开 Agent 的命令行界面。
2. 执行以下命令：

* 第 1 条命令：`glif agent --help`

![2b：通过 CLI 操作](en-image-78.png)

* 第 2 条命令：`glif agent withdraw --help`

![2b：通过 CLI 操作](en-image-79.png)

* 第 3 条命令：`glif agent withdraw 100 f1...abc`
  * 将 100 替换为您想提取的数量。
  * 将 f1...abc 替换为您的中介钱包地址。

![2b：通过 CLI 操作](en-image-80.png)

3. 在 GLIF “钱包” 页面或在 filfox.info 搜索中介钱包的 f1 地址，检查中介钱包余额，以确认交易成功。

## 第三步：从中间钱包将 FIL 转到交易所的目标 `f1` 地址

1. 使用[第一步](ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo.md#di-yi-bu-she-zhi-zhong-jie-qian-bao)创建的中介钱包登录 GLIF 网站，然后点击 “**发送 FIL**”。

![第三步：从中间钱包将 FIL](cn-image-301.png)

2. 在收款人栏填入交易所提供的 f1 地址。
3. 输入要转账的 FIL 数量。
4. 点击 “发送” 并确认交易。

![第三步：从中间钱包将 FIL](cn-image-302.png)

5. 交易完成后，您可以在 GLIF 页面右下角查看交易哈希。

![第三步：从中间钱包将 FIL](cn-image-303.png)

6. 等交易完成后，您可前往 [filfox.info](https://filfox.info/) 或在浏览器中输入 https://www.glif.io/en/address/(您的 f1 地址) 来查看最终地址的余额。
7. 恭喜！您已经成功将 FIL 从 Agent 提取并转移至交易所的 f1 地址。

## 总结

现在，您可以借助中介钱包，安全地将 FIL 从 Agent 提取到交易所的 f1 地址。记得始终仔细核对地址和交易信息，以确保资金安全。

## **加入我们的社区！**

欢迎加入我们的[Discord](https://discord.gg/5qsJjsP3Re)和[Telegram](https://t.me/glifio)，或在[X](https://twitter.com/glifio)上关注我们，以获取最新消息。

如果您遇到任何困难，请随时通过我们的[Discord支持工单](https://discord.gg/5qsJjsP3Re)与我们联系。
