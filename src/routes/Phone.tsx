import React from "react";
import Button from "@mui/material/Button";
import { useTelegram } from "../hooks/useTelegram";
import CountrySelect from "../components/Phone/CountrySelect";
import PN from "../components/Phone/PN";

export default function Phone() {
  const {tg, user} = useTelegram()
  return <div style={{display:'flex', justifyContent:'space-around',flexDirection:'column',width:'100%',height:'100vh',alignItems:'center'}}>
    {/* {user.username != undefined ? <h1>Привет, {user?.username}</h1>:
    <h1>Привет!</h1>} */}
    <CountrySelect/>
    <PN/>
  </div>
}
