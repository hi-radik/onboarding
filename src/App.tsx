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
  const { tg } = useTelegram();
  const phone = usePhoneInputStore((state)=>state.phone)
  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.MainButton.setParams(
      {
        text:'Подтвердить',
        color:'#FC4C01'

      }
  );

  }, []);

  useEffect(()=>{
    if(phone.length>=10){
      tg.MainButton.show()
    } else{
      tg.MainButton.hide()
    }
  }, [phone])

  return (
    <div className="App">
      <Phone/>
    </div>
  );
}

export default App;
