# 将 FIL 从 MEXC 转入 GLIF

如果您的 FIL 代币目前存放在交易所，并且您想将其用于赚取收益，将FIL存入 GLIF，那么本教程将帮助您简化流程。

本教程专门针对从 MEXC 转移 FIL。请[点击此处](../)查看其他交易所的教程。

> [!NOTE]
> GLIF 与大多数 EVM 钱包兼容。本教程以 MetaMask 钱包为示例，其他钱包同样适用。\
> 您可以参考我们的[常见问题](../../../../chang-jian-wen-ti/chang-jian-wen-ti-liu-dong-xing-ti-gong-zhe/)和[钱包教程](../../qian-bao/)以获取更多资讯。
>
> 如果您遇到任何问题，请通过[ Discord 支持工单](https://discord.gg/5qsJjsP3Re)与 GLIF 联系。

## 目录

* [步骤 1：设置中介钱包（如有需要）](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-1-she-zhi-zhong-jie-qian-bao-ru-you-xu-yao)
* [步骤 2：将 Filecoin 从交易所发送到中介钱包](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-2-jiang-filecoin-cong-jiao-yi-suo-fa-song-dao-zhong-jie-qian-bao)
* [步骤 3：检查中介钱包中的 FIL 余额](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-3-jian-cha-zhong-jie-qian-bao-zhong-de-fil-yu-e)
* [步骤 4：将主钱包连接至 GLIF 和 Filecoin 主网](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-4-jiang-zhu-qian-bao-lian-jie-zhi-glif-he-filecoin-zhu-wang)
* [步骤 5：将 Filecoin 从中介钱包转移到您的主钱包](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-5-jiang-filecoin-cong-zhong-jie-qian-bao-zhuan-yi-dao-nin-de-zhu-qian-bao)
* [步骤 6：通过 GLIF 存入您的 Filecoin](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-6-zai-glif-cun-ru-nin-de-filecoin)

## 步骤 1：设置中介钱包（如有需要）

**如果您要转移 FIL 的钱包地址以 `f1` 开头：**

* 您可以直接跳到[步骤 2 ](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-2-jiang-filecoin-cong-jiao-yi-suo-fa-song-dao-zhong-jie-qian-bao)和[步骤 6](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-5-jiang-filecoin-cong-zhong-jie-qian-bao-zhuan-yi-dao-nin-de-zhu-qian-bao)。

**如果您要转移 FIL 的钱包地址以 `f410` 或 `0x` 开头：**

* 您需要使用中介钱包，例如 [FilSnap 钱包](../../qian-bao/ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao.md)、[Burner钱包](../../qian-bao/ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao.md)或 [Ledger](../../qian-bao/ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao.md)。点击链结查看创建不同中介钱包的教程。
* 这是因为一些交易所，包括 MEXC，还不支持转移到 `f410` 或 `0x` 地址。请[点击此处](../zai-jiao-yi-suo-he-glif-zhi-jian-zhuan-yi-fil.md)查看详细解释。

完成后，中介钱包的地址（以 `f1` 开头）将显示在右上角的下拉菜单。复制此地址。

![步骤 1：设置中介钱包（如有需](cn-image-242.png)

## 步骤 2：将 Filecoin 从交易所发送到中介钱包

1. 前往您使用的中心化交易所（MEXC），在您的资产列表中找到 FIL。点击 “提币”。

![步骤 2：将 Filecoin](cn-image-245.png)

2. 选择网络为 “**FIL**”。
3. 输入[步骤 1 ](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-1-she-zhi-zhong-jie-qian-bao-ru-you-xu-yao)中创建的中介钱包地址。确保复制的地址正确。
4. 输入您要发送的数量。

> [!WARNING]
> 如果这是您第一次操作，建议先发送少量资金以防出现任何错误。

![步骤 2：将 Filecoin](cn-image-246.png)

5. 交易完成后，您的 Filecoin 余额将出现在中介钱包中。

## 步骤 3：检查中介钱包中的 FIL 余额

1. 交易完成后，您可以通过点击 GLIF 网站上的 “钱包” 标签，验证您的中介钱包余额。

![步骤 3：检查中介钱包中的 F](cn-image-249.png)

2. 在 “Account” 标签下检查您的 FIL 余额，并在 “Transaction” 标签下查看交易详情。

![步骤 3：检查中介钱包中的 F](cn-image-248.png)

## 步骤 4：将主钱包连接至 GLIF 和 Filecoin 主网

1. 连接您要转移 FIL 的主钱包。
2. 复制您的账户地址（以 `0x` 或 `f410` 开头的地址）。

如需详细了解如何将钱包连接到 Filecoin 主网，请[查看此教程](../../qian-bao/ru-he-jiang-qian-bao-lian-jie-dao-filecoin-zhu-wang.md)。

## 步骤 5：将 Filecoin 从中介钱包转移到您的主钱包

1. 当 Filecoin 存入中介钱包后，连接到您的中介钱包。
2. 点击 GLIF 右上角的下拉菜单，选择 “发送 FIL”。

![步骤 5：将 Filecoin](cn-image-252.png)

3. 将您在[步骤 4](jiang-fil-cong-mexc-zhuan-ru-glif.md#bu-zhou-4-jiang-zhu-qian-bao-lian-jie-zhi-glif-he-filecoin-zhu-wang) 中复制的主钱包地址粘贴到收款人栏，并指定要发送的金额。

> [!TIP]
> 请确保钱包中留有足够的 FIL 以支付 Gas 费用。

4. 然后点击 “发送”。

![步骤 5：将 Filecoin](cn-image-253.png)

稍等片刻，您的 Filecoin 余额将出现在您的主钱包中！

## 步骤 6：在GLIF 存入您的 Filecoin

现在，您可以直接从交易所将FIL存入 GLIF 并开始赚取收益！有关存款的详细操作，请查看[此教程](../../shi-yong-glif-chi-cun-ru-he-ti-qu/jiang-fil-cun-ru-glif-yi-zhuan-qu-jiang-li.md)。

最后，让您的 FIL 发挥作用并在 GLIF 上赚取收益吧！

## 结论

现在，您可以成功地将 FIL 从交易所转移到 GLIF！请务必仔细核对地址和交易细节，以确保资金安全。
