import { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp;

function App() {

  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(()=> {
    tg.ready()
  },[])
  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App
