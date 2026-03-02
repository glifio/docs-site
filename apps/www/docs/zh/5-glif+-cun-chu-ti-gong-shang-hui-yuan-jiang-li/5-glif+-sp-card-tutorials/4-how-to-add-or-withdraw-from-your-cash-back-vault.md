# 如何在返现金库中添加或提取资金

本教程介绍如何在您的 GLIF+ SP 会员卡的返现金库中添加或提取 $GLF 资金。返现金库存储用于支付部分利息并以溢价获得 FIL 的 $GLF 代币。

有关管理您的 GLIF+ SP 会员卡的其他教程，请参阅[此页面](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/glif-sp-card-tutorials)。

> [!NOTE]
> 您也可以使用 GLIF 命令行工具（CLI）在 GLIF+ 返现金库中添加或提取资金。请升级至[最新版本](https://github.com/glifio/glif/releases)。您可以在[此页面](https://github.com/glifio/glif?tab=readme-ov-file#glif-loyalty-cards)找到 GLIF CLI 上 GLIF+ 相关命令的说明。


本教程将引导您完成以下步骤：

1. [向返现金库添加资金](#xiang-fan-xian-jin-ku-tian-jia-zi-jin)
2. [从返现金库提取资金](#cong-fan-xian-jin-ku-ti-qu-zi-jin)

***
# 操作步骤

## 向返现金库添加资金

1. 前往您的 Agents 页面，找到您的会员卡的 **'概要'** 部分。

2. 打开 **'返现余额'** 部分并点击箭头图标。

3. 点击向下箭头以添加资金。

![Cash back balance section with arrow icon](add-cashback-image-1.png)

4. 选择存款来源。您可以从**会员卡持有者（多签钱包）**或您已连接的**单签钱包**进行存款。


5. 输入您想添加到返现金库的金额。

6. 点击 **'批准 GLF 转账'** 并在钱包中确认批准请求。

> [!WARNING]
> 如果资金来源是您的单签钱包而非会员卡持有者（多签钱包），则不会生成多签钱包提案。GLF 余额将直接发送至会员卡。

![Approve GLF Transfer button](add-cashback-image-2.png)

7. 等待交易处理完成。然后再次点击 **'发送'** 以执行实际的资金转账。在钱包中确认。

![Send button to execute the fund transfer](add-cashback-image-3.png)

8. 找到 **提案** 标签页。您将看到两个提案：**'Approve'** 和 **'FundGlfVault'**。

![Proposals tab showing Approve and FundGlfVault proposals](add-cashback-image-4.png)

> [!WARNING]
> 请先批准 **'Approve'** 提案，再批准 **'FundGlfVault'** 提案，否则可能发生错误。

9. 在每个签名者账户中批准两个提案，并在钱包中确认。等待 1 至 2 分钟让链上流程完成。

10. 处理完成后，返现余额将更新，可用金额将增加。

![Approving both proposals](add-cashback-image-5.png)

***

## 从返现金库提取资金

1. 前往您的 Agents 页面，找到您的会员卡的 **'概要'** 部分。

2. 打开 **'返现余额'** 部分并点击向上箭头以提取资金。

![Updated cash back balance after adding funds](add-cashback-image-6.png)

3. 选择提取资金的接收方。

4. 输入您想从返现金库中取出的金额。

5. 点击 **'发送'**。

![Withdraw funds form with Send button](add-cashback-image-7.png)

6. 在钱包中确认。等待 1 至 2 分钟让链上流程完成。

7. 在每个签名者账户中批准 **'WithdrawGlfVault'** 提案，并在钱包中确认。

![WithdrawGlfVault proposal in Proposals tab](add-cashback-image-8.png)

8. 处理完成后，返现余额将更新，可用金额将减少。

![Updated cash back balance after withdrawal](add-cashback-image-9.png)

***

## 结语

您的返现金库已成功更新。现在您可以灵活管理 $GLF 余额，并优化在使用 GLIF+ SP 会员卡支付利息时所能获得的 FIL 返现数额。

您可以查看其他[教程](/glif-cun-chu-ti-gong-shang-hui-yuan-jiang-li/glif-sp-card-tutorials)，了解更多如何管理您的 GLIF+ SP 会员卡。
