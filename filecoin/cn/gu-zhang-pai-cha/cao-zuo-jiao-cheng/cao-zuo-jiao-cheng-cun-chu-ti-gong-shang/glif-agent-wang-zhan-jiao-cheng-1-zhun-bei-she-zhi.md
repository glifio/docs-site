
# GLIF Agent 网站教程 (1) — 准备设置

在 GLIF Agent 教程的第一部分中，我们将涵盖两个主题：

1. 了解 GLIF Agent 的不同部分以及它们的基本规则。
2. 为在 GLIF 网站上创建 Agent 做好准备。

如果您已经了解了这些基础知识，并准备好直接在网站上创建您的 Agent，您可以跳过第一部分，直接进入[第二部分](glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent.md)。

## GLIF Agents — 基础知识

1. **Agent** - Agent 是一个从 GLIF 借用 FIL 的智能合约。您将自行部署、拥有并操作该 Agent 智能合约（在本教程的[第二部分](glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent.md)中介绍）。为了借用 FIL，您的 Agent 需要抵押品，而抵押品来自对您 Filecoin 矿工的拥有权。更详细的 Agent 介绍请参考[此处](../../../cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian.md)。
2. **Agent 拥有者钱包 -** Agent 拥有者钱包是控制您的 Agent 的钱包。谁掌控了 Agent 拥有者钱包，就能操作您的 Agent。因此，确保 Agent 拥有者钱包的 安全很重要，而 GLIF 将自动帮助您做到这一点。

当您在 GLIF 网站上创建 Agent 时，Agent 拥有者钱包将会是一个至少有 2 个签名人的 Filecoin 多重签名钱包（多签钱包），我们建议使用 3 个签名人。多重签名钱包是拥有 Agent 时，最安全的钱包选择。

### 多重签名钱包

多重签名钱包是带有多个签名方（“签名人”）的智能合约钱包。多签钱包会在执行交易前，强制要求达到最低签名数量才能批准相应提案。多签钱包的提案/批准流程如下：

1. 多签钱包的一位签名人提交执行交易的提案。
2. 其他多签钱包签名人必须批准该提案。
3. 当达到最低签名数后，交易便会执行。

### GLIF Agent 多重签名拥有者钱包配置

在 Filecoin 上，多签钱包通常具有高度灵活的配置。但为了更高的安全性，GLIF 推荐使用带有 3 个签名人的配置：

1. 签名人 1 — “发起者（the proposer）” \
   使用 Filecoin Snap 钱包（又称“FILSnap 钱包”，[点击此处](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)查看详细教程）
2. 签名人 2 — “审批者（the approver）” \
   使用 Filecoin Ledger 钱包，或另一个 FilSnap 钱包，或 Burner 钱包
3. 签名人 3 — “备用（backup）”\
   另一个（不同的）Filecoin Ledger 钱包，或另一个 FilSnap 钱包，或 Burner 钱包

GLIF 建议在多签钱包中将签名阈值设置为 2——也就是说，需要 2 个签名才能执行交易。换言之：

1. “发起者”（签名人 1）向 Agent 多签拥有者钱包提交一笔交易提案（例如，向 GLIF 借用 FIL）。
2. “审批者”（签名人 2）审批第一步中的交易提案。
3. 交易即成功执行。

> [!TIP]
> 如果您丢失了任意一个签名人的私钥（无论是 Ledger 设备、Filecoin Snap 钱包等），都可以轻松将其替换为新的私钥！这也是为什么多签钱包让您更安全地拥有 Agent。

![GLIF Agent 多重签名](../../../.gitbook/assets/image (193).png)

## 准备创建 Agent

在正式创建 Agent 之前，您需要准备 3 个地址：

1. FILSnap 钱包地址 1
2. FILSnap 钱包地址 2 或 Ledger 地址 1 或 Burner 钱包地址 1
3. FILSnap 钱包地址 3 或 Ledger 地址 2 或 Burner 钱包地址 2

关于如何获取 [FilSnap](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)钱包、[Burner](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md) 钱包或 [Ledger](../cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/qian-bao/ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md) 钱包地址的详情，请点击链结查看教程。

> [!TIP]
> 为了提升安全性，我们建议您使用两台不同的 Ledger 设备，但如果您现在只有一台 Ledger 设备，也可以先使用它，然后稍后再添加另一台 Ledger 设备。
>
> 如果您暂时不想使用 Ledger，您也可以设置另一个 FilSnap 地址或 Burner 钱包地址作为第二或者第三个地址，这样也能正常使用，但使用 Ledger 能进一步增强安全性。

## 下一步

一旦您拥有了 3 个 Filecoin 钱包地址：

* 1 个 FILSnap 钱包地址
* 2 个 Ledger 钱包地址或 Burner 钱包地址

就可以进入本教程的[第二部分](glif-agent-wang-zhan-jiao-cheng-2-chuang-jian-nin-de-agent.md)继续操作。

## **加入我们的社区！**

欢迎加入我们的[Discord](https://discord.gg/5qsJjsP3Re)和[Telegram](https://t.me/glifio)，或在[X](https://twitter.com/glifio)上关注我们，以获取最新消息。

如果您遇到任何困难，请随时通过我们的[Discord支持工单](https://discord.gg/5qsJjsP3Re)与我们联系。
