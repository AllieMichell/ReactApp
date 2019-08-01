import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, 
  Link, 
  BrowserRouter as Router
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


// Components
import Btn from './components/Button/Button'
import Home from './components/Navbar/DR.js'
import Main from './components/Main/Main'
import Welcome from './components/Welcome/Welcome'
import DRA from './components/Main/DRA'
import Alert from './components/Alert/Alert'
import Menu from './components/Alert/Menu1'

// Components from Material Desing
import HomeMD from './components/Home/Drawer'

function App(){
  return (
    <Home />
    // <Main />
    // <Welcome />
    // <DRA/>
    // <Alert/>
    // <Menu/> 
    // <HomeMD/>
  )
}
export default App;
