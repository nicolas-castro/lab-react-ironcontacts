import React from 'react'

const CoolButton = (props) => {


  return  <button className={props.nameOfClass} onClick={props.onClick}>{props.btnName}</button>

}

export default CoolButton;