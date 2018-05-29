import React from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

const App = () => {
    return (
        <div className="wrapper">
            <h1>LOOT CHECK</h1>
            <Loot/>
            <Wallet/>
            <p className="powered-by">Powered by <a href="https://www.coindesk.com/api/">Coindesk</a></p>
        </div>
    )
}

export default App