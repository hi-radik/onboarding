import "./ConfirmInput.css";
import { useEffect, useState } from "react";
const ConfirmInput = () => {
  //Гдето-тут состояние для хранения кода
  useEffect(() => {
    const fields: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".field");

    console.log(fields);

    function handleInputField({ target }: any) {
      console.log("Началось");
      const value = target.value.slice(0, 1);
      console.log(value);
      target.value = value;

      const step = value ? 1 : -1;
      const fieldIndex = [...fields].findIndex((field) => field === target);
      const focusToIndex = fieldIndex + step;

      if (focusToIndex < 0 || focusToIndex >= fields.length) return;
      fields[focusToIndex].focus();
    }
    fields.forEach((field) => {
      field.addEventListener("input", handleInputField);
      console.log("Поставил!");
    });
  });

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

            />
          </label>
          <label className="box">
            <input className="field" type="text" placeholder="•" inputMode="numeric" pattern="[0-9]"/>
          </label>
          <label className="box">
            <input className="field" type="text" placeholder="•" inputMode="numeric" pattern="[0-9]"/>
          </label>
          <label className="box">
            <input className="field" type="text" placeholder="•" inputMode="numeric" pattern="[0-9]"/>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ConfirmInput;
