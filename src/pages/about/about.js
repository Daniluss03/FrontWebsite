import React from 'react'
import './about.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import Offcanvas_1 from '../../components/Offcanvas';

const About = () => {
  return (

    <section>
      <container class="container">
        <div>
          <h1>
            ABOUT US
          </h1>
        </div>
        
        <div>
          <p><LoremIpsum p={1} /></p>

         <div class="container_offcanvas">
         <Offcanvas_1/>
         
         </div>
      
          
        </div>
      </container>
    </section>
  )
}

export default About