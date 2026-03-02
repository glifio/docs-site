# 如何使用多签钱包从 GLIF 提取 FIL

使用多签钱包从 GLIF 提取 FIL 需要经过两步提案流程，以确保安全性并让所有签名人达成共识。本教程将引导您完成从 GLIF 提取已存入的 FIL，并将您的 iFIL 转回 FIL 的整个过程。

在本教程中，您将完成以下两个主要步骤：

1. 批准 GLIF 池转移您的 iFIL
2. 从 GLIF 池进行提取

***

## 准备

本教程默认您已经拥有一个存入 FIL 并持有 iFIL 的 GLIF 多签钱包。如果尚未创建，请先参考我们[之前的教程](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-zai-glif-shang-chuang-jian-duo-qian-qian-bao)，以学习[如何创建多签钱包并存入 FIL](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/shi-yong-glif-chi-cun-ru-he-ti-qu/ru-he-shi-yong-duo-qian-qian-bao-jiang-fil-cun-ru-glif)。

***

## 第一步：批准 Infinity Pool 转移您的 iFIL

1\. 访问您的多签钱包

打开 [GLIF 网站](/)，进入“**多重签名钱包**”标签页。确保您的钱包已连接，并且查看您的多签钱包。

![第一步：批准 Infinity](cn-image-325.png)

2\. 发起提取授权

在“**代币**”区域，点击 iFIL 余额旁边的“**…**”图标。从下拉菜单中选择“**从池中提取**”。

![第一步：批准 Infinity](cn-image-324.png)

3\. 输入要提取的数量

输入想要提取的 iFIL 数量。点击“Approve”，允许 GLIF 池转移您的 iFIL。

> [!NOTE]
> 在网站左侧边栏，您会看到第一步 “Approve the Infinity Pool to transfer your iFIL” 。

![第一步：批准 Infinity](cn-image-327.png)

4\. 创建授权提案

您所连接的钱包将弹出提示，确认交易以创建授权提案。该过程可能需要几分钟，以等待网络确认。

当提案获得批准后，您就可以提取这部分 iFIL。

如果弹窗提示您可点击“**View Proposal**”，请点击查看；若没有弹窗提示，可在多签页面的“**多重签名钱包提案**”中查看提案。

![第一步：批准 Infinity](cn-image-328.png)

5\. 其他签名人连接钱包并查看提案

发起提案的钱包（即 proposer's wallet）应先断开连接。

当其他签名人连接到 GLIF 网站后，进入多签页面的“多重签名钱包提案”查看该待批准提案。

![第一步：批准 Infinity](cn-image-329.png)

6\. 其他签名人批准提案

选中相应提案，点击“**批准提案**”，并在弹出的钱包中确认批准。

> [!TIP]
> 每位签名人的钱包中都需要少量 FIL（0.001 FIL 即可）用于支付 Gas 。

![第一步：批准 Infinity](cn-image-330.png)

7\. 确认通过

1. 当达到所需的签名人数后，授权交易即会执行。
2. 如果未及时看到更新，可等待几分钟后刷新页面或重新连接钱包。
3. 您可以在多签页面底部的“交易”区域查看交易详情，“方法” 列会显示 “Approve”。

![第一步：批准 Infinity](cn-image-333.png)

***

## 第二步：从 Infinity Pool 提取

完成第一步后，Infinity Pool 已获准转移第一步中指定的 iFIL 数量。

1\. 发起提取

返回多签钱包的“代币”区域。点击 iFIL 余额旁的“**…**”图标，再次选择“**从池中提取**”。

![第二步：从 Infinity](cn-image-334.png)

您会在“Approve the Infinity Pool to transfer your iFIL”处看到一个小的对勾图标，这表明已完成授权，现在可以进行第二步来发起提取。

如果需要提取超过已授权数量的 iFIL，则需重新回到第一步进行授权。

![第二步：从 Infinity](cn-image-335.png)

2\. 确认提取

现在您会看到第二步 “Withdraw from the Infinity Pool”。检查信息后点击“取款”。

![第二步：从 Infinity](cn-image-336.png)

3\. 创建新的提取提案

在钱包中确认此笔交易，以创建提案。系统将生成一个新的关于提取交易的多签提案，您可以在“**多重签名钱包提案**”区域查看其详细信息。

![第二步：从 Infinity](cn-image-337.png)

4\. 批准提取提案

和第一步类似，发起提案的钱包应断开连接，让其他签名人连接并查看提案。

在多签钱包的“**多重签名钱包提案**”区域找到此待处理提案。

点击“**批准提案**”，并在弹出的钱包中确认批准。

![第二步：从 Infinity](cn-image-338.png)

5\. 查看交易

当满足必要的签名人数后，交易会被执行。若暂时未看到交易结果，请稍等几分钟，以等待网络确认。

您可以在多签页面底部的“交易”区域查看提取交易的详情。

![第二步：从 Infinity](cn-image-341.png)

6\. 完成提取

当提案获得所有必须的批准后，提取交易将被执行。您的 iFIL 会被转换回 FIL 并存入多签钱包中。

您可以在“Filecoin 余额”栏查看更新后的 FIL 余额。

![第二步：从 Infinity](cn-image-343.png)

**恭喜您！您已经成功使用多签钱包从 GLIF 提取了所存入的 FIL。**

## 结论

现在，您可以顺利地使用多签钱包从 GLIF 池中取回所存入的 FIL。记得随时仔细核对地址和交易信息，以确保资金安全。

如果您想了解如何使用多签钱包向 GLIF 池进行存款，请参见我们[之前的教程](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/shi-yong-glif-chi-cun-ru-he-ti-qu/ru-he-shi-yong-duo-qian-qian-bao-jiang-fil-cun-ru-glif)。
