import { useState } from 'react';
import Menu from './Menu';
import { Navbar, NavbarBrand} from 'reactstrap'
import {DISHES} from '../shared/dishes'
import Dishdetail from './Dishdetail';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  
  function onDishSelect(dishID){
    setSelectedDish(dishID);
  };

  

  return (
    <>
     <Navbar dark color={'dark'}>
      <div className='container'>
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
     </Navbar>
     <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)} />
     
      <Dishdetail dish={dishes.filter((dish)=> dish.id === selectedDish)[0]} />

      
    </>
     
   
  );
}

export default Main;
