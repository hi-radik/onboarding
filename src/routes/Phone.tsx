import React from "react";
import Button from "@mui/material/Button";
import { useTelegram } from "../hooks/useTelegram";
import PN from "../components/Phone/PN";

export default function Phone() {
  const {tg, user} = useTelegram()
  return <div>
    <PN/>
  </div>
}
