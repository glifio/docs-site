# 在交易所和 GLIF 之间转移 FIL

如果您的 FIL 代币目前存放在交易所，并且希望存入 GLIF 赚取收益，或者您想要从 GLIF 提取到交易所，那么本教程将帮助您简化流程。

> [!WARNING]
> **警告**：在向交易所转移大量资金之前，请先发送少量FIL 作为测试交易。

## Filecoin 地址类型

Filecoin 钱包有五种地址类型：f0、f1、f2、f3 和 f410（或 0x）。\
f410 地址是指地址在 “f” 后的前三个数字是 “410”，而 0x 地址是指地址前两个字符是 `0x`。

### f410 or 0x 地址

要在 FVM 上使用不同应用，您可能需要把 FIL放在 `f410` 或 `0x` 类型的地址中。任何 `f410` 钱包地址也有一个对应的 `0x` 以太坊格式的地址，因此您可以将任意 `f410` 地址转换为 `0x` 地址，反之亦然。请参阅[此教程](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/1-qian-bao/1-ru-he-zhao-dao-dui-ying-de-0xf410-qian-bao-di-zhi)，了解如何在 `0x` 和 `f410` 钱包地址之间进行转换。

### f1 address

`f1` 钱包地址是由 secp256k 公钥生成。`f1` 地址被大多数交易所广泛认可。然而，一些中心化交易所只识别 `f1` 地址，并且可能还不支持从 `f410` 或 `0x` 类型地址直接接收 Filecoin，因为某些交易所并不认为这类地址是有效的 Filecoin 目的地。

> [!NOTE]
> 如需确认您的交易所是否支持从 `f410` 或 `0x` 类型地址向交易所转入/转出 Filecoin，请在[此处](https://filecointldr.io/how-to-buy-filecoin)查看最新资讯。

## 操作教程

在进行钱包与交易所之间的任何交易之前，请先确认您的钱包是否支持您所使用的地址类型。您可以查看针对不同交易所的操作教程，了解如何进行对应的交易操作：

### 币安:

[将 FIL 从币安转入 GLIF](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/2-bi-an/1-jiang-fil-cong-bi-an-zhuan-ru-glif)

[将 FIL 从 GLIF 转出至币安](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/2-bi-an/2-jiang-fil-cong-glif-zhuan-chu-zhi-bi-an)

### MEXC:

[将 FIL 从MEXC转入 GLIF](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/3-mexc/1-jiang-fil-cong-mexc-zhuan-ru-glif)

[将 FIL 从 GLIF 转出至MEXC](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/jiang-fil-zhuan-ru-huo-zhuan-chu-jiao-yi-suo/3-mexc/2-jiang-fil-cong-glif-zhuan-chu-zhi-mexc)

> [!WARNING]
> **警告**： 某些交易所（如 Bybit、MEXC、Binance US 等）目前还不支持从 0x 格式的 Filecoin 地址进行转账。在向交易所转入任何资金之前，请先发送少量FIL 作为测试交易。

## 结论

现在，您可以直接从交易所将FIL存入 GLIF 并开始赚取收益！有关存款的详细操作，请查看[此教程](/docs/7-gu-zhang-pai-cha/2-cao-zuo-jiao-cheng/1-cao-zuo-jiao-cheng-liu-dong-xing-ti-gong-zhe/2-shi-yong-glif-chi-cun-ru-he-ti-qu/1-jiang-fil-cun-ru-glif-yi-zhuan-qu-jiang-li)。

最后，让您的 FIL 发挥作用并在 GLIF 上赚取收益吧！
