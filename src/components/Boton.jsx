import { useState } from 'react'
import './boton.css'
 
const Boton = ({texto,clase,handleClick}) => {

    const [data, setData] = useState({operacion:'', resultado:''})

    const escritura = (event) =>{
        console.log(event);
    }
    

  return (
    <button className={clase}onClick={handleClick} >{texto}</button>
  )
}

export default Boton

