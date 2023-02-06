import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Phonechik() {
  var [state, setState]:any = useState({phone:''});
  return (
    <div>
      <PhoneInput
        country={"ru"}
        value={state.phone}
        onChange={(state) => setState({phone:state})}
      />
    </div>
  );
}
