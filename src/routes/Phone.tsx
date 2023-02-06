import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React from "react";
import { useState } from "react";

export default function Phone() {
  const [state, setState] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Priva</h1>
      {/* <PhoneInput
        country={"ru"}
        value={state}
        onChange={(state) => setState(state)}
      /> */}
    </div>
  );
}
