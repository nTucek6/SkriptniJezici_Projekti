
import './App.css';
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
    <>
<h1 className='App'>PCSHOP</h1>
<nav className='navigacija'>
<Link className='btn' to="/pocetna">Pocetna</Link>
<Link className='btn' to="/dodaj">Artikli</Link>

</nav>
<Outlet />
</>
    
  );
}

export default App;
