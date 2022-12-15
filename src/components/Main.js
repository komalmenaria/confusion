import { useState } from 'react';
import Menu from './Menu';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { PROMOTIONS } from '../shared/promotions'
import { LEADERS } from '../shared/leaders'
import Dishdetail from './Dishdetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';

import { Switch,Route, Redirect } from 'react-router-dom';

function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  const [leaders, setLeaders] = useState(LEADERS);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  
  const Homepage = ()=>{
      return(<>
      <Home dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promo) => promo.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]} />

      </>)
  }

  const DishWithId = ({match})=>{
    return(
<Dishdetail dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
comment={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    )
  }

  return (
    
    <>
      <Header />
     <Switch>
      <Route path="/home" component={Homepage} />
      <Route exact path="/menu" component={()=><Menu dishes={dishes} />} />
      <Route  path="/menu/:dishId" component={DishWithId} />
      <Route exact path="/contactus" component={Contact} />
      <Redirect to='/home'  />
     </Switch>
      <Footer />

    </>


  );
}

export default Main;
