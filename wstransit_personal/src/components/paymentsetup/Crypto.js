import React, { Component } from 'react';
import axios from 'axios';
import './Crypto.css';
var NumberFormat = require('react-number-format');

class Crypto extends Component {
    constructor() {
        super();
        this.state = { 
            cyptos:[]
         }
    }

componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
    .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos})
    })
}


    render() { 
        return ( 
            <div className="App">
            {Object.keys(this.state.cyptos).map((key)=>(
               
               <div id="crypto-container">
                <span className="left">{key}</span>
                <span className="right"><NumberFormat value={this.state.cyptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeperator={true} prefix={'$'}/></span>
                </div>    
        ))}
            </div>
         );
    }
}
 
export default Crypto;