
import demo from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from './Contact.js';
import Content from './Content.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Home from './Home.js';


function App() { 
  return (
<Router>   
    <div>
<Navbar/>
<h1>Homepage</h1>


  <Switch>
  <Route exact path='/'>
  <Home/>
    </Route> 
    <Route exact path='/contact'>
  <Contact/>
    </Route>
    <Route path='/about'>
  <Content/>
    </Route>
    </Switch>
   
    <Footer/>
   
    

</div>
</Router>

  );
}

export default App;
