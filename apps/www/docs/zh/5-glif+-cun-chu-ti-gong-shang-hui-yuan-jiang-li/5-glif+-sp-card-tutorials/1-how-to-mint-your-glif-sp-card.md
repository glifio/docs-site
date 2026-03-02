# 如何铸造您的 GLIF+ SP 会员卡

本教程介绍如何在 GLIF 网站上使用您的 Agent 多签钱包铸造 GLIF+ 存储提供商会员卡。有关不同[等级](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/deng-ji-yu-xian-zhi)以及GLIF+ 会员卡如何使您受益，请参阅[此页面](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/cun-chu-ti-gong-shang-quan-yi)。

有关管理您的 GLIF+ SP 会员卡的其他教程，请参阅[此页面](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/glif-sp-card-tutorials)。

> [!NOTE]
> 您也可以使用 GLIF 命令行工具（CLI）在 GLIF+ 返现金库中添加或提取资金。请升级至[最新版本](https://github.com/glifio/glif/releases)。您可以在[此页面](https://github.com/glifio/glif?tab=readme-ov-file#glif-loyalty-cards)找到 GLIF CLI 上 GLIF+ 相关命令的说明。

本教程将引导您完成以下步骤：

- [步骤 1：选择您的 Agent](#bu-zhou-1-xuan-ze-nin-de-agent)
- [步骤 2：选择您的等级](#bu-zhou-2-xuan-ze-nin-de-deng-ji)
- [步骤 3：输入返现金库金额](#bu-zhou-3-shu-ru-fan-xian-jin-ku-jin-e)
- [步骤 4：铸造并激活](#bu-zhou-4-zhu-zao-bing-ji-huo)
- [步骤 5：批准第一个多签提案](#bu-zhou-5-pi-zhun-di-yi-ge-duo-qian-ti-an)
- [步骤 6：批准第二个多签提案](#bu-zhou-6-pi-zhun-di-er-ge-duo-qian-ti-an)
- [步骤 7：查看已铸造的会员卡](#bu-zhou-7-cha-kan-yi-zhu-zao-de-hui-yuan-ka)

***
#操作步骤

## 步骤 1：选择您的 Agent

1. 连接钱包并找到 GLIF 网站上您的 Agent 页面的 **'会员'** 标签页。

2. 点击 **'铸造'**。

![Loyalty tab with Mint button](mint-sp-image-1.png)

***

## 步骤 2：选择您的等级

1. Agent 地址应已自动填入。如果没有，请输入您的 **Agent 地址**以继续。

2. 从 **铜卡、银卡或金卡** 中选择您想要的等级。

2. 在此查看详情，比较杠杆率、返现溢价以及质押要求（即您必须质押多少 $GLF 代币才能激活所选等级）。
![Agent address pre-filled](mint-sp-image-2.png)

> [!NOTE]
> 更高等级提供更强大的福利，例如更高的 TWAP 兑换率和更高的借贷杠杆。例如，金卡等级的最高债务与清算比率 (DTL)为 90%。有关 TWAP 兑换率或最高DTL杠杆等术语的解释，请参阅[此页面](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/deng-ji-yu-xian-zhi)。



***

## 步骤 3：输入返现金库金额

1. 输入您想放入返现金库的 $GLF 数量。

此处显示的最大金额代表您在扣除铸造费用和质押要求后，可存入返现金库的 $GLF 数量。
![Tier selection with comparison table](mint-sp-image-3.png)

>[!NOTE]
> 返现金库中的 $GLF 可用于支付每次利息的一部分，并以溢价获得 FIL。您也可以随时向金库存入或提取 GLF。为金库充值**是可选的**，并非铸造会员卡的必要条件。


***

## 步骤 4：铸造并激活

1. 铸造一共有三项费用：
   - **铸造费用**：5000 $GLF，不可退款。
   - **质押要求**：所选等级需要质押的 $GLF 数量。
   - **返现金库充值**：您选择存入返现机制的 $GLF 数量。

2. 点击 **'铸造并激活'**。
![Tier comparison details](mint-sp-image-4.png)

3. 查看详情并点击 **'批准'**。

![Mint and Activate button with cost summary](mint-sp-image-6.png)

4. 在钱包中确认交易。等待一至两分钟让交易处理完成。

5. 批准交易成功提交并确认后，激活的紫色图标将从 **'批准'** 切换至 **'铸造'**。点击 **'铸造'** 生成另一个提案。

![Cash back vault amount entry](mint-sp-image-5.png)



***

## 步骤 5：批准第一个多签提案

1. 点击 **'铸造'** 后，等待交易完成。

2. 前往您的 Agent，打开 **'提案'** 标签页。

3. 系统将生成一个多签 **'Approve'** 提案和一个 **'MintActivateAndFund'** 提案。

![Approve then Mint button flow](mint-sp-image-7.png)



4. 连接下一个签名者的钱包。在 Agent 页面找到 **'Approve'** 提案。

5. 点击 **'批准提案'** 并在钱包中确认。

![Proposals tab showing Approve and MintActivateAndFund proposals](mint-sp-image-8.png)

6. 请每个签名者批准提案。所有签名者必须批准提案方可执行。等待一至两分钟让交易处理完成。



> [!WARNING]
> 如果您在此阶段看到错误，这是因为在 **'Approve'** 提案被所有其他签名者批准之前，**'MintActivateAndFund'** 提案无法被批准。请等待 **'Approve'** 提案完全批准后再继续。
![Approve proposal button](mint-sp-image-9.png)

***

## 步骤 6：批准第二个多签提案

1. 第一个提案批准后，返回 **'提案'** 标签页。

2. 找到 **'MintActivateAndFund'** 提案。

![Error message for premature MintActivateAndFund approval](mint-sp-image-10.png)

3. 点击 **'批准提案'** 并在钱包中确认。

![MintActivateAndFund proposal](mint-sp-image-11.png)

4. 请每个签名者批准提案。

5. 等待一至两分钟让交易处理完成。

***

## 步骤 7：查看已铸造的会员卡

1. 两个提案均批准后，返回 **'会员'** 标签页。

2. 您现在应能看到您的 GLIF+ SP 会员卡已铸造，并显示您所选的等级。

![Minted GLIF+ SP Card](mint-sp-image-12.png)

***

## 结语

您的 GLIF+ SP 会员卡已成功铸造并激活。您现在可以使用所选等级来获取更高的借贷额度、以溢价 TWAP 兑换率兑换 GLF ，换取 FIL，并通过您的 Agent 管理您的 GLIF+ 权益。

您可以查看其他[教程](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/glif-sp-card-tutorials)，了解更多如何管理您的 GLIF+ SP 会员卡。
