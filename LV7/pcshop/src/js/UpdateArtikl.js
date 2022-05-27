import axios from "axios";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function UcitajPodatke()
{
  const [artikli, setData] = useState(null);
  let { EditId } = useParams();

  var oArtikl={
     naziv: " ",
     model: " ",
     proizvodac: " ",
     cijena: " ",
     kolicina: " "
   }
  useEffect(() => 
  {
    Ucitaj();
  },[]); 
 async function Ucitaj()
 {
  axios.get("http://localhost/SkriptniJezici_Projekti/LV7/pcshop/read.php").then((response) => {
      response.data.map((e)=>{
          if(e.Id == EditId){
            oArtikl.naziv=e.Naziv;
            oArtikl.model=e.Model;
            oArtikl.proizvodac=e.Proizvodac;
            oArtikl.cijena=e.Cijena;
            oArtikl.kolicina=e.Kolicina;
          }
        });
        setData(oArtikl);
      });
 }

 if(artikli)
 {return artikli;}
 else 
 {return oArtikl;}

}



export default function EditForm()
{
 
  const artikl = UcitajPodatke(); 
  let { EditId } = useParams();
  let [inputs, setInputs] = useState(artikl); 
  const navigate = useNavigate();
 
if(!artikl) return null
  const handleSubmit = (event) => {
    event.preventDefault();
    const readUrl = "http://localhost/SkriptniJezici_Projekti/LV7/pcshop/query.php";
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "Id":EditId,
            "proizvodac":inputs.proizvodac || artikl.Proizvodac,
            "naziv": inputs.naziv || artikl.Naziv,
            "model":inputs.model || artikl.Model,
            "kolicina":inputs.kolicina || artikl.Kolicina,
            "cijena":inputs.cijena || artikl.Cijena,
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
value={inputs.proizvodac || ""}//{inputs.proizvodac || ""}
/>
</div>
<div className="form-group">
<label>Naziv</label>
<input type="text" required className="form-control" 
onChange={handleChange}
//onLoad={inputs.naziv = artikl[0].Naziv}
name="naziv"
value={inputs.naziv ||  "" }
/>
</div>
<div className="form-group">
<label >Model</label>
<input type="text" required className="form-control" 
//onLoad={inputs.model = artikl[0].Model}
onChange={handleChange} 
name="model"
value={inputs.model || "" }
/>
</div>
<div className="form-group">
<label >Kolicina</label>
<input type="number" required className="form-control"
//onLoad={inputs.kolicina = artikl[0].Kolicina} 
onChange={handleChange} 
name="kolicina"
value={inputs.kolicina || "" }
/>
</div>
<div className="form-group">
<label >cijena</label>
<input type="text" required className="form-control" 
name="Cijena"
//onLoad={inputs.cijena = artikl[0].Cijena} 
onChange={handleChange} placeholder="Unos u kn" 
value={inputs.cijena || "" }
/>
</div>
<div className="form-group">
<button type="submit" className="btn btn-primary mt-1 end-0">Ažuriraj</button>
</div>
</form>
</div>
)
}