---
description: Agents 是独特的 FEVM 智能合约，存储提供者可以使用 Agents 从 GLIF 借入 FIL
---

# 使用 Agents 管理节点

## 什么是 Agents

Agents 是 FEVM 上的智能合约，允许存储提供商 (SP) 抵押 Filecoin Miner Actor 以从 GLIF 借入 FIL。每个存储提供商 (SP) 都部署并拥有自己的 Agents 智能合约。Agents 充当 SP 和 GLIF 之间的中介，允许 SP 在从 GLIF 借款的同时保持对其矿工的拥有权和控制权。

![什么是 Agents](../.gitbook/assets/image (376).png)

## 部署 Agents

1. 通过 GLIF [网站](https://glif.io/en/agent)
2. 通过 GLIF [CLI](https://github.com/glifio/glif)

请[在此](../gu-zhang-pai-cha/cao-zuo-jiao-cheng/cao-zuo-jiao-cheng-cun-chu-ti-gong-shang/)查看详细的 Agents 相关教程。

## 向 Agents 添加抵押品

Agents 可以在添加抵押品后借款。您可以通过向 Agents 智能合约发送 FIL 或质押一个或多个 Filecoin Miner Actor 来添加抵押品。有关向 Agents 添加抵押品的深入教程将很快发布。
{% hint style="info" %}
要将 Filecoin Miner Actor 质押给 GLIF Agents 智能合约，存储提供商必须将其 Filecoin Miner Actor 的拥有权 (Ownership) 分配给其 GLIF Agents 智能合约的地址
{% endhint %}

\
添加到 Agents 的挖矿算力越多， Agents 的清算价值就越大，从而增加 Agents 可以借入的 FIL 总量。

![向 Agents 添加抵押品](../.gitbook/assets/image (375).png)

## Agents 拥有权

部署 Agents 的存储提供商对 Agents 拥有完全和全面的控制权。如果存储提供商丢失其 Agents 拥有权 (Ownership) 密钥，GLIF 团队无法为存储提供商恢复资产。

{% hint style="info" %}
对于存储提供商来说，以安全和负责任的方式管理和备份其 Agents 密钥至关重要
{% endhint %}

## Agents 拥有者和操作者密钥

GLIF 协议使用两个不同的密钥来管理Agents智能合约。只有存储提供商可以访问这些密钥，并且必须保持它们的私密性和安全性。更改这些密钥需遵循两个安全步骤，涉及当前持有者的提案，以及新持有者的接受。

### 拥有者 (Owner) 密钥：

拥有者密钥具有执行特别权限，可以将 FIL 移入和移出 Agents。它允许借款、提取资金、添加或删除Miner Actor 以及更改操作者 (Operator) 等操作，通常由存储提供商的管理层控制。

### 操作者 (Operator) 密钥：

操作者密钥具有操作功能的权限，如付款、管理Worker 地址以及在 Agents 与其任何Miner Actor之间移动资金。

## Agents 警察 (Agents Police)

代理警察 (Agents Police) 是 GLIF 的管理员合约，确保每个 Agents 在执行借款或提取 FIL 等操作时保持在借款与清算价值比 (DTL) 内。如果 Agents 违反系统规则，Agents 警察 (Agents Police) 负责处理Agents状态转换和清算。

## Agents 数据预言机 (Agent Data Oracle)

FVM 运行时并没有提供很多 SP 的完整历史数据。即使提供了，在 L1 智能合约环境中进行准确的风险计算也会消耗大量 gas fee。ADO 是一个链下数据聚合器，允许 GLIF 安全地以非常低的成本，接收有关 SP 的任何实时和/或历史数据。GLIF 可以从 ADO 接收自己的独特数据，从而实现最大的灵活性。

当 Agents 想要执行借款等操作时，它必须首先向 ADO 发出请求以获得凭证。ADO 进行[安全检查](https://docs.google.com/document/d/1nHpdoUqtPuOGBWZu2BsqiaHle8qY4aTTxRr46bMLXR8/edit#heading=h.3qy3cyd2t1qj)，并向 Agents 发出签名凭证，其中包含有关相关Agents及其所有相关Miner Actor的最新数据快照。然后，Agents 将此凭证带到GLIF，GLIF使用该凭证决定是否批准该操作。

## 配额机制 (Quota System)

目前所有Agent 的默认配额为 500,000 FIL。如需提高配额，可以在我们的 [Discord 服务器](https://discord.gg/5qsJjsP3Re)中提交支持工单 (#support-ticket)。该机制确保团队能够与存储提供商(SP)沟通重要的升级或信息。

出于安全考虑，Level 2 Agent 的配额被设置为 0。这样可以在必要时快速禁用某个 Agent 的借贷功能。大多数 Agent 并不会受该机制影响。\
