import axios from "axios";
import {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";


export default function GetData()
{
    
     const readUrl = "http://localhost/skritpni/SkriptniJezici_Projekti/LV7/pcshop/read.php";
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
        if (!artikli) return null;
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
            </tr>
                ))
                return list;

    function DeleteConfirm(pars)
{
    if(window.confirm("Are you sure?"))
    { 
    const readUrl = "http://localhost/skritpni/SkriptniJezici_Projekti/LV7/pcshop/query.php";
    axios({
      method: "post",url: readUrl,data: {"Id":pars,"queryType":"Obrisi"},headers: { "Content-Type": "multipart/form-data" },})
      .then(function (response) {console.log(response);})
      .catch(function (response) {console.log(response);});
      setData([]);
      UcitajPodatke();
    }
     
}


}




