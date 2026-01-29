# GLIF Agent 网站教程 (5) —— 在 Miner 和 Agent 之间转移 FIL

_如果您还不了解 GLIF Agent 的基础概念、Agent 拥有者，或如何在 GLIF 网站上创建 Agent，建议您先阅读本系列教程的_ [_第一部分_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) _和_ [_第二部分_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)_。您可以在_[_此页面_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang)_上找到所有在 **GLIF 网站** 上使用 Agent 的教程。有关 **Agent 命令行** （CLI）操作的说明，请参考_ [_GLIF 命令行界面（CLI）文档_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_。_

***

## 开始前的准备

在本系列教程的前几部分中，您已经完成以下步骤：

1. 创建了 Agent 拥有者多重签名钱包（参见 [第一部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
2. 创建了 Agent 智能合约（参见 [第一部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
3. 已将矿工添加到 Agent 中（参见 [第三部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/3-glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong))
4. 已从 GLIF 成功借出 FIL（参见 [第四部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/4-glif-agent-wang-zhan-jiao-cheng-4-jie-kuan)）

当您的 Agent 中已有可用 FIL 后，下一步就是在 Agent 与矿工之间进行资金转移。\
本教程将带您通过 GLIF 网站界面完成 [**推送资金 (Push)**](#cong-agent-xiang-kuang-gong-tui-song-zi-jin) 与 [**提取资金 (Pull)**](#cong-kuang-gong-xiang-agent-ti-qu-zi-jin) 操作。

***

## 从 Agent 向矿工推送资金

当您希望将 Agent 中的 FIL 发送到 Agent 拥有的矿工，用于在 Filecoin 网络上作为抵押品时，请按以下步骤操作。

### 第一步：发起推送资金至矿工

1. 在 Agent 页面中，到 “**矿工**”部分。
2. 点击您希望转账的矿工右侧的向下箭头。

![第一步：发起推送资金至矿工](cn-image-27.png)

3. 在“**推送资金至矿工**”多签提案界面中，输入要发送的金额。
4. 点击“**签署交易**”。

> [!WARNING]
> 凭证仅在 5 分钟内有效。若出现 “_AgentPolice: Invalid Credential_” 错误，表示凭证已过期，请重新发起操作。

![第一步：发起推送资金至矿工](cn-image-28.png)

5. 点击“**发送**”，并在钱包中批准交易。

![第一步：发起推送资金至矿工](cn-image-29.png)

6. 等待交易完成。完成后，一个“**Push Funds**”提案会出现在“**Agent 拥有者提案**”部分。

![第一步：发起推送资金至矿工](en-image-233.png)

### 第二步：审批提案

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在“**Agent 拥有者提案**”部分找到“**Push Funds**”提案。
3. 点击“**批准提案**”。

![第二步：审批提案](cn-image-23.png)

4. 在钱包中确认交易。
5. 等待交易完成（约 1–2 分钟）。完成后，Agent 可用余额将减少，而矿工余额将相应增加。

## 从矿工提取资金回Agent

当您希望将矿工中的 FIL 提回 Agent，以便提取奖励或支付利息时，请按以下步骤操作。

### 第一步：发起从矿工提取资金操作

1. 在 Agent 页面中，进入“**矿工**”部分。
2. 点击您希望提取资金的矿工右侧的向上箭头。

![第一步：发起从矿工提取资金操作](cn-image-22.png)

3. 在“**从矿工提取资金**”多签提案界面中，输入要提取的金额（不得超过矿工的可用余额）。
4. 点击“**签署交易**”。

> [!WARNING]
> 凭证仅在 5 分钟内有效。若出现 “_AgentPolice: Invalid Credential_” 错误，表示凭证已过期，请重新发起操作。

![第一步：发起从矿工提取资金操作](cn-image-24.png)

5. 点击“**发送**”，并在钱包中批准交易。

![第一步：发起从矿工提取资金操作](cn-image-25.png)

6. 等待交易完成。完成后，一个“**Pull Funds**”提案会出现在“**Agent 拥有者提案**”部分。

![第一步：发起从矿工提取资金操作](en-image-240.png)

### 第二步：审批提案

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在“**Agent 拥有者提案**”部分找到“**Pull Funds**”提案。
3. 点击“**批准提案**”。

![第二步：审批提案](cn-image-26.png)

4. 在钱包中确认交易。
5. 等待交易完成（约 1–2 分钟）。完成后，Agent 可用余额将增加，而矿工余额将减少。

***

### 恭喜！

您已成功在矿工与 Agent 之间转移 FIL！

***

### 下一步：

在[第六部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/6-glif-agent-wang-zhan-jiao-cheng-6-ti-qu-jiang-li-yu-zhi-xian-jin)中，我们将介绍如何从 Agent 中提取奖励或预支现金。
