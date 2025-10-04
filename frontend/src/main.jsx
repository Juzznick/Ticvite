import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginScreen/>
    {/* <MainScreen/> */}
  </StrictMode>,
)
