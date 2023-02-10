import "./ConfirmInput.css";
import { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../../hooks/useTelegram";
import { useNavigate } from "react-router-dom";
import { usePhoneCodeStore } from "../../../stores/smsCodeStore";

const ConfirmInput = () => {
  //Гдето-тут состояние для хранения кода
  const navigate = useNavigate();
  const { tg } = useTelegram();
  useEffect(() => {
    const fields: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".field");

    function handleInputField({ target }: any) {
      const value = target.value.slice(0, 1);

      target.value = value;

      const step = value ? 1 : -1;
      const fieldIndex = [...fields].findIndex((field) => field === target);
      const focusToIndex = fieldIndex + step;

      if (focusToIndex < 0 || focusToIndex >= fields.length) return;
      fields[focusToIndex].focus();
    }
    fields.forEach((field) => {
      field.addEventListener("input", handleInputField);
      console.log("Рендер?");
    });
    localStorage.removeItem("sms-code-storage");
    tg.MainButton.onClick(getValues);
  }, []);

  //Ссылки для получения значений
  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();
  const ref4: any = useRef();

  const changeSmsCode = usePhoneCodeStore((state) => state.change);
  const smsCode = usePhoneCodeStore((state) => state.smsCode);

  const getValues = () => {
    const b: any = [];
    b.push(ref1.current.value);
    b.push(ref2.current.value);
    b.push(ref3.current.value);
    b.push(ref4.current.value);

    changeSmsCode(b);
    tg.showAlert(b);
  };

  return (
    <div>
      <div className="main">
        <p className="label">Введите код из СМС</p>

        <div className="fieldset">
          <label className="box">
            <input
              className="field"
              type="tetx"
              placeholder="•"
              autoFocus={true}
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              ref={ref1}
            />
          </label>
          <label className="box">
            <input
              className="field"
              type="text"
              placeholder="•"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              ref={ref2}
            />
          </label>
          <label className="box">
            <input
              className="field"
              type="text"
              placeholder="•"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              ref={ref3}
            />
          </label>
          <label className="box">
            <input
              className="field"
              type="text"
              placeholder="•"
              inputMode="numeric"
              pattern="[0-9]"
              maxLength={1}
              ref={ref4}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default ConfirmInput;
