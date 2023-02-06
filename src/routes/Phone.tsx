import React from "react";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import { useState } from "react";


export default function Phone() {
  const [state, setState] = useState("");
  const Ph = (
    <PhoneInput
      country={"ru"}
      value={state}
      onChange={(state) => setState(state)}
    />
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {Ph}
      {/* <input type="text" /> */}
    </div>
  );
}
