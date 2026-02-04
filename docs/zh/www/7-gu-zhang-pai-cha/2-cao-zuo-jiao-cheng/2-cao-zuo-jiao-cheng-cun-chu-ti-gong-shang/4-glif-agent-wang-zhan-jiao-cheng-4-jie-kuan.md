# GLIF Agent 网站教程 (4) —— 借款

_如果您还不了解 GLIF Agent 的基础概念、Agent 拥有者，或如何在 GLIF 网站上创建 Agent，建议您先阅读本系列教程的_ [_第一部分_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) _和_ [_第二部分_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)_。您可以在_[_此页面_](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang)_上找到所有在 **GLIF 网站** 上使用 Agent 的教程。有关 **Agent 命令行** （CLI）操作的说明，请参考_ [_GLIF 命令行界面（CLI）文档_](https://github.com/glifio/glif?tab=readme-ov-file#agents---get-started-borrowing)_。_

***

## 开始前的准备

在本系列教程的前几部分中，您已经完成以下步骤：

1. 创建了 Agent 拥有者多重签名钱包（参见 [第一部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
2. 创建了 Agent 智能合约（参见 [第一部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/1-glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi) 与 [第二部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/2-glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent))
3. 已将矿工添加到 Agent 中（参见 [第三部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/3-glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong))

当您的 Agent 已绑定矿工后，下一步便是从 GLIF 借出 FIL。本教程将带您通过 GLIF 网站界面进行借款操作。

***

## 您可以借多少 FIL

在从 GLIF 借款之前，必须为您的 Agent 提供抵押品。共有两种方式可为 Agent 增加抵押资产并解锁借款额度：

**1. Agent 内可用余额**

若您希望直接向 Agent 转入 FIL，请在 Agent 页面复制其地址（f410/0x），然后从您的钱包向该地址发送 FIL。点击右上角下拉菜单中的“**发送 FIL**”，操作方式与普通钱包转账相同。

![您可以借多少 FIL](cn-image-422.png)

**2. Agent 中已添加矿工的可用余额**

如需了解如何将矿工添加到 Agent，请参考本系列教程的 [第三部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/3-glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong)。矿工账户中的可用余额同样可以作为抵押品。

***

添加抵押品后，您的借款上限（你可以借的最高金额）将显示在 Agent 页面上。\
此额度受以下因素影响：

* 借款方式：“**借款用于封装**”或“**借款用于提取**”；
* 您的 Agent 借款与清算价值比 (DTL)。

详细说明请参考[文档](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。

***

### 第一步：发起借款多签提案

1. 连接 Agent 拥有者多签钱包中的其中一个签名钱包。
2. 打开 Agent 页面右侧操作面板。
3. 选择您的借款方式：“**借款用于封装**”或“**借款用于提取**”。
4. 输入您希望借入的 FIL 数量（不得超过系统显示的“最大金额”）。
5. 核对细节，包括年化利率（APR）、新债务总额、每日利息以及更新后的 DTL 比率。
6. 点击“**借款**”。

![第一步：发起借款多签提案](cn-image-423.png)

7. 核对细节后，点击“**签署交易**”，系统将创建一个多签提案。

![第一步：发起借款多签提案](cn-image-424.png)

> [!WARNING]
> 凭证仅在 5 分钟内有效。若出现以下错误提示，表示凭证已过期，请重新发起交易。

![第一步：发起借款多签提案](en-image-212.png)

8. 点击“**发送**”，并在钱包中确认交易。

![第一步：发起借款多签提案](cn-image-428.png)

9. 等待交易完成。完成后，新的提案会出现在 Agent 拥有者提案中。

> [!WARNING]
> 最小借款额为 1 FIL。若出现以下错误提示，请确认借款金额是否过低。

![第一步：发起借款多签提案](en-image-211.png)

***

## 第二步：审批提案

1. 使用 Agent 拥有者多签钱包中另一个签名钱包，连接GLIF网站。
2. 在 Agent 页面找到“**Agent 拥有者提案**”中的“**Borrow**”提案。

![第二步：审批提案](cn-image-429.png)

3. 点击“**批准提案**”。

![第二步：审批提案](en-image-219.png)

4. 在钱包中确认交易。
5. 等待交易完成（通常需要几分钟）。批准后，Agent 页面中的可用余额将更新。

![第二步：审批提案](en-image-223.png)

6. 您还可以在 Agent 页面中查看更新后的 DTL 比率与总债务金额。

![第二步：审批提案](cn-glif-agent-wang-zhan-jiao-cheng-4-jie-kuan_5.png)

***

### 恭喜！

您已成功通过 Agent 借出 FIL！

***

### 下一步：

在[第五部分](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/2-cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/5-glif-agent-wang-zhan-jiao-cheng-5-zai-miner-he-agent-zhi-jian-zhuan-yi-fil)中，我们将介绍如何在矿工与 Agent 之间相互转移 FIL 资金。
