# 将 FIL 从 GLIF 转出至 MEXC

本教程将带您将 iFIL 代币从 GLIF 提现到交易所。本教程专门针对将 FIL 转移到 MEXC。请[点击此处](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/1-zai-jiao-yi-suo-he-glif-zhi-jian-zhuan-yi-fil)查看其他交易所的教程。

> [!NOTE]
> GLIF 与大多数 EVM 钱包兼容。本教程以 MetaMask 钱包为示例，其他钱包同样适用。\
> 您可以参考我们的[常见问题](/docs/7-gu-zhang-pai-cha/1-chang-jian-wen-ti/1-chang-jian-wen-ti-liu-dong-xing-ti-gong-zhe)和[钱包教程](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/1-qian-bao)以获取更多资讯。
>
> 如果您遇到任何问题，请通过 [Discord 支持工单](https://discord.gg/5qsJjsP3Re)与 GLIF 联系。

## 目录

* [步骤 1：从 GLIF 提取 FIL 到您的钱包](#bu-zhou-1-cong-glif-ti-qu-fil-dao-nin-de-qian-bao)
* [步骤 2：设置中介钱包（如有需要）](#bu-zhou-2-she-zhi-zhong-jie-qian-bao-ru-you-xu-yao)
* [步骤 3：将 FIL 从 0x/f410 地址（主钱包）发送到 f1 地址（中介钱包）](#bu-zhou-3-jiang-fil-cong-0xf410-di-zhi-zhu-qian-bao-fa-song-dao-f1-di-zhi-zhong-jie-qian-bao)
* [步骤 4：在交易所中找到您的接收地址](#bu-zhou-4-zai-jiao-yi-suo-zhong-zhao-dao-nin-de-jie-shou-di-zhi)
* [步骤 5：将 FIL 从您的钱包发送到交易所](#bu-zhou-5-jiang-fil-cong-nin-de-qian-bao-fa-song-dao-jiao-yi-suo)

## 步骤 1：从 GLIF 提取 FIL 到您的钱包

1. 将您存入 GLIF 并持有 iFIL 的钱包连接到 GLIF。
2. 要将您的 iFIL 从 GLIF 池中转换为 FIL，请查看[此教程](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/2-shi-yong-glif-chi-cun-ru-he-ti-qu/4-cong-glif-ti-qu-fil)。
3. 提取 FIL 后，您将在钱包中收到 FIL。点击 GLIF 左上方的“钱包”标签，您将能够在 “Account” 部分查看 FIL 和 iFIL 的余额。

![步骤 1：从 GLIF 提取](cn-image-229.png)

## 步骤 2：设置中介钱包（如有需要）

**如果您要转移 FIL 的钱包地址以 `f1` 开头：**

* 您可以直接跳到步骤 4 和步骤 5。

**如果您要转移 FIL 的钱包地址以 `f410` 或 `0x` 开头：**

* 您需要使用中介钱包，例如 [FilSnap 钱包](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/1-qian-bao/4-ru-he-li-yong-filsnap-qian-bao-zuo-wei-zhong-jie-qian-bao)、[Burner钱包](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/1-qian-bao/3-ru-he-li-yong-burner-qian-bao-zuo-wei-zhong-jie-qian-bao)或 [Ledger](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/1-qian-bao/2-ru-he-li-yong-ledger-qian-bao-zuo-wei-zhong-jie-qian-bao)。点击链结查看创建不同中介钱包的教程。
* 这是因为一些交易所，包括 MEXC，还不支持转移到 `f410` 或 `0x` 地址。请[点击此处](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/1-zai-jiao-yi-suo-he-glif-zhi-jian-zhuan-yi-fil)查看详细解释。

完成后，中介钱包的地址（以 `f1` 开头）将显示在右上角的下拉菜单。复制此地址。

![步骤 2：设置中介钱包（如有需](cn-image-242.png)

## 步骤 3：将 FIL 从 0x/f410 地址（主钱包）发送到 f1 地址（中介钱包）

1. 连接到您的主钱包，即您刚刚从GLIF提取 FIL 的钱包。
2. 在 GLIF 网站的右上角，点击 “**发送 / 转发 FIL**”。

> [!WARNING]
> 此步骤请勿使用 MetaMask 浏览器插件发送 FIL。否则，您的 MetaMask 可能会连接到以太坊主网而不是 Filecoin 主网。

![MetaMask prompt](cn-image-256.png)

3. 在 “**转发 FIL**” 页面，将您在[步骤 2](#bu-zhou-2-she-zhi-zhong-jie-qian-bao-ru-you-xu-yao) 中创建的中介钱包的 f1 地址粘贴到收款人。
4. 输入您希望转移的 FIL 数量（先发送少量测试金额）。
5. 点击 “**发送**”。

![步骤 3：将 FIL 从](cn-image-260.png)

> [!TIP]
> 请确保您的钱包中留有足够的 FIL 用于支付 Gas 费用；通常 0.001 FIL 就足够了。

6. 在您的主钱包中点击 “确认”。
7. 交易完成后，您可以在 GLIF 的 “**钱包**” 标签中查看中介钱包的余额。

## 步骤 4：在交易所中找到您的接收地址

1. 前往您使用的中心化交易所（MEXC），在您的资产列表中找到 FIL。点击 “**充值**”。

![步骤 4：在交易所中找到您的接](cn-image-240.png)

2. 复制交易所提供的 `f1` 地址。

![步骤 4：在交易所中找到您的接](cn-image-261.png)

> [!CAUTION]
> 警告：在向交易所转移大量资金之前，请先发送少量 FIL 作为测试交易。

## 步骤 5：将 FIL 从您的钱包发送到交易所

1. 连接到中介钱包或您的主钱包，其地址以 `f1` 开头。
2. 在 GLIF 网站的右上角，点击 “发送 FIL”。

![步骤 5：将 FIL 从您的钱](cn-image-262.png)

3. 将您在[步骤 4](#bu-zhou-4-zai-jiao-yi-suo-zhong-zhao-dao-nin-de-jie-shou-di-zhi) 中复制的交易所地址粘贴到收件人字段中。
4. 输入您希望转移的 FIL 数量。
5. 点击 “**发送**” 并在您的钱包中确认交易。

![步骤 5：将 FIL 从您的钱](cn-image-263.png)

6. 交易完成后，您可以在交易所查看余额。
> [!WARNING]
> 由于需要较多的区块确认，交易所可能需要约一小时来确认您的转账。如果交易超过一天仍未到账，请尝试联系交易所客服。

## 结论

现在，您成功地将 FIL 从 GLIF 提现至交易所！请务必仔细核对地址和交易细节，以确保资金安全。
