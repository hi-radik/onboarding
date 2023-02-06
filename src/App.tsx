import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const [state, setState] = useState('');
  const { tg } = useTelegram();

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <PhoneInput
        country={"ru"}
        value={state}
        onChange={(state) => setState(state)}
      />
    </div>
  </div>;
}

export default App;
