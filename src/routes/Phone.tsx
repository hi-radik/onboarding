
import React from "react";
import { useState } from "react";
import Phonechik from "../components/Phonechik";

export default function Phone() {


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
      <Phonechik/>
    </div>
  );
}
