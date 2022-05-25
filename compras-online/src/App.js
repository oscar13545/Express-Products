import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MegaNavbar from './Components/MegaNavbar/MegaNavbar'
import Productos from './Components/Productos/Productos'
import Cobros from './Components/Cobros/Cobros'
import Clientes from './Components/Clientes/Clientes'
import HomeExpress from './Components/HomeExpress/HomeExpress'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
           <MegaNavbar/>
           <Routes>
          
          <Route exact path="/" element={<HomeExpress/>}/>
          <Route exact path="/home" element={<HomeExpress/>}/>
          <Route exact path="/Cobros" element={<Cobros/>}/>
          <Route exact path="/Productos" element={<Productos/>}/>
          <Route exact path="/Clientes" element={<Clientes/>}/>
         
        </Routes>
        
        
        
    </Router>
      </div>
    );
  }
}

export default App;