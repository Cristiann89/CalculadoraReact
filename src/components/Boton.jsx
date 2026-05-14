import { useState } from 'react'
import './boton.css'

 
const Boton = ({texto,clase,handleClick}) => {
  //gfg const boton = params

    return (
    <button className={clase}onClick={handleClick} >{texto}</button>
  )
}

export default Boton

