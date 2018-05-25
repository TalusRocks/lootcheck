import React, { Component } from 'react'
import Wallet from './Wallet'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>LOOT CHECK</h1>
                <Wallet/>
             </div>
        )
    }
}

export default App