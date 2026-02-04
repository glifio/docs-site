# 借入FIL用途

1. 用作 Filecoin 存储挖矿的抵押品
2. 为以法定货币计价的开支提供资金，如燃气费、工资、租金

GLIF 允许存储提供商 (SP) 将 FIL 用于这两种用途。如果您想快速了解特定 Miner ID 可以借入多少FIL，用于封装或提取，可以使用借款计算器。(即将推出)

## 借入 FIL - 用于存储挖矿

当 SP 借入 FIL 是用于存储挖矿时，它可以从 GLIF 借入更多 FIL，因为借入的 FIL 包含在 SP 的[清算价值](/docs/3-cun-chu-ti-gong-shang/2-sp-qing-suan-jia-zhi)中。因此，SP 受 [借款与清算价值比 (DTL)](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl) 比率的限制较少，因为 SP 的清算价值与其债务同时增长。

可参考以下例子：

1. 一个存储提供商 (SP) 打算在 GLIF 借款，使用一个清算价值有 1000 FIL 的Miner Actor 作为抵押品。一开始，其借款与清算价值比 (DTL)  为 0%。
2. SP 从 GLIF 借入 100 FIL，并将 100 FIL 转移给用于质押新扇区的Miner Actor。100 FIL 现在位于Miner Actor的可用余额中。
3. SP 的新借款与清算价值比 (DTL) 比率现在为 100 FIL / 1100 FIL，约为 9%。

在上面的例子中，SP 的债务在从 GLIF 借入 100 FIL 后，从 0 FIL 增加到 100 FIL。但是，它的清算价值也从 1000 FIL 增加到 1100 FIL，因为矿工在借款后其可用余额增加了 100 FIL。 在这个例子中，更清楚地说明了为什么使用借入的 FIL 进行封装，可以让 SP 使用 GLIF 更有效地经营。

## 借入 FIL - 提取到 GLIF 外使用

当 SP 借入 FIL 後提取到 GLIF 之外时，它会更容易受到 DTL 的限制，因为借入的 FIL _不包含_ 在 SP 的清算价值中。当 SP 从其Miner Actor 中移除抵押品时，SP 的清算价值会降低。

可参考以下例子：

1. 一个存储提供商 (SP) 打算在 GLIF 借款，使用一个清算价值有 1000 FIL 的Miner Actor作为抵押品。一开始，其借款与清算价值比 (DTL)  为 0%。
2. SP 从 GLIF 借入 100 FIL，并将 100 FIL 转移到一个将出售 FIL 以支付 SP 开支的交易所地址。100 FIL 现在已经被_带出 GLIF 之外_。
3. SP 的新 DTL 比率现在为 100 FIL / 1000 FIL，约为 10%。

在上面的例子中，SP 的债务从 0 FIL 增加到 100 FIL。但是，它的清算价值保持不变（1000 FIL），因为新借入的 FIL 被带出GLIF系统_之外_（而不是保留在GLIF系统中用于存储挖矿）。

***

> [!IMPORTANT]
> 无论 SP 选择将借入的 FIL 用于存储挖矿还是提取到 GLIF 外使用，SP 的 DTL 比率必须保持在 75% 以下才能获得批准。

## 结论：

当存储提供商使用从 GLIF 借入的 FIL 进行存储挖矿，而不是提取到 GLIF 外时，他们可以获得更高的杠杆。
