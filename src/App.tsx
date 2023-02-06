import { useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
declare global {
  interface Window {
      Telegram:any;
  }
}


function App() {
  const {tg, onToggleButton, backButton} = useTelegram()
  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(()=> {
    tg.ready()
  },[])
 
  return (
    <div className="App">
     <Header/>
     <button onClick={onToggleButton}>toggle</button>
     <button onClick={backButton}>close</button>
    </div>
  )
}

export default App
