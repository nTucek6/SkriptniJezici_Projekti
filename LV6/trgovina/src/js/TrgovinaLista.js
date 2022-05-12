import Artikl from "../artikli.json";
import ArtiklObjekt from "./TrgovinaArtikl";

function ArtiklLista()
{
    return( 
        <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Proizvodac</th>
            <th scope="col">Naziv</th>
            <th scope="col">Model</th>
            <th scope="col">Cijena</th>
            <th scope="col">Količina</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <ArtiklObjekt />
        <tbody>
        
        </tbody>
      </table>
        
        )
   
}

export default ArtiklLista;



