import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import React, { useRef } from "react";

export default function GetData(unos)
{
    //const readUrl = "http://localhost/skritpni/SkriptniJezici_Projekti/LV7/pcshop/read.php";
    const readUrl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/read.php"
    const [artikli, setData] = useState(null);
    useEffect(() => {
        UcitajPodatke();
        }, []);
        function UcitajPodatke()
        {
            axios.get(readUrl).then((response) => {
                setData(response.data);
                });
        }



        const filterList = artikli.filter((o) =>
        {
            if(unos.input === '')
            {
                return o;
            }
            else
            {
                return o.Proizvodac.toLowerCase().includes(unos.input) || o.Naziv.toLowerCase().includes(unos.input)|| o.Model.toLowerCase().includes(unos.input);
            }
        }
        )

        const list = filterList.map((artikl) => (
            <tr key={artikl.Id.toString()}>
                <td>{artikl.Id}</td>
                <td>{artikl.Proizvodac}</td>
                <td>{artikl.Naziv}</td>
                <td>{artikl.Model}</td>
                <td>{artikl.Cijena} kn</td>
                <td>{artikl.Kolicina}</td>
                <td><Link to={`/Edit/${artikl.Id}`}><button className="btn btn-primary">Ažuriraj</button></Link></td>
                <td><button className="btn btn-primary" onClick={() => DeleteConfirm(artikl.Id)}>Obriši</button></td>
            </tr>
                ))
                return list;

    function DeleteConfirm(pars)
{
    if(window.confirm("Are you sure?"))
    { 
    const readUrl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/query.php"
    //const readUrl = "http://localhost/skritpni/SkriptniJezici_Projekti/LV7/pcshop/query.php";
    axios({
      method: "post",url: readUrl,data: {"Id":pars,"queryType":"Obrisi"},headers: { "Content-Type": "multipart/form-data" },})
      .then(function (response) {console.log(response);})
      .catch(function (response) {console.log(response);});
      setData([]);
      UcitajPodatke();
    }
     
}


}




