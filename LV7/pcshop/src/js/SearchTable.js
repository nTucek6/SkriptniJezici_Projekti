import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import React, { useRef } from "react";

export default function SearchTable(event)
{
 // const myContainer = useRef(null); 
const readUrl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/read.php";
const [artikli, setData] = useState(null);
//const [filter, setFilter] = useState({}); 
 useEffect(() => {
  GetData();
  }, []);
  const el = document.getElementById('tableData');

  function GetData()
  {
    axios.get(readUrl).then((response) => {
      setData(response.data);
      });
  }

 

  //console.log(myref.current.value);

  if (!artikli) return null;

  
 
  
  

  const handleChange = (event) => 
  {
    //console.log(myContainer.current.value);
   // alert(event.target.value);
   const artikl =artikli.filter(o => {return o.Proizvodac.toLowerCase().includes( event.target.value.toLowerCase() ) || o.Naziv.toLowerCase().includes(event.target.value)|| o.Model.toLowerCase().includes(event.target.value)});
   console.log(artikl);

   el.innerHTML = "";
   el.innerHTML = artikl;

   }
  /*
    const list = artikli.map((artikl) => (
    <tr key={artikl.Id.toString()}>
        <td>{artikl.Id}</td>
        <td>{artikl.Proizvodac}</td>
        <td>{artikl.Naziv}</td>
        <td>{artikl.Model}</td>
        <td>{artikl.Cijena} kn</td>
        <td>{artikl.Kolicina}</td>
        <td><Link to={`/Edit/${artikl.Id}`}><button className="btn btn-primary">Ažuriraj</button></Link></td>
        <td><button className="btn btn-primary" onClick={() => DeleteConfirm(artikl.Id)}>Obriši</button></td>  
    </tr> ))
         */
      

  return(<input type="text"  onChange={handleChange}/>//ref={myContainer} 
  )
}

