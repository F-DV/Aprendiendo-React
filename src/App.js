import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from './components/Contacto';
import Inicio from './components/Inicio'; 
import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {


  return (

    //ClassName para ingresar elementos Boostrap css, mt-5 : magin top, 
    <Router>
      <div className="container mt-5">
        <div className='btn-group'>
          <Link to="/" className='btn btn-dark'>
          Inicio
          </Link>
          <Link to="/nosotros" className='btn btn-dark'>
          Nosotros
          </Link>
          <NavLink to="/contacto" className='btn btn-dark' ctiveClassName='active' >
          Contacto
          </NavLink>
          </div> 

        <h1>Navbar...</h1>
        <hr/>
        <Switch>
          <Route path = "/nosotros/:id" >
            <User/>
          </Route>
          
          <Route path = "/contacto">
            <Contacto />
          </Route>
          <Route path = "/nosotros">
          <Nosotros />
          </Route>
          <Route path = "/" exact>
            <Inicio/>
          </Route>
        </Switch>    
      </div>
    </Router>

    
  );
}

export default App;
