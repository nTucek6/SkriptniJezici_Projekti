import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";



export default function SearchTable(event)
{
  //  alert(event.target.value);
    const readUrl = "http://localhost/skritpni/SkriptniJezici_Projekti/LV7/pcshop/read.php";
const [artikli, setData] = useState(null);
const [filter, setFilter] = useState({}); 
 // const navigate = useNavigate();
  useEffect(() => 
  {
    axios.get(readUrl).then((response) => {
      setData(response.data);
      });
  },[]);
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
        
    </tr>
        )) 

}

