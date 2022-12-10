import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/Menu';

function App() {
  return (
    <div >
     <Navbar dark color={'dark'}>
      <div className='container'>
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
     </Navbar>
     <Menu />
    </div>
  );
}

export default App;
