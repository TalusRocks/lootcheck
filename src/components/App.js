import React from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

const App = () => {
    return (
        <div className="wrapper">
            <h1>LOOT CHECK</h1>
            <Loot/>
            <Wallet/>
            </div>
    )
}

export default App