# 关键财务比率

## 用于确定借款限额的关键比率是什么？

[借款与清算价值比 (DTL)](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl) 必须低于 75%。您可以在[此处](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)阅读更多细节。

## “清算价值”是什么，如何计算？

[清算价值](/docs/3-cun-chu-ti-gong-shang/2-sp-qing-suan-jia-zhi)是如果矿工的扇区被终止，在減去罚金和其他损失后，存储提供商的Miner Actor可以收回的預计价值。其计算方式为：

$$
清算价值 = 矿工余额 - 矿工最大终止罚金
$$

$$
矿工余额 = 可用余额 + 锁仓余额 + 扇区抵押
$$

## 借款与清算价值比 (DTL) 如何计算？

[借款与清算价值比 (DTL)](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl) 的计算方式为：

$$
借款与清算价值比 (DTL)  = 债务 / 清算价值
$$

## **如果我尝试借入并提取 10,000 FIL，并借款用于**封装**，我还能从 GLIF 再借多少？**

要确定您还能从 GLIF 借多少，您需要了解 [**借款与清算价值比** (**DTL)**](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。DTL 比率必须低于 75%。详情请阅读[这里](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。

DTL 的计算公式如下：

$$
借款与清算价值比 (DTL)  = 债务 / 清算价值
$$

下面让我们看看，借款用于封装以及提取 FIL ，各自会如何影响您的 DTL 比率：

#### **1. 借款用于**封装**：**

* 当您借款用于封装时，借入的金额会**加入**到您的 Agent 中。
* 这部分 FIL 会**保留**在您的 Agent 及其矿工里。
* 您的**债务**和**清算价值**都会因为借入的金额而**增加**。

> [!NOTE]
> 抵押用于封装的FIL会产生一个潜在的 “终止费用”，代表在清算时可能会损失的 FIL 数量。因此借款用于封装会导致 Agent 的清算价值略微下降。但是，每当矿工获得区块奖励时，Agent 的清算价值又会相应增加。

#### **2. 借款用于提取：**

* 当您为提现而借用 FIL 时，借入的金额会从您的 Agent 中**移除**。
* 您的**债务**增加，但**清算价值**也会因提取金额而**减少**。

> [!NOTE]
> 随着利息的累积，您的 DTL 会逐渐上升。

***

## **关键要点：**

* 在 你的Agent 矿工中**借款用于封装**可以让您获得更高的杠杆；而从 Agent 中**借款用于提取**则会显著增加 DTL。
* 请始终确保 DTL 保持在 75% 以下。

（有关借入FIL 的更多用途，请点击[此处](/docs/3-cun-chu-ti-gong-shang/4-jie-ru-fil-yong-tu)了解详情。）

***

## **示例分析：**

假设以下为初始情况：

* **Agent 债务：** 100 FIL
* **Agent 清算价值：** 200 FIL
* **DTL 比率：** 50%

如果您**借入 100 FIL**：

* **新的 Agent 债务：** 200 FIL
* **新的 Agent 清算价值：** 300 FIL
* **新的 DTL 比率：** 66% ✅

如果您使用这 100 FIL 进行封装，DTL 仍保持在 66%，因此只要 DTL 不超过 75%，您仍可继续借入。

但是，如果您选择**提取 100 FIL**：

* **Agent 债务：** 200 FIL
* **Agent 清算价值：** 200 FIL
* **DTL 比率：** 100% ❌

在这种情况下，DTL 超过了 75%，因此无法提取 100 FIL。

正如您所看到的，提取 FIL 会让 DTL 上升得更快，这将限制您的借款能力。
