import React from 'react'

const CoolButton = (props) => {


  return  <button className="button is-rounded my-class is-danger is-small" onClick={props.onClick}>{props.btnName}</button>

}

export default CoolButton;