import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
      {/* <PhoneInput
        country={"ru"}
        value={state}
        onChange={(state) => setState(state)}
      /> */}
      <PhoneInput country="us" regions={["north-america", "carribean"]} />
      <h1>Priva</h1>
    </div>
  );
}
