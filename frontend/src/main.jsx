import './index.css'
import "tailwindcss";

import { BrowserRouter, Routes, Route } from 'react-router';
import ReactDOM from "react-dom/client";

import LandingScreen from './LandingScreen';
import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';





const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingScreen/>} ></Route>
      <Route path='dash' element={<MainScreen/>}></Route>
      <Route path='login' element={<LoginScreen/>}></Route>
      <Route path='signup' element={<SignupScreen/>} ></Route>
    </Routes>
  </BrowserRouter>
);