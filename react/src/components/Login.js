import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Modal, HelpBlock} from "react-bootstrap";
import "./Login.css";
import {Link} from 'react-router-dom';
import './main.css';
import './util.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin  from 'react-google-login';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      loginInfo: "",
      show: false,
      checkLogin : false
    };
  }
//Api 
/*
componentDidMount(){
  fetch(API, {
    method : 'GET'
  })
  .then(response  => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('err:',err))
}*/
 responseFacebook = (response) => {
  console.log(response)
 }

 responseGoogle = (response) => {
  console.log(response)
}

 navigate = (parameter) =>{
  this.props.history.push(parameter)
 }
Login = () => {
fetch('/login', {
  method: 'POST', // or 'PUT'
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email : this.state.email,
    password : this.state.password
  }), // data can be `string` or {object}!
})
.then(res => res.json())
.then(data => {
  this.setState({
    checkLogin : data.sucess
  })    
    if(this.state.checkLogin){
      localStorage.setItem('token', data.token)
      this.navigate('/home')
    }else{
      alert('Login fail')
    }
})
.catch(error => console.error('Error:', error))
// check if the user input correct form
}

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

// function to handle value change in field
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

// function handle submit onclick event

   handleSubmit(event) {
    event.preventDefault();
  }

  handleHide() {
    this.setState({show: false});
  }

// main screen
  render() {
    return (
        <div className="limiter">
        <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
        <form className="login100-form validate-form"  onSubmit={this.handleSubmit}>
            <span className="login100-form-title p-b-55">
						Login
			      </span>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <div class="wrap-input100">
            <FormControl
              autoFocus
              type="email"
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            </div>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            
            <div className="wrap-input100">
            <FormControl
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            </div>
            <Link to="/ForgetPassword" style={{textDecoration : 'none'}}><HelpBlock > Forget your password?</HelpBlock> </Link>
          </FormGroup>
          <Button
            onClick = {this.Login}
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            style={{background:'#e7e7e7'}}
          >
            Login
          </Button>
          <div class="text-center w-full p-t-42 p-b-22">
						<span className="txt1">
							or login with
						</span>
					</div>

			<Button bsClass="btn-face">
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          cssClass= "FacebookCSS"
          fields="name,email,picture"
          callback={this.responseFacebook}
          icon="fa fa-facebook-official"
          textButton="Facebook"
        />
			</Button>
			<Button bsClass="btn-google">
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          autoLoad={true}
          className="GoogleCSS"
        />
			</Button>

					<div class="text-center w-full p-t-115">
						<span class="txt1">
							Not a member?
						</span>

						<a class="txt1 bo1 hov1" href="#" style={{textDecoration : 'none'}}>
							Sign up now							
						</a>
		  </div>
        </form>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}>
          <Modal.Header closeButton>
            <Modal.Title>Login info</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.loginInfo}</Modal.Body>
        </Modal>
        </div>
        </div>
        </div>

    );
  }

}