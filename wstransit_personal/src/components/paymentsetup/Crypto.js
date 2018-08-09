import React, { Component } from 'react';
import axios from 'axios';
import './Crypto.css';
// import NumberFormat from 'react-number-format';

class Crypto extends Component {
    constructor() {
        super();
        this.state = { 
            cryptos:''
         }
    }

componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&e=Coinbase&extraParams=your_app_name')
    .then(res => {
        this.setState({
            cryptos: res.data
        })
    })
}


    render() { 

        // let cryotArray = this.state.cryptos ? 
        // let crypt = this.state.cryptos ? this.state.cryptos.map((element, index)=>{
               
        //     <div id="crypto-container">
        //      <span className="left">{Object.keys(element)}</span>
        //      <span className="right">{element[index]}</span>
        //      </div>    
        //  }) : 'nothing to see here'
        console.log('===========',this.state.cryptos.BTC ? this.state.cryptos.BTC.USD : '')
        return ( 

            <div>
           <div>
               <div>
                   BTC to USD: ${this.state.cryptos.BTC ? this.state.cryptos.BTC.USD : ''}
               </div>
               <div>
                   ETH to USD: ${this.state.cryptos.ETH ? this.state.cryptos.ETH.USD : ''}
               </div>
           </div>
            </div>
         );
    }
}
 
export default Crypto;