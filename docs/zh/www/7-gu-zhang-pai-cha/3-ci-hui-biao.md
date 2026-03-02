# 词汇表

* **管理状态 (Administration)**：DTL 比率高于 75% 的存储提供商 (SP) 有机会被列入管理状态，这允许 GLIF 使用 SP Miner Actor 里任何可用余额来偿还 SP 的债务。如果 GLIF 管理员偿还 SP 的债务，扇区不会被终止或罚款。SP 从 GLIF 借款和提取也会被暂停。管理员的目标是让 SP 恢复至健康状态（DTL < 75%）。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/qing-suan-ji-zhi)。
* **Agents**:Agents 是 FEVM 上的智能合约，允许存储提供商 (SP) 抵押 Filecoin Miner Actors 以从 GLIF 借入 FIL。Agents 充当 SP 和 GLIF 之间的中介，允许 SP 在从 GLIF 借款的同时保持对其矿工的所有权和控制权。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian)。
* **Agents 警察** **(Agents Police)**：Agents警察是 GLIF 的管理员合约，确保每个 Agents 在执行借款或提取 FIL 等操作时保持在借款与清算价值比 (DTL) 内。如果 Agents 违反系统规则，Agents警察 (Agents Police) 负责处理Agents状态转换和清算。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian)。
* **Agents 数据预言机 (Agent Data Oracle)**：GLIF 协议中的一个链下数据聚合器，收集 SP 的实时和历史数据，以便于在 FEVM 智能合约中，安全且低成本地访问实时数据。随着 FEVM 更加成熟和更多实时数据可在链上使用，ADO最终会被淘汰。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian)。
* **年化利率 (Annual Percentage Rate)**：向存储提供商收取的年化费率，以百分比表示。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/jie-kuan-li-l)。
* **借款限额 (Borrowing Limits)**：SP 从 GLIF 借款时的最大债务对清算价值比 (DTL) 比率为 75%，这意味着 SP 的债务不能超过其清算价值的 75%。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。
* **债务对清算价值比 (Debt-to-Liquidation (DTL))**：该比率根据 SP 的清算价值，会決定 SP 最大可借款金额。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)。其计算方式为：

$$
债务对清算价值比 (DTL) =(本金 + 利息)/ 清算价值
$$

* **债务(Debt)**：SP 的未偿还本金加上任何未支付的利息。
* **退出 (Exit)**：代表 iFIL 持有者可以随时从 GLIF 提取 FIL 的过程，前提是资金池有足够的流动性来处理提款。有关详细信息，请参阅[此处](/docs/liu-dong-xing-ti-gong-zhe/ti-qu-fil)。
* **GLIF**：GLIF 是 [Filecoin](https://filecoin.io/) DeFi 的先驱，为生态内的DeFi发展奠定基石 - 使 Filecoin (FIL) 持有者能够将其 FIL 借贷(又称“租赁”)给不同的 Filecoin 矿工(又称为“存储提供商”) ，来获得持续的奖励。而存储提供商借入 FIL 作为 Filecoin 挖矿的抵押品，这有助于存储提供商的发展，同时提高了 Filecoin 网络的安全性。GLIF 是 Filecoin生态上最初发展和最受欢迎的 DeFi 协议。有关详细信息，请参阅[此处](/docs/jie-shao)。
* **担保人 (Guarantors)**：一种制度允许单个 SP 将多个Miner Actor聚合在一起，汇总所有Miner Actor的价值和借款能力。这种架构允许具有大量权益价值的大型Miner Actor为一个小得多的Miner Actor提供抵押品以借入资金。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/jie-dian-dan-bao-zhi-du)。
* **iFIL**：iFIL 是 GLIF 的奖励代币 - 一种部署在 FEVM 上的 ERC20 代币。流动性提供者 (LP) 持有 iFIL 代币以赚取奖励。有关详细信息，请参阅[此处](/docs/liu-dong-xing-ti-gong-zhe/glif-jiang-li-ji-zhi-ifil)。当前 iFIL 价格的计算方式为：

$$
iFIL 价格 = 资金池总资产 / iFIL流通供应量
$$

* **清算阈值 (Liquidation Threshold)**：债务对清算价值比 (DTL) 高于 85% 的 SP 处于清算的高度风险区。必须立即采取纠正措施，并与 GLIF 团队主动沟通，以避免被清算和最大限度地减少进一步损失。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/qing-suan-ji-zhi)。
* **清算价值 (Liquidation Value)**：如果矿工的扇区被终止，在减去罚金后，存储提供商的Miner Actor可以收回的预计价值。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/sp-qing-suan-jia-zhi)。其计算方式为：

$$
清算价值 = 矿工余额 - 矿工最大终止罚金
$$

* **流动性提供者 (Liquidity Provider)**：已将 FIL 存入 GLIF，并一直持有 iFIL 的 FIL 代币持有者。有关可以如何使用 GLIF 的详细信息，请参阅[此处](/docs/jie-shao/xie-yi-mu-biao-yong-hu)。
* **流动性储备金 (Reserve)**：资金池维持 10% 的资产储备金，专门用于 iFIL 退出以提取FIL。有关详细信息，请参阅[此处](/docs/liu-dong-xing-ti-gong-zhe/ti-qu-fil)。
* **矿工 (Miner)**：在 Filecoin 项目中，矿工是指负责管理存储挖矿操作和提供存儲证明的 Filecoin Miner Actor。一个存储提供商可能运行多个 Filecoin Miner Actor。
* **所有者 (Owner) 和操作员 (Operator) 密钥**：GLIF 协议使用两个不同的密钥来管理Agents智能合约。只有存储提供商可以访问这些密钥，并且必须保持它们的私密性和安全性。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/shi-yong-agents-guan-li-jie-dian)。
* **回收率 (Recovery Rate)**：代表一个SP被清算的时候，GLIF可以收回多少个已质押的FIL。 有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/sp-qing-suan-jia-zhi)。回收率的计算方法为：

$$
回收率 = (扇区抵押 - 最大终止罚金) / 扇区抵押
$$

* **存储提供商 (Storage Provider)**：存储提供商 (SP) 是运营一个或多个 [Filecoin Miner Actor](https://spec.filecoin.io/systems/filecoin_mining/storage_mining/) 的个人或组织。有关他们如可使用 GLIF 的详细信息，请参阅[此处](/docs/jie-shao/xie-yi-mu-biao-yong-hu)。
* **终止费用 (Termination Fee)**：当存储提供商 (SP) 被清算时，需要支付一定数量的 FIL 作为终止罚金
* **提款 (Withdrawal)**：存储提供商可以提取 FIL，来为以法定货币计价的开支提供资金，如 gas、工资、租金。当 SP 借入 FIL 再提取到 GLIF 之外时，由于借入的 FIL _不包括_ 在 SP 的清算价值中，因此会更快地达到债务对清算价值比 (DTL) 的上限。有关详细信息，请参阅[此处](/docs/cun-chu-ti-gong-shang/jie-ru-fil-yong-tu)。
