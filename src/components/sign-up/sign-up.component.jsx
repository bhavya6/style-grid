import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = () => {
    console.log("");
  }
  render() {
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="ConfirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}


export default SignUp;