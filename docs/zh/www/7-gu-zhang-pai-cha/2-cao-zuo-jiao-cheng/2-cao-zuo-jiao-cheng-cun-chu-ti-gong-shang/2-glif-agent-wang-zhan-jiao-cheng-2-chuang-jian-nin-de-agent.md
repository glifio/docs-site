# GLIF Agent 网站教程 (2) — 创建您的 Agent

_如果您还不熟悉 GLIF Agent 的基础知识以及在 GLIF 网站上创建 Agent 的准备步骤，建议您先阅读本教程的_[_第一部分_](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi)_。_

***

## Agents、Agent 拥有者和登录密钥

在网站上创建 Agent 之前，理解 GLIF 中的两个角色非常重要。简单回顾如下：

1. **Agent** - Agent 是一个从 GLIF 借用 FIL 的智能合约。您将自行部署、拥有并操作该 Agent 智能合约（在本教程的[第二部分](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent)中介绍）。为了借用 FIL，您的 Agent 需要抵押品，而抵押品来自对您 Filecoin 矿工的拥有权。更详细的 Agent 介绍请参考[此处](/docs/cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian)。
2. **Agent** 拥有者钱包**-** Agent 拥有者钱包是控制您的 Agent 的钱包。谁掌控了 Agent Owner Wallet ，就能操作您的 Agent。因此，确保 Agent Owner Wallet的 安全很重要，而 GLIF 将自动帮助您做到这一点。

## Agent 创建指南

在本教程中，您将：

1. 创建 Agent 拥有者多签钱包
2. 创建 Agent 智能合约

GLIF 网站上的 Agent 创建指南会逐步指引您完成这些步骤。下文是详细的操作教程。

## 在GLIF网站上创建您的 Agent

**第 1 步** — 访问 [glif.io/agent](/agent)，点击左侧面板中的“**创建新的Agent**”按钮：

![在GLIF网站上创建您的 Ag](cn-image-265.png)

***

**第 2 步** — 连接您在本教程[第一部分](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi)中创建的“发起者 (proposer)” Filecoin Snap 钱包

![在GLIF网站上创建您的 Ag](cn-image-266.png)

点击“**连接**”按钮后，您需要在钱包中批准 GLIF 与该钱包的连接请求。可能会弹出两次连接请求，请记得都要批准。

![在GLIF网站上创建您的 Ag](cn-image-268.png)

您的 FilSnap 钱包需要一些资金来执行创建新 Agent 所需的交易。

> [!TIP]
> 如果您的钱包余额为零，请使用“存款”按钮从其他钱包向该钱包地址进行转账，或从交易所向该钱包地址充币。如果遇到存入资金的问题，请参阅此处的[教程](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/zai-jiao-yi-suo-he-glif-zhi-jian-zhuan-yi-fil)。

***

**第 3 步** — 输入额外的两个钱包地址（“审批者（the approver)”、“备用（backup”）作为签名人，并创建您的 Agent 拥有者钱包。这两个地址就是您在本教程[第一部分](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-1-zhun-bei-she-zhi)中创建的另外两个 FilSnap 或 Ledger 钱包地址。

![在GLIF网站上创建您的 Ag](cn-image-269.png)

如果您只想使用 2 个签名人，可在拥有者设置中将“**所需批准**”修改为 2，并删除“**签名者 3**”。

![在GLIF网站上创建您的 Ag](cn-image-270.png)

点击“**创建拥有者**”后，您需要在 MetaMask 中批准这笔交易：

![MetaMask prompt](cn-image-271.png)

做得很好！当您批准了创建 Agent 拥有者多签钱包的交易后，下一步就要创建 Agent 智能合约了。

***

**第 4 步** — 等待 Agent 拥有者多签钱包创建交易完成

在创建您的 Agent 之前，需要先等待 Agent 拥有者多签钱包成功部署到链上。

![在GLIF网站上创建您的 Ag](cn-image-272.png)

当多签钱包创建交易确认后，您就可以点击“**创建 Agent**”按钮，并在 MetaMask 中批准该交易：

![MetaMask prompt](cn-image-273.png)

***

第 5 步 — 等待 Agent 创建交易确认

![在GLIF网站上创建您的 Ag](cn-image-274.png)

***

第 6 步 — 成功！您将看到一个新创建的 Agent。

![在GLIF网站上创建您的 Ag](cn-image-275.png)

## 重要的 Agent 信息

在创建 Agent 之后，请注意以下信息：

* **Agent ID**：Agent ID 是 GLIF 在其智能合约基础设施中标识您的 Agent 所使用的内部编号。
* **Agent f410 地址**：这是 Agent 的智能合约地址，以 Filecoin 原生格式显示。
* **Agent 0x 地址**：这是 Agent 的智能合约地址以以太坊原生格式显示。Agent 的 f410 地址和 0x 地址在功能上是一样的。
* **Agent 拥有者**：Agent 的拥有者，即我们在本教程开头创建的多签钱包。
* **Agent Operator**：有关 Agent Operator 的更多信息将在本教程的后续部分介绍。

## 下一步

恭喜您！您已经成功创建了 GLIF Agent。回顾一下，在本教程的第二部分中，您应当已完成：

1. 使用 FilSnap 钱包加上 2 个 Ledger 钱包或 Burner 钱包地址作为签名人，创建了新的 Agent 拥有者多签钱包
2. 创建了新的 Agent 智能合约

在本教程的[第三部分](/docs/gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/glif-agent-wang-zhan-jiao-cheng-3-tian-jia-nin-de-kuang-gong)，我们将向您展示如何将 Filecoin 矿工添加到您的 Agent 中。
