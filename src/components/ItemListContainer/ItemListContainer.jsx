import React from 'react'
import Button from '../Button'

export const ItemListContainer = () => {

    const saludar = () => console.log("boton naranja pulsado")
    const despedir = () => console.log("boton azul pulsado")

  return (
    <div>
        <Button text="saludar" fn={saludar} color="naranja"/>

        <Button text="saludar" fn={despedir} color="azul"/>
        
    </div>
  )
}

