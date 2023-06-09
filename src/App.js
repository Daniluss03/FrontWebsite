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
import { Personal_Information } from './components/Data/Data_information_1';

import LoginComponent from './components/login'
import Plans from './pages/planes';
import ScrollButton from './components/Scrollup';


function App() {


    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Router>
            <Navbar toggle={toggle} />

            <Sidebar isOpen={isOpen} toggle={toggle} />
          
            <Home /> 
            <About about_me={Personal_Information} />
            <Question/>
            
              {/*   <Route
                    path='/'
                    element={  }
                /> */}
            <Servicios/>
               
              <ScrollButton/>
            <Plans/>



            <Footter/>
        </Router>
       
    );
}

export default App;
