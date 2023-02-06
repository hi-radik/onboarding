import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React from "react";
import { useState } from "react";

function Phone() {
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
      <PhoneInput
        country={"ru"}
        value={state}
        onChange={(state) => setState(state)}
      />

      <h1>Priva</h1>
    </div>
  );
}

export default Phone;
