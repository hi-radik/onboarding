import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React from "react";
import { useState } from "react";
import { Component } from "react";
type MyState = {
  phone: string; // like this
};
class Phone extends Component {
  state: MyState = {
    // optional second annotation for better type inference
    phone: '',
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PhoneInput
          country={"us"}
          value={this.state.phone}
          onChange={(phone) => this.setState({ phone })}
        />
      </div>
    );
  }
}

export default Phone;
