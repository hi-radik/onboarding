import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { useState } from "react";
export default function PN() {
  const [value, setValue]:any = useState();
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
    />
  );
}
