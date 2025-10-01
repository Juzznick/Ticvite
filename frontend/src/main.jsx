import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import MainScreen from './MainScreen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainScreen/>
  </StrictMode>,
)
