import React from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            type="email"
            label="email"
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="button-container">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={() => {}} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
