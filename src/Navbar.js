import demo from './style.module.css';
import button from '/node_modules/react-bootstrap/Button';
import{Link} from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FASHION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Pages</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">        
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">ABOUT</Link>
           
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
           
          </li>
          </ul>

                  <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
  </nav>
            {/* <Link to="/">Home</Link>

            <Link to="/contact">Copntact</Link>
            <Link to="/about">About</Link> } */}

           

                    </div>
    );
}

export default Navbar;