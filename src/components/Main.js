import { useState } from 'react';
import Menu from './Menu';
import { DISHES } from '../shared/dishes'
import Dishdetail from './Dishdetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch,Route, Redirect } from 'react-router-dom';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  
  const Homepage = ()=>{
      return(<>
      <Home />
      </>)
  }

  return (
    
    <>
      <Header />
     <Switch>
      <Route path="/home" component={Homepage} />
      <Route exact path="/menu" component={()=><Menu dishes={dishes} />} />
      <Redirect to='/home'  />
     </Switch>
      <Footer />

    </>


  );
}

export default Main;
