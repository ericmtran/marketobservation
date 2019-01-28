import React,{Component} from 'react'
export default class Main extends Component {
constructor(props) {
    this.state = {
        check : false
    }
}
GetKey = () => {
    fetch('http://localhost:8000/api/key'),{
        method : 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email : this.state.email,
            password : this.state.password
        })
    }
    .then(res => res.json())
    .then(data => {

    })
}
ListAllCryptocurrencies = () => {
    fetch('/v1/cryptocurrency/listings/latest',{
        method : 'GET',
        headers: {
            'X-CMC_SANDBOX_API_KEY': '88ca75ef-46da-46a7-8f37-6d1378d3c5ce'
        }
    })
    .then(res => res.json())
    .then(data => {

    })
}
    render () {
        return (
            <div>
            
            </div>
        )
    }
}