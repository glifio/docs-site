# GLIF Agent 网站教程 (9) —— 更改操作员地址

_如果您还不了解 GLIF Agent 的基础概念、Agent 拥有者，或如何在 GLIF 网站上创建 Agent，建议您先阅读本系列教程的_ [_第一部分_](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) _和_ [_第二部分_](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)_。您可以在_[_此页面_](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang)_上找到所有在 **GLIF 网站** 上使用 Agent 的教程。有关 **Agent 命令行** （CLI）操作的说明，请参考_ [_GLIF 命令行界面（CLI）文档_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_。_

***

## 开始前的准备

在本系列教程的前几部分中，您已经完成以下步骤：

1. 创建了 Agent 拥有者多重签名钱包（参见 [第一部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
2. 创建了 Agent 智能合约（参见 [第一部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
3. 已将矿工添加到 Agent 中（参见 [第三部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong))
4. 已从 GLIF 成功借出 FIL（参见 [第四部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-4-jie-kuan)）
5. 已在矿工与 Agent 之间完成资金转移（参见 [第五部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-5-zai-miner-he-agent-zhi-jian-zhuan-yi-fil)）
6. 已提取奖励或预支现金（参见 [第六部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-6-ti-qu-jiang-li-yu-zhi-xian-jin)）
7. 已从 Agent 中移除矿工（参见 [第七部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-7-cong-agent-zhong-yi-chu-kuang-gong)）
8. 已向 GLIF 付款（参见 [第八部分](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-8-fu-kuan)）

在本教程中，我们将带您通过 GLIF 网站界面更改操作员地址。

***

## 第一步：发起更改操作员提案

1. 在 Agent 页面中，进入“**管理员**”部分，并确保处于“**拥有者模式**”。
2. 点击操作员地址旁边的图标。

![第一步：发起更改操作员提案](cn-image-17.png)

3. 在“**更改您的Agent的操作员**”多签提案界面中，输入新的操作员地址。
4. 点击“**发送**”，并在钱包中批准交易。

![第一步：发起更改操作员提案](cn-image-19.png)

5. 等待交易完成。一个“**Transfer Operator**”提案将显示在“**Agent 拥有者提案**”部分。

![第一步：发起更改操作员提案](cn-glif-agent-wang-zhan-jiao-cheng-9-geng-gai-cao-zuo-yuan-di-zhi_1.png)

## 第二步：审批提案

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在“**Agent 拥有者提案**”部分找到“**Transfer Operator**”提案。
3. 点击“**批准提案**”。

![第二步：审批提案](cn-glif-agent-wang-zhan-jiao-cheng-9-geng-gai-cao-zuo-yuan-di-zhi_2.png)

4. 在钱包中确认交易。

## 第三步： 接受操作员角色

1. 使用新操作员钱包连接网站。
2. 在 Agent 页面中进入“**管理员**”部分，您将看到待接受的操作员地址。
3. 点击“**接受操作员角色**”。

![第三步： 接受操作员角色](cn-image-20.png)

4. 点击“**发送**”。

![第三步： 接受操作员角色](cn-image-21.png)

5. 等待交易完成（约 1–2 分钟）。更新后的操作员地址将显示在“**管理员**”面板中。

***

## 恭喜！

您已成功更改操作员地址！

***

## 下一步

本系列教程至此结束。如果您想学习如何将 Agent 中的 FIL 提现到交易所，可以参考[此教程](/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/ru-he-jiang-fil-cong-glif-agent-zhuan-chu-zhi-jiao-yi-suo)。
