import React, { Component } from 'react'
import Wallet from './Wallet'
import Loot from './Loot'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>LOOT CHECK</h1>
                <Loot/>
                <Wallet/>
             </div>
        )
    }
}

export default App