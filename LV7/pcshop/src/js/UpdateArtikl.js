import axios from "axios";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



export default function EditForm()
{
  
  let { EditId } = useParams();
  const readArtikl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/read.php";
  const [artikli, setData] = useState(null);
  let [inputs, setInputs] = useState({}); 
  const navigate = useNavigate();
  useEffect(() => 
  {
    axios.get(readArtikl).then((response) => {
      setData(response.data);
     
      });
  },[]); 

  
if(!artikli) return null
const artikl =artikli.filter(o => {return o.Id === EditId});
//console.log(inputs);
  const handleSubmit = (event) => {
    event.preventDefault();
    const readUrl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/query.php";
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "Id":EditId,
            "proizvodac":inputs.proizvodac,
            "naziv": inputs.naziv,
            "model":inputs.model,
            "kolicina":inputs.kolicina,
            "cijena":inputs.cijena,
            "queryType":"UpdateArtikl"
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });  
       
        navigate('/pocetna');
    }

const handleChange = (event) => 
  {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name);
   // console.log(event.target.value);
    setInputs(values => ({...values, [name]: value}))
    }
return(
<div className="container w-25 p-3">
<form className="form" onSubmit={handleSubmit}> 
<div className="form-group">
<label >Proizvođač</label>
<input type="text" required className="form-control" 
//onLoad={inputs.proizvodac = this.target.value}
onChange={handleChange}
name="proizvodac"
value={inputs.proizvodac || (inputs.proizvodac=artikl[0].Proizvodac) }//{inputs.proizvodac || ""}
/>
</div>
<div className="form-group">
<label>Naziv</label>
<input type="text" required className="form-control" 
onChange={handleChange}
//onLoad={inputs.naziv = artikl[0].Naziv}
name="naziv"
value={inputs.naziv ||  (inputs.naziv=artikl[0].Naziv) }
/>
</div>
<div className="form-group">
<label >Model</label>
<input type="text" required className="form-control" 
//onLoad={inputs.model = artikl[0].Model}
onChange={handleChange} 
name="model"
value={inputs.model || (inputs.model = artikl[0].Model) }
/>
</div>
<div className="form-group">
<label >Kolicina</label>
<input type="number" required className="form-control"
//onLoad={inputs.kolicina = artikl[0].Kolicina} 
onChange={handleChange} 
name="kolicina"
value={inputs.kolicina || (inputs.kolicina=artikl[0].Kolicina) }
/>
</div>
<div className="form-group">
<label >Cijena</label>
<input type="text" required className="form-control" 
name="cijena"
//onLoad={inputs.cijena = artikl[0].Cijena} 
onChange={handleChange} placeholder="Unos u kn" 
value={inputs.cijena || (inputs.cijena=artikl[0].Cijena) }
/>
</div>
<div className="form-group">
<button type="submit" className="btn btn-primary mt-1 end-0">Ažuriraj</button>
</div>
</form>
</div>
)
}