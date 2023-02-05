import React from 'react'
import './MainButton.css'
export default function MainButton(props:any) {
  return (
    <button {...props} className={'button ' + props.className}/>
  )
}
