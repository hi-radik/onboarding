import { useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header';
declare global {
  interface Window {
      Telegram:any;
  }
}
const tg = window.Telegram.WebApp;

function App() {

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(()=> {
    tg.ready()
  },[])
 
  return (
    <div className="App">
     <Header/>
    </div>
  )
}

export default App
