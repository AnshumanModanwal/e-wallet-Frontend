import React from 'react'
import Navigation from '../Components/navigation'
import Profile from '../Components/profile'
import AvalCredits from '../Components/avalCredits'
import AddWallet from '../Components/addWallet'
import Transactions from '../Components/transactions'

const Dashboard = () => {
  return (
    <div>
        <Navigation head={"My Wallet"}/>
        <Profile/>
        <AvalCredits/>
        <AddWallet/>
        <Transactions/>
    </div>
  )
}

export default Dashboard