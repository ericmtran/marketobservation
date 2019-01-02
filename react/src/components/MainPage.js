import {React, Component} from "react";
const market = 'https://api.huobi.pro/market'
const trade = 'https://api.huobi.pro/v1'
const UTC = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())        
export default class MainPage extends Component{
    constructor(pros) {
      
new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Timestamp)        
    }
    componentDidMount = () => {
        fetch(market + '/history/kline',{
            method :'GET',
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
                "AccessKeyId" : "2e11aa6c-f7add0c6-d44ae184-80ae8",
                "SignatureMethod" : "HmacSHA256",
                "SignatureVersion" : "2",
                "Timestamp" : UTC,
                "order-id" : "1234567890",
                "Signature" : "calculated value"
            }
        })
        .then(data => {
          console.log(data)
        })
      }
    Tradepairs = () => {
        
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}