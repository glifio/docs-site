# Agents

## GLIF 系统中Agents的作用是什么？

Agents 是 FEVM 上的智能合约，允许存储提供商 (SP) 抵押 Filecoin Miner Actor 以从 GLIF 借入 FIL。每个存储提供商 (SP) 都部署并拥有自己的 Agents 智能合约。Agents 充当 SP 和 GLIF 之间的中介，允许 SP 在从 GLIF 借款的同时保持对其矿工的拥有权和控制权。\
Agents 是唯一被允许从资金池中借入 FIL 的智能合约。当 Agents 从资金池中借入 FIL 时，它可以将其从系统中提取，或将其发送到 Agents 內某个抵押Miner Actor，以在 Filecoin 存储挖矿过程中使用。

有关详细信息，请参阅[此处](/docs/3-cun-chu-ti-gong-shang/7-shi-yong-agents-guan-li-jie-dian)。

## 节点担保制度如何运作？

[节点担保制度](/docs/3-cun-chu-ti-gong-shang/8-jie-dian-dan-bao-zhi-du)允许存储提供商 (SP)  使用更大、更有价值的Miner Actor作为抵押品，以支持其他Miner Actor的借款。换句话说，用作抵押品的Miner Actor不一定也必须是用于封装的Miner Actor。

## Agents拥有者(Owner)和操作员(Operator)密钥有什么权限？

就像 Filecoin Miner Actor的拥有者 (Owner)、工作者 (Worker) 和控制 (Control) 地址一样，GLIF Agents有一个拥有者(Owner)和操作员(Operator)地址，具有不同的权限：

* 拥有者(Owner)密钥：管理敏感操作，如借款、提款和从Agents中添加或删除Miner Actor。
* 操作员(Operator)密钥：处理付款、工作者(Worker)地址和日常操作。

有关详细信息，请参阅[此处](/docs/3-cun-chu-ti-gong-shang/7-shi-yong-agents-guan-li-jie-dian)。

## Agents警察是什么，其功能是什么？

Agents警察 (Agents Police) 是 GLIF 的管理员合约，确保每个 Agents 在执行借款或提取 FIL 等操作时保持在[借款与清算价值比 (DTL)](/docs/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl) 限额内。如果Agents 违反系统规则，Agents警察 (Agents Police) 负责处理Agents状态转换和清算。

## 如何从代理中移除矿工？

步骤 1：\
使用以下命令为您的Miner（miner-id）提议拥有权变更，将 new-owner-address 设置为新拥有者：\
`glif agent miners remove <miner-id> <new-owner-address>`\`

步骤 2：\
步骤 2 必须在 GLIF 之外完成 - 新的拥有者地址必须确认拥有权变更。如果您使用 Lotus，此指令为：\
`lotus actor set-owner --really-do-it …`
