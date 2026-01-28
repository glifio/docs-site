# Asset Security

## Economic security - liquidation mechanism

GLIF economic security is based on Storage Providers (SPs) consistently staying over-collateralized. If an SP breaches its collateral limits, the SP will be liquidated, and the recovered assets paid back to the pool on behalf of SPs before losses occur. GLIF measures collateralization using the [debt-to-liquidation (DTL)](../for-storage-providers/borrowing-limits-and-dtl.md) value ratio, which measures how much an SP has borrowed compared to its liquidation value. Liquidation value is the estimated value of an SP in a [liquidation scenario](../for-storage-providers/liquidations.md), accounting for penalties and other losses.

Read more about the [economic safety rules](../for-storage-providers/liquidations.md) here.

## Code security - audits and continuous monitoring

GLIF has been building financial infrastructure for Filecoin token holders since 2019. The security of GLIF users has and always will be the top priority. Our DeFi protocol has undergone 5 security evaluations:

* A 10 person week informal review by[ Consensys Diligence](https://consensys.net/diligence/) to give early feedback and design critiques of our architecture
* A 5 person week formal review by the top DeFi auditors at Consensys Diligence [(see report here)](https://4283338172-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsLhVfzjYL8y6kgO9L4m4%2Fuploads%2FfQBqkjCAaq1sEjA3DgFF%2FConsensysDiligence.pdf?alt=media\&token=04f4aa6c-0e37-41b8-8c93-3cfab7e52847)
* A 20 person, invite only audit competition run through[ Sherlock](https://www.sherlock.xyz/), with experienced DeFi auditors [(see report here)](https://4283338172-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsLhVfzjYL8y6kgO9L4m4%2Fuploads%2FfQBqkjCAaq1sEjA3DgFF%2FConsensysDiligence.pdf?alt=media\&token=04f4aa6c-0e37-41b8-8c93-3cfab7e52847)
* Consensys Diligence V2 protocol audit
* Hexens V2 protocol audit (report will be uploaded once finished)

In audition to code audits, GLIF continuously monitors the protocol for collateralization limit breaches and suspicious or unusual activity.

## Security Bug Bounty Program

We welcome responsible disclosure of security issues. However, low severity vulnerabilities that do not involve loss of funds, compromise of user data, or exploitation of smart contracts are not eligible for bounty payouts. This includes issues such as email spoofing and website header configurations.

Our bounty program focuses on high-impact vulnerabilities. For reference, we follow scope guidelines similar to industry leaders like [GitHub](https://bounty.github.com/#scope) and [Uniswap](https://cantina.xyz/bounties/f9df94db-c7b1-434b-bb06-d1360abdd1be?overviewTab=1\&assetGroup=0).
