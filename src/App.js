import { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/Menu';
import {DISHES} from './shared/dishes'
function App() {
  const [dishes, setDishes] = useState(DISHES);
  

  return (
    <>
    <Navbar dark color={'dark'}>
      <div className='container'>
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
     </Navbar>
     <Menu dishes={dishes} />
    </>
     
   
  );
}

export default App;
