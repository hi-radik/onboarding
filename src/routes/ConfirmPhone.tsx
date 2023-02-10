import React, { useEffect } from "react";
import ConfirmInput from "../components/ConfirmPhone/input/ConfirmInput";
import { useTelegram } from "../hooks/useTelegram";
import AnimatedPage from "../components/AnimatedPage";
import '../components/ConfirmPhone/ConfirmPage.css'
import { usePhoneCodeStore } from "../stores/smsCodeStore";
export default function ConfirmPhone() {
  const smsCode = usePhoneCodeStore((state) => state.smsCode);
  const { tg } = useTelegram();
  useEffect(() => {
    tg.expand();
    tg.MainButton.setParams({
      text: "Подтвердить",
      color: "#FC4C01",
      // color: 'var(--tg-theme-button-color)'
    });
  }, []);

  useEffect(() => {
    if (smsCode.join() == '9,9,9,9') {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [smsCode]);
  return (
    <AnimatedPage>
      <ConfirmInput />
    </AnimatedPage>
  );
}
