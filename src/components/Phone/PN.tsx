import "react-phone-input-2/lib/bootstrap.css";
import RPI from "react-phone-input-2";
import "./PN.css";
import "./bootstrap.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ReactPhoneInput = RPI.default ? RPI.default : RPI;

import { useState } from "react";
export default function PN() {
  const [value, setValue]: any = useState();
  return (
    <div className="phone-page">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src="/src/assets/logo.svg" alt="Лого" />
      </div>
      <ReactPhoneInput
        placeholder="Номер телефона"
        value={value}
        onChange={setValue}
        country={"ru"}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        disableDropdown
        conta
        containerStyle={{
          width: "300px",
        }}
        inputStyle={{
          height: "55px",
          borderRadius: "7px",
          background: "#2C2C2C",
          autocomplete: "none",
          outline: "none",
        }}
        buttonStyle={{
          paddingLeft: "6px",
        }}
      />
    </div>
  );
}
