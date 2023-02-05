import React from "react";
import MainButton from "../Buttons/MainButton/MainButton";
import './Header.css'
import { useTelegram } from '../../hooks/useTelegram';

export default function Header() {
  const {onClose, user} = useTelegram()
  return (
    <div className={"header"}>
      <MainButton onClick={onClose}>Закрыть</MainButton>
      <span className="username">{`Привет, ${user?.username}!`}</span>
    </div>
  );
}
