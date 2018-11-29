import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Modal, HelpBlock} from "react-bootstrap";
import "./Login.css";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import './main.css';
import './util.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      loginInfo: "",
      show: false
    };
  }

// check if the user input correct form
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
        <div className="limiter" data-component="Login">
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
            <Link to="/ForgetPassword"><HelpBlock > Forget your password?</HelpBlock> </Link>
          </FormGroup>
          <Button
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

			<Button href="#" bsClass="btn-face m-b-10">
				<i class="fa fa-facebook-official"></i>
                <Link to="/">Facebook</Link>
			</Button>

					<Button href="#" bsClass="btn-google m-b-10">
						<i class="fa fa-google" alt="GOOGLE">
                        <Link to="/"> Google</Link></i>
					</Button>

					<div class="text-center w-full p-t-115">
						<span class="txt1">
							Not a member?
						</span>

						<a class="txt1 bo1 hov1" href="#">
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