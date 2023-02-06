import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import { useNavigate } from "react-router-dom";
declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const navigate = useNavigate();
  const { tg, onToggleButton, backButton } = useTelegram();
  tg.MainButton.show();
  tg.MainButton.onClick(navigate("/signin"));

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      <button onClick={backButton}>close</button>
    </div>
  );
}

export default App;
