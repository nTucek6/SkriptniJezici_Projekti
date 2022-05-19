import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UcitajArtikl from "./routes/dodaj.js";
import Add from "./js/DodajArtikl"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
 <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} >
  <Route path="pocetna" element={<UcitajArtikl />} />
  <Route path="dodaj" element={<Add />} />
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);





//reportWebVitals();
