//import logo from './logo.svg';
//import './App.css';
import "./js/Zaglavlje.js"
import Zaglavlje from "./js/Zaglavlje.js";
import ArtiklLista from "./js/TrgovinaLista";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
<Zaglavlje />
<div className="container"><ArtiklLista /></div>
  </>
  );
  }
  export default App;