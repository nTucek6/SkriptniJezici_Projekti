import GetData from "../js/UcitajPHP"
//import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
export default function UcitajArtikl()
{
  let list = <GetData />;
  //console.log(list);
  const handleChange = (event) => 
  {
  //list = <GetData />;


  } 

    return (
        <div className="container mt-4">
        <input type="text" onChange={handleChange}/>
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Proizvodac</th>
                <th scope="col">Naziv</th>
                <th scope="col">Model</th>
                <th scope="col">Cijena</th>
                <th scope="col">Količina</th>
                <th scope="col">Uredi</th>
                <th scope="col">Obriši</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </table>
          </div>
    )
}


export function TextBoxValue(value)
{

}

