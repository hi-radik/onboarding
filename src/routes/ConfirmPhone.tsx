import React, { useEffect } from "react";
import ConfirmInput from "../components/ConfirmPhone/input/ConfirmInput";
import { useTelegram } from "../hooks/useTelegram";
import AnimatedPage from "../components/AnimatedPage";
import '../components/ConfirmPhone/ConfirmPage.css'
import { usePhoneCodeStore } from "../stores/smsCodeStore";
import { useNavigate } from 'react-router-dom';
export default function ConfirmPhone() {
  const { tg } = useTelegram();
  const navigate = useNavigate()
  useEffect(() => {
    tg.expand();
    tg.MainButton.setParams({
      text: "Подтвердить",
      color: "#FC4C01",
      // color: 'var(--tg-theme-button-color)'
    });
    tg.MainButton.show();
  }, []);

  // useEffect(() => {
  //   if (smsCode.join() == '9,9,9,9') {
  //     navigate('/')
  //   } else {
  //     tg.showAlert('Неверный код подтверждения!')
  //   }
  // }, [smsCode]);
  return (
    <AnimatedPage>
      <ConfirmInput />
    </AnimatedPage>
  );
}
