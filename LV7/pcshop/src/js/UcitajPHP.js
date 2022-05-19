import axios from "axios";
import {useState, useEffect} from 'react';


export default function GetData()
{
    const readUrl = "http://localhost/LV7/pcshop/read.php";
    const [artikli, setData] = useState(null);
    useEffect(() => {
        axios.get(readUrl).then((response) => {
        setData(response.data);
        });
        }, []);
        if (!artikli) return null;

        const list = artikli.map((artikl) => (
            <tr>
                <td>{artikl.Id}</td>
                <td>{artikl.Proizvodac}</td>
                <td>{artikl.Naziv}</td>
                <td>{artikl.Model}</td>
                <td>{artikl.Cijena} kn</td>
                <td>{artikl.Kolicina}</td>
            </tr>
                ))
                return list;
}

