import React, { useCallback, useEffect } from "react";
import Button from "@mui/material/Button";
import { useTelegram } from "../hooks/useTelegram";
import PN from "../components/Phone/PN";
import { usePhoneInputStore } from "../stores/phoneInputStore";
import ConfirmInput from "../components/ConfirmPhone/input/ConfirmInput";
import { useNavigate } from "react-router-dom";
import { fetchPhone } from '../service/PhoneService';
export default function Phone() {
  //Навигация
  const navigate = useNavigate();
  const { tg, user } = useTelegram();
  const phone = usePhoneInputStore((state) => state.phone);
  const changePhone = usePhoneInputStore((state) => state.change);

  
  //Приложение полностью проанализировалось и его можно отрисовывать
  useEffect(() => {
    tg.ready();
    tg.expand();
    // tg.MainButton.onClick(function () {

    //   // fetchPhone(phone)
    //   // navigate("confirm");
    // });
    tg.MainButton.setParams({
      text: "Выслать код подтверждения",
      color: "#FC4C01",
      // color: 'var(--tg-theme-button-color)'
    });
    tg.MainButton.show()
    // changePhone("+7");
  }, []);

  useEffect(() => {
    tg.ready();
    if (phone.length >= 11) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [phone]);
  return <>
  <PN />
  <h1>{phone}</h1>
  </>;
}

