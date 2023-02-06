import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

declare global {
  interface Window {
    Telegram: any;
  }
};

function App() {
  
  const { tg } = useTelegram();

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">
    <h1>Прива!</h1>
  </div>;
}

export default App;
