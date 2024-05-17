import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { loggedInMock } from '@/constants'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInMock?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1284}
          />
        </header>
        recent transactions
      </div>
      <RightSidebar user={loggedInMock} transactions={[]} banks={[{}, {}]} />
    </section>
  )
}
export default Home
