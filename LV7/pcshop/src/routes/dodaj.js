import GetData from "../js/UcitajPHP"
//import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import SearchTable from "../js/SearchTable";
import React, { useRef } from "react";
export default function UcitajArtikl()
{
 const [input,setInput] = useState("");
// <form><SearchTable/></form>
    return (
      <>
        <div className="container mt-4">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
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
            <tbody id="tableData">
              <GetData input={input} />
            </tbody>
          </table>
          </div>
          </>
    )
}




