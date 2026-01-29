# GLIF Agent 网站教程 (6) —— 提取奖励 / 预支现金

_如果您还不了解 GLIF Agent 的基础概念、Agent 拥有者，或如何在 GLIF 网站上创建 Agent，建议您先阅读本系列教程的_ [_第一部分_](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) _和_ [_第二部分_](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)_。您可以在_[_此页面_](/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang)_上找到所有在 **GLIF 网站** 上使用 Agent 的教程。有关 **Agent 命令行** （CLI）操作的说明，请参考_ [_GLIF 命令行界面（CLI）文档_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_。_

***

## 开始前的准备

在本系列教程的前几部分中，您已经完成以下步骤：

1. 创建了 Agent 拥有者多重签名钱包（参见 [第一部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
2. 创建了 Agent 智能合约（参见 [第一部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
3. 已将矿工添加到 Agent 中（参见 [第三部分](https://docs.glif.io/v2-zhong-wen/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong))
4. 已从 GLIF 成功借出 FIL（参见 [第四部分](/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/4-glif-agent-wang-zhan-jiao-cheng-4-jie-kuan)）
5. 已在矿工与 Agent 之间完成资金转移（参见 [第五部分](/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/5-glif-agent-wang-zhan-jiao-cheng-5-zai-miner-he-agent-zhi-jian-zhuan-yi-fil)）

有时候，您可能需要 FIL 来支付Gas费，或在交易所出售以支付法币账单。此时，您可以从 Agent 中提取资金，并将其转出 GLIF 池。本教程将带您通过 GLIF 网站界面完成该流程。

当您的 Agent 满足借款与清算价值比 (DTL) 要求时即可进行此操作。关于 DTL 的更多信息请参考[文档](/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。

***

### 第一步：发起提取提案

1. 在 Agent 页面右侧操作面板中，点击“**提取**”选项。
2. 输入收款地址与提取金额。

> [!WARNING]
> 这里会显示可提取的最大金额。该金额取决于您的借款与清算价值比 (DTL) 。详情请参阅相关[文档](/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。

3. 点击“**提取**”。

![第一步：发起提取提案](cn-image-4.png)

4. 核对详情后，点击“**签署交易**”。

> [!WARNING]
> 凭证仅在 5 分钟内有效。若出现“_AgentPolice: Invalid Credential_”错误，表示凭证已过期，请重新开始。

![第一步：发起提取提案](cn-image-5.png)

5. 点击“**发送**”，并在钱包中批准交易。

![第一步：发起提取提案](cn-image-6.png)

6. 等待交易完成。一个“**Withdraw**”提案会出现在“**Agent 拥有者提案**”部分。

![第一步：发起提取提案](cn-glif-agent-wang-zhan-jiao-cheng-6-ti-qu-jiang-li-yu-zhi-xian-jin.jpg)

## 第二步: 审批提案

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在“**Agent 拥有者提案**”部分找到“**Withdraw**”提案。
3. 点击“**批准提案**”。

![第二步: 审批提案](cn-image-1.png)

4. 在钱包中确认交易。
5. 等待交易完成，通常需要 1 到 2 分钟。完成后，FIL 会被发送至您填写的收款地址。

***

### 恭喜

您已成功从 Agent 中提取资金。

***

### 下一步

在本系列教程的[第七部分](/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/7-glif-agent-wang-zhan-jiao-cheng-7-cong-agent-zhong-yi-chu-kuang-gong)中，我们将介绍如何从 Agent 中移除矿工。
