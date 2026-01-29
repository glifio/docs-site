# 资产安全

## 资金安全 - 清算机制

GLIF 的资金安全基于存储提供商 (SP) 始终保持超额抵押。 如果 SP 违反其抵押限额，SP 将被清算，在损失发生之前，收回的资产将代表 SP 偿还给资金池。 GLIF 使用[债务与清算价值比 (DTL](/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)[)](/3-cun-chu-ti-gong-shang/3-jie-kuan-shang-xian-jie-kuan-yu-qing-suan-jia-zhi-bi-dtl)来衡量抵押率，该比率衡量 SP 借入的金额与其清算价值的比例。 清算价值是在[清算情况](/3-cun-chu-ti-gong-shang/5-qing-suan-ji-zhi)下 SP 的预计价值，考虑了罚金和其他损失。

在此阅读更多关于[资金安全规则](/3-cun-chu-ti-gong-shang/5-qing-suan-ji-zhi)的信息。

## 代码安全 - 审计和持续监控

自 2019 年以来，GLIF 一直为 Filecoin 持有者构建金融基础设施。 GLIF 用户的安全一直是、也永远是我们的首要任务。 我们的 DeFi 协议已经经历了 5 次安全审计评估：

* [Consensys Diligence](https://diligence.security) 进行了 10 人周的非正式审查，提供早期反馈和评论架构设计
* Consensys Diligence 的顶级 DeFi 审计员进行了 5 人周的正式审查[（参见此处的报告）](infinity-pool-audit-consensys.pdf)
* 通过 [Sherlock](https://www.sherlock.xyz/) 进行的 20 人邀请制审计竞赛，由经验丰富的 DeFi 审计员参与[（参见此处的报告）](infinity-pool-audit-consensys.pdf)
* Consensys Diligence V2 协议审计
* Hexens V2 协议审计（报告完成后将上传）

除了代码审计之外，GLIF 还持续监控协议是否违反抵押限额以及可疑或异常活动。

## 安全漏洞赏金计划

我们欢迎社区成员负责任地披露各类安全问题。可是，但凡未涉及资金损失、用户数据泄露或智能合约利用的低风险漏洞，将不在奖励范围内，例如邮件伪造、网站 Header 配置等问题。

本赏金计划专注于高影响力的安全漏洞，作为参考，我们遵循与 [GitHub](https://bounty.github.com/#scope)、[Uniswap](https://cantina.xyz/bounties/f9df94db-c7b1-434b-bb06-d1360abdd1be?overviewTab=1\&assetGroup=0)  等行业领先项目类似的范围指引。
