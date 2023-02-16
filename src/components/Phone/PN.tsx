import "react-phone-input-2/lib/bootstrap.css";
import RPI from "react-phone-input-2";
import "./PN.css";
import "./bootstrap.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ReactPhoneInput = RPI.default ? RPI.default : RPI;
import { useCallback, useEffect, useState } from "react";
import logo from '../../assets/logo.svg'
import { useTelegram } from '../../hooks/useTelegram';
import { usePhoneInputStore } from '../../stores/phoneInputStore';

export default function PN() {
  const {tg} = useTelegram()
  const phone = usePhoneInputStore((state)=>state.phone)
  const changePhone = usePhoneInputStore((state)=>state.change)
 // Особенность, чтобы функция не создавалась повторно при рендеринге
  // Сохраняем ссылку на функцию
  const onSendData = useCallback(() =>{

    const data = {phoneNumber:phone}
    tg.sendData(JSON.stringify(data))

  },[phone])
  
  useEffect(() => {
    
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [])
  return (
    <div className="phone-page">
      <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
        <img src={logo} alt="Лого" style={{width:'250px'}}/>

      </div>
      <div className="phone-page__text-hint">Федеральное агентство по делам молодёжи</div>
      <ReactPhoneInput
        placeholder="Номер телефона"
        value={phone}
        onChange={changePhone}
        country={"ru"}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        disableDropdown
        containerStyle={{
          width: "320px",
        }}
        inputStyle={{
          width:'320px',
          height: "65px",
          borderRadius: "10px",
          background: "#2C2C2C",
          autocomplete: "none",
          outline: "none",
        }}
        buttonStyle={{
          paddingLeft: "7px",
        }}
      />
    </div>
  );
}
