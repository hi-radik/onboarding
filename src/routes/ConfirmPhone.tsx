import React, { useEffect } from "react";
import ConfirmInput from "../components/ConfirmPhone/input/ConfirmInput";
import { useTelegram } from "../hooks/useTelegram";
import AnimatedPage from "../components/AnimatedPage";

export default function ConfirmPhone() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.expand();
    tg.MainButton.setParams({
      text: "Подтвердить",
      color: "#FC4C01",
      // color: 'var(--tg-theme-button-color)'
    });
  }, []);

  // useEffect(() => {
  //   if (phone.length >= 10) {
  //     tg.MainButton.show();
  //   } else {
  //     tg.MainButton.hide();
  //   }
  // }, [phone]);
  return (
    <AnimatedPage>
      <ConfirmInput />
    </AnimatedPage>
  );
}
