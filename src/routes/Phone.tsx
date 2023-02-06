import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PN = () => {
  return <PhoneInput country={"us"} />;
};

export default function Phone() {
  return <div><PN/></div>;
}
