import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useTelegram } from "../hooks/useTelegram";
import PN from "../components/Phone/PN";
import { usePhoneInputStore } from "../stores/phoneInputStore";
import ConfirmInput from "../components/ConfirmPhone/input/ConfirmInput";
import { useNavigate } from "react-router-dom";

export default function Phone() {
  //Навигация
  const navigate = useNavigate()
  const { tg, user } = useTelegram();
  const phone = usePhoneInputStore((state) => state.phone);
  const changePhone = usePhoneInputStore((state) => state.change);
  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    changePhone("+7");
    tg.ready();
    tg.expand();
    tg.MainButton.setParams({
      text: "Выслать код подтверждения",
      color: "#FC4C01",
      // color: 'var(--tg-theme-button-color)'
    });
  }, []);

  useEffect(() => {
    if (phone.length >= 10) {
      tg.MainButton.show();
      tg.MainButton.onClick(function () {
        navigate('confirm')
      });
    } else {
      tg.MainButton.hide();
    }
  }, [phone]);
  return (
    <div>
      <PN />
    </div>
  );
}
