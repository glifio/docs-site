# GLIF Agent 网站教程 (7) —— 从Agent中移除矿工

_如果您还不了解 GLIF Agent 的基础概念、Agent 拥有者，或如何在 GLIF 网站上创建 Agent，建议您先阅读本系列教程的_ [_第一部分_](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) _和_ [_第二部分_](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)_。您可以在_[_此页面_](./)_上找到所有在 **GLIF 网站** 上使用 Agent 的教程。有关 **Agent 命令行** （CLI）操作的说明，请参考_ [_GLIF 命令行界面（CLI）文档_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_。_

***

### 开始前的准备

在本系列教程的前几部分中，您已经完成以下步骤：

1. 创建了 Agent 拥有者多重签名钱包（参见 [第一部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
2. 创建了 Agent 智能合约（参见 [第一部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
3. 已将矿工添加到 Agent 中（参见 [第三部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong))
4. 已从 GLIF 成功借出 FIL（参见 [第四部分](glif-agent-wang-zhan-jiao-cheng-4-jie-kuan.md)）
5. 已在矿工与 Agent 之间完成资金转移（参见 [第五部分](glif-agent-wang-zhan-jiao-cheng-5-zai-miner-he-agent-zhi-jian-zhuan-yi-fil.md)）
6. 已提取奖励或预支现金（参见 [第六部分](glif-agent-wang-zhan-jiao-cheng-6-ti-qu-jiang-li-yu-zhi-xian-jin.md)）

在本教程中，我们将带您通过 GLIF 网站界面，从 Agent 中移除矿工。

***

### 第一步 发起**移除矿工**提案

1. 进入 Agent 页面中的“**矿工**”部分。
2. 点击想要移除的矿工右侧的“**垃圾桶**”图标。

![第一步 发起移除矿工提案](../../../.gitbook/assets/image (8).png)

3. 在“**从您的Agent 中移除一个矿工**”多签提案界面中，输入矿工的新拥有者地址。
4. 核对细节后，点击“**签署交易**”。

> [!WARNING]
> 凭证仅在 5 分钟内有效。若出现"AgentPolice: Invalid Credential"错误，表示凭证已过期，请重新开始操作。

![第一步 发起移除矿工提案](../../../.gitbook/assets/image (9).png)

5. 点击“**发送**”，并在钱包中批准交易。

![第一步 发起移除矿工提案](../../../.gitbook/assets/image (10).png)

5. 等待交易完成。一个“**RemoveMiner**”提案将出现在“**Agent 拥有者提案**”部分。

![第一步 发起移除矿工提案](../../../.gitbook/assets/image (12).png)

***

### 第二步: 审批**提案**

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在“**Agent 拥有者提案**”部分找到“**RemoveMiner**”提案。
3. 点击“**批准提案**”

![第二步: 审批提案](../../../.gitbook/assets/image (7).png)

4. 在钱包中确认交易。
5. 等待交易完成（约 1–2 分钟）。完成后，该矿工将从您的 Agent 中移除。

![第二步: 审批提案](../../../.gitbook/assets/image (11).png)

***

### 恭喜！

您已成功从 Agent 中**移除矿工**！

***

### 下一步

在本系列教程的[第八部分](glif-agent-wang-zhan-jiao-cheng-8-fu-kuan.md)中，我们将介绍如何向 GLIF 进行付款。

## **加入我们的社区！**

欢迎加入我们的[Discord](https://discord.gg/5qsJjsP3Re)和[Telegram](https://t.me/glifio)，或在[X](https://twitter.com/glifio)上关注我们，以获取最新消息。

如果您遇到任何困难，请随时通过我们的[Discord支持工单](https://discord.gg/5qsJjsP3Re)与我们联系。
