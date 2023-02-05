import React from "react";
import MainButton from "../Buttons/MainButton/MainButton";
const tg = window.Telegram.WebApp;
export default function Header() {
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={"header"}>
      <MainButton onClick={onClose}>Закрыть</MainButton>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}
