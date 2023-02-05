import React from 'react'

export default function MainButton(props:any) {
  return (
    <button {...props} className={'button ' + props.className}/>
  )
}
