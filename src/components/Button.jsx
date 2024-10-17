import React from 'react'



const Button = ({fn, text, color}) => {

    let className = ""

    if(color === "orange"){
        className = "naranja"
    }else{
        className= "azul"
    }


  return (
    <button className={className} onClick={fn}>{text}</button>
  )
}

export default Button