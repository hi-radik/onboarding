import 'react-phone-input-2/lib/material.css'
import RPI from "react-phone-input-2";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ReactPhoneInput = RPI.default ? RPI.default : RPI;

import { useState } from "react";
export default function PN() {
  const [value, setValue]:any = useState();
  return (
    <ReactPhoneInput
      placeholder="Номер телефона"
      value={value}
      onChange={setValue}
      country={'ru'}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true
      }}
    />
  );
}
