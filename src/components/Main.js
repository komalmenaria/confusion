import Dishdetail from './Dishdetail';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Menu from './Menu';
import React from 'react';
import { Switch,Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {

  return{
      comments: state.comments,
      dishes: state.dishes,
      leaders: state.leaders,
      promotions: state.promotions,
  }
} 
function Main(props) {

  
  const HomePage = () => {
    return(
        <Home 
            dish={ props.dishes.filter( (dish)=>dish.featured )[0] }
            promotion={props.promotions.filter( (promotion)=>promotion.featured )[0] }
            leader={props.leaders.filter( (leader)=>leader.featured )[0] }
        />
    );
};

  const DishWithId = ({match})=>{
    return(
<Dishdetail dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
comment={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    )
  }

  return (
    
    <>
    <React.StrictMode>
      <Header />
      </React.StrictMode>
     <Switch>
      <Route path="/home" component={HomePage} />
      <Route exact path="/menu" component={()=><Menu dishes={props.dishes} />} />
      <Route exact path="/aboutus" component={()=><About leaders={props.leaders} />} />
      <Route  path="/menu/:dishId" component={DishWithId} />
      <Route exact path="/contactus" component={Contact} />
      <Redirect to='/home'  />
     </Switch>
      <Footer />

    </>


  );
}

export default withRouter(connect(mapStateToProps)(Main));
