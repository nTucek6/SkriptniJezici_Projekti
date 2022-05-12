import Artikl from "../artikli.json";


function ArtiklObjekt()
{
   const list = Artikl.map((artikl) => (
        <tr>
            <td>{artikl.Id}</td>
            <td>{artikl.Proizvodac}</td>
            <td>{artikl.Naziv}</td>
            <td>{artikl.Model}</td>
            <td>{artikl.Cijena} kn</td>
            <td>{artikl.Kolicina}</td>
            { (artikl.Kolicina > 0) ? <DodajUKosaru Kolicina={artikl.Kolicina}/> : <PosaljiUpit/> }
        </tr>
            ))

            return list;

}


function DodajUKosaru(props)
{
        return <td><button onClick={()=>alert("Količina: "+props.Kolicina)}>Dodaj u košaru</button></td>   
}

function PosaljiUpit()
{ 
        return <td><button onClick={()=>alert("artikl nije dostupan")}>Pošalji upit</button></td>
}

function Vrati(props)
{

}


export default ArtiklObjekt;