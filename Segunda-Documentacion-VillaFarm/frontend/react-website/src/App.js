import React from 'react';
import Navbar from './common/components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Products from './pages/Productos/Products';
import Login from './pages/Login/Login';
import Empleos from './pages/Empleos/Empleos';
import Signup from './pages/Login/components/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/inicio' exact component={Inicio} />
          <Route path='/empleos' component={Empleos} />
          <Route path='/productos' component={Products} />
          <Route path='/' exact component={Login} />
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>

          
        </Switch>
      </Router>
    </>
  );
}

export default App;
