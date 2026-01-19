# 连接钱包

## 在 GLIF 中建议使用哪个钱包？

我们建议使用 [MetaMask](https://metamask.io/) 或安装了 Filecoin 应用程序的 [Ledger](https://www.ledger.com/)。

## 为什么我不能使用某个钱包进行存款或提款，例如 OKX 钱包？

在理论上用户可以同时安装多个钱包扩展程序，然而钱包的检测机制仍在不断发展，某些钱包可能不相互兼容。

## 我在Ledger中使用Filecoin账户生成的是一个f1地址，这似乎与MetaMask使用的0x地址不同。我在MetaMask的Filecoin网络下看不到我的FIL。我该怎么办？

MetaMask不支持Filecoin的f1地址，所以如果你使用的是原生Filecoin地址（f1），你将无法直接在MetaMask中看到你的FIL余额。\
\
相反，你可以将你的Ledger设备直接连接到GLIF，并在GLIF网站上查看你的余额。

## 当我在GLIF上使用Ledger进行存款时，它会显示一个f1地址，而使用MetaMask会显示一个0x地址。这些地址类型之间有什么区别？

关于不同地址类型的技术细节，请参阅：[Filecoin地址类型](https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/address-types)。

## 我查看了MetaMask，但它似乎提供了一个以太坊地址，而不是原生的Filecoin地址（f1）。我是否需要任何MetaMask的Filecoin插件，它能够长期使用吗？

使用MetaMask连接GLIF有两种方式——默认的MetaMask和Filsnap。\
\
默认的MetaMask连接方式与连接到任何EVM网络相同——你需要在MetaMask中更改网络至Filecoin主网。请参考：[https://chainlist.org/chain/314](https://chainlist.org/chain/314)\
\
Filsnap是一个可以安装在MetaMask中的插件，它会生成一个原生的Filecoin地址（以f1开头，而不是0x）。

某些复杂的Filecoin使用场景只能使用Filsnap来完成，然而大多数日常使用场景都可以通过默认MetaMask和0x地址来完成。

## 为什么我在使用Ledger进行存款或提款时看到“请求过期”的错误消息？

在GLIF用户界面中点击“发送”后，请确保检查您的钱包（浏览器扩展程序）以确认gas费用并发送交易。如果MetaMask弹出窗口出现在浏览器窗口后面且没有及时处理，交易可能会过期。

## 我在尝试使用我的Ledger存入FIL时遇到问题。交易失败了，提示包含无效数据（invalid data）。我该怎么办？

在你的Ledger设备上，它可能会提示“需要启用专家模式”（Expert mode required）。你需要在Ledger的Filecoin应用程序中启用“专家模式”（Expert mode）才能继续。这一步是必要的，因为Ledger本身无法识别以太坊交易参数，需要专家模式（Expert mode）才能正确地签署交易。

