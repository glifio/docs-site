# 关于GLIF

## 什么是 GLIF？

GLIF 是 [Filecoin](https://filecoin.io/) DeFi 的先驱，为生态内的DeFi发展奠定基石 - 使 Filecoin (FIL) 持有者能够将其 FIL 借贷(又称“租赁”)给不同的 Filecoin 矿工(又称为“存储提供商”) ，来获得持续的奖励。而存储提供商借入 FIL 作为 Filecoin 挖矿的抵押品，这有助于存储提供商的发展，同时提高了 Filecoin 网络的安全性。与 PoS 网络(如 [Lido](https://lido.fi/) 或 [Jito](https://www.jito.network/zh-TW/))的“流动质押”解决方案类似，GLIF 解决了 Filecoin 资本效率的重大问题，也是 Filecoin生态上最初发展和最受欢迎的 DeFi 协议。\
\
自 2019 年初以来，GLIF 品牌一直是 Filecoin 生态系统的可信赖长期合作伙伴，从 Protocol Labs 和 Filecoin 基金会获得了超过 400 万美元的资助，为 Filecoin 网络构建重要的应用程序和工具。最值得注意的是，GLIF 为 Filecoin 主网启动构建了第一个 Filecoin Web 钱包和多签钱包，至今仍在整个生态系统中被广泛使用，支援 Filecoin 支付、生态系统资助和日常运营。

有关详细信息，请参阅[此处](https://docs.glif.io/)。

## 作为 FIL 代币持有者，我可以使用 GLIF 做什么？

作为 FIL 代币持有者，您可以通过以下几种方式使用 GLIF：

1. 使用我们内置的钱包或多签功能 - GLIF 的[钱包](https://www.glif.io/en/wallet)和[多签](https://www.glif.io/en/multisig)在整个Filecoin生态系统中被广泛使用，支援发送/接收/托管 FIL。
2. 将 FIL 存入 GLIF 以赚取奖励。有关详细信息，请参阅[此处](../../../liu-dong-xing-ti-gong-zhe/glif-jiang-li-ji-zhi-ifil.md)。

## 为什么 GLIF 很重要？

在 2023 年 3 月推出 [FVM](https://fvm.filecoin.io/) 之前 (FVM 是 Filecoin 的内置虚拟机，允许开发人员将自定义的 solidity 智能合约部署到 Filecoin 区块链)，Filecoin网络存在资本低效率的问题。存储提供商(Filecoin的“矿工”)没有一个无需许可、高效且灵活的方式来借入 FIL 作为存储挖矿的抵押品，而大多数 Filecoin 持有者没有安全且容易使用的途径，将 FIL 借给存储提供商以赚取可持续的FIL奖励。

GLIF 的出現填补了 FIL 持有者和存储提供商之间的需求缺口，通过智能合约，创建了一个高效、可扩展且信任最小化的市场，具有明确的规则。GLIF 使FIL持有者能够持续地获得奖励，并使存储提供商能够扩大其规模。

## 我不明白GLIF的使用场景。为什么矿工需要将FIL存入GLIF，然后再借回FIL，但明明它们是同一种代币？

其实矿工或存储提供商 (SP) 不需要将 FIL 存入 GLIF。相反，他们使用已经在节点上质押的 FIL 作为抵押品。让我们来看看 GLIF 如何与 SP 合作：

SP 可以从大量流动性提供者 (LP) 手中借入 FIL，而无需交出私钥、签署法律文件或进行 KYC 验证。借入的 FIL 可用于存储挖矿，或者从系统中提取出来。为了有资格借款，SP 必须向 GLIF 提供抵押品。SP 可以使用已经锁定在其现有节点中的抵押品(Pledged Collateral) 来借入 FIL，使他们能够在不购买更多 FIL 的情况下扩展运营。

## 当SP从GLIF借款时，他们使用什么作为抵押品？

通过重复使用已锁定在现有节点中的质押抵押品和挖矿奖励，存储提供者（SP）可以有效地扩大其运营，而不需要购买更多的FIL。而SP提供的FIL抵押品是非流动的，因为它们已经质押给Filecoin网络用于存储挖矿。

## 为什么SP需要提供抵押品？

抵押品在确保整个池子的安全性和稳定性方面起着关键作用。如果SP违反了池子的规则，他们的抵押品可能会被清算，这使得池子能够代表流动性提供者 (LP)回收FIL，以减轻损失（在理想情况下可以完全避免损失）。

***
