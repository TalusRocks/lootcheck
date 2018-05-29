import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin'

//test looks for a 'bare, unconnected component', so it is exported directly here
export class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin()
    }

    computeBitcoin() {
        const { bitcoin } = this.props 

        if (Object.keys(bitcoin).length === 0) return ''

        return (this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)).toFixed(2)
    }
    
    render() {
        return (
            <h3 className="bitcoin">Bitcoin: <span className={this.computeBitcoin() < 0 ? 'red' : this.computeBitcoin() > 0 ? 'green' : 'black'}>{this.computeBitcoin()}</span></h3>
        )
    }
}

export default connect(state => state, { fetchBitcoin })(Loot)

