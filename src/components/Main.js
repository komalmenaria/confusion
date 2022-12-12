import { useState } from 'react';
import Menu from './Menu';
import { DISHES } from '../shared/dishes'
import Dishdetail from './Dishdetail';
import Header from './Header';
import Footer from './Footer';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  function onDishSelect(dishID) {
    setSelectedDish(dishID);
  };



  return (
    <>
      <Header />
      <Menu dishes={dishes} onClick={(dishID) => onDishSelect(dishID)} />
      <Dishdetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer />

    </>


  );
}

export default Main;
