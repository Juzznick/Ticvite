import './index.css'
import "tailwindcss";

import { BrowserRouter, Routes, Route } from 'react-router';
import ReactDOM from "react-dom/client";

import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainScreen/>}></Route>
      <Route path='login' element={<LoginScreen/>}></Route>
    </Routes>
  </BrowserRouter>
);