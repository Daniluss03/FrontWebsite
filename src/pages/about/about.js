import React from 'react'
import './about.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import Offcanvas_1 from '../../components/Offcanvas';
import { More_information } from '../../components/Data/Data_information_1';
const About = ({about_me}) => {
  return (

    <section>
      <container class="container">
        <div>
          <h1>
            ABOUT ME
          </h1>
        </div>
      
         {about_me.map((me)=>{return(
         <div class="aboutme"> {me.about}</div>
         )})}

         <div class="container_offcanvas">
         <Offcanvas_1  About_me_more={More_information} />
            



      
          
        </div>
      </container>
    </section>
  )
}

export default About