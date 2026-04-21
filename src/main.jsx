import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculadora from './components/Calculadora'
import Boton from './components/Boton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora />
</StrictMode>,
)
