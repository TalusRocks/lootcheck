import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
    
    constructor() {
        super()

        this.state = { balance: undefined }
    }

    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) })
    }

    deposit = () => {
        this.props.deposit(this.state.balance)

        // let input = document.querySelector('.input-wallet')
        // input.value = ''
    }

    withdraw = () => {
        this.props.withdraw(this.state.balance)
    }

    render() {
        return (
            <div>
                <h3 className="balance">
                    Wallet balance: <span className={this.props.balance < 0 ? 'red' : this.props.balance > 0 ? 'green' : 'black'}>{this.props.balance}</span>
                </h3>
                <br/>
                <div className="input-btn-wrapper">
                    <input className="input-wallet"
                        onChange={this.updateBalance}/>
                    <button className="btn-deposit" onClick={this.deposit}>
                        Deposit
                    </button>
                    <button className="btn-withdraw" onClick={this.withdraw}>
                        Withdraw
                    </button>
                </div>
            </div>
        )
    }
}

export default connect( state => { return { balance: state.balance } } , { deposit, withdraw })(Wallet)