import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable'
import { transactionData } from '@/constants'
import React from 'react'

const TansactionHistory = () => {
  return (
    <section className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title='Transaction History'
          subtext='See your bank details and transactions.'
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">Bank of America</h2>
            <p className="text-14 text-blue-25">
              Gold Standard 0% Interest Checking
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">8915</span>
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">
              Current balance
            </p>
            <p className="text-24 text-center font-bold">$7,110.68</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable
            transactions={transactionData}
          />
        </section>
      </div>
    </section>
  )
}

export default TansactionHistory