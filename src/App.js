import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homee/Home';
import About from './pages/about/about';


import Servicios from './pages/servicios/services';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Question from './components/Accordion/Accordion';
import Footter from './pages/Footer';
import formulario from './pages/Contacto'
import Contactanos_1 from './pages/Contacto';
function App() {


    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Home />
            
            <About />
           <Servicios/>
            <Question/>
          <Contactanos_1/>
           <Footter/>
        </Router>
    );
}

export default App;
