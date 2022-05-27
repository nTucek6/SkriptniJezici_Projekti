import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import UcitajArtikl from "./routes/dodaj.js";
import Add from "./js/DodajArtikl";
import EditForm from "./js/UpdateArtikl";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
 <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} >
  <Route path="pocetna" element={<UcitajArtikl />} />
  <Route path="dodaj" element={<Add />} />
  <Route path="/Edit/:EditId" element={<EditForm />} />
  <Route path="/" element={<Navigate to="/pocetna" />} />
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);





//reportWebVitals();
