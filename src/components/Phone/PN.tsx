import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
export default function PN() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue]:any = useState();
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
}
