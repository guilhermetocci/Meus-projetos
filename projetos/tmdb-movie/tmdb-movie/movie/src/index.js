import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Home/Details/index";
import Home from './pages/Home/Home';
import GlobalStyle from './GlobalStyled';
import Header from './componentes/Header/header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <GlobalStyle/>
 
  <Routes>
      <Route index element={<Home />} />
      <Route path="details/:id" element={< Details/>} />
      
      
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

