//import axios from "axios";
//import {useState, useEffect} from 'react';
import GetData from "../js/UcitajPHP"
//import Add from "../js/DodajArtikl";
function UcitajArtikl()
{
    return (
        <div className="container ">
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Proizvodac</th>
                <th scope="col">Naziv</th>
                <th scope="col">Model</th>
                <th scope="col">Cijena</th>
                <th scope="col">Količina</th>
              </tr>
            </thead>
            <tbody>
            <GetData />
            </tbody>
          </table>
          </div>
    )
}
export default UcitajArtikl;