import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Phone from "./routes/Phone";

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const { tg } = useTelegram();

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Phone />
    </div>
  );
}

export default App;
