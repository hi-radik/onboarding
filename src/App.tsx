import { useEffect, useState } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Phone from "./routes/Phone";
import { usePhoneInputStore } from "./stores/phoneInputStore";


declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  

  return (
    <div className="App">
    </div>
  );
}

export default App;
