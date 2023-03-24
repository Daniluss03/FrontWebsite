import Aos from "aos";
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
import './about.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import Offcanvas_1 from '../../components/Offcanvas';
import { More_information } from '../../components/Data/Data_information_1';
const About = ({about_me}) => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (

    <section  id='Nosotros'>
      <container data-aos="fade-right" class="container">
        <div>
          <h1>
            ABOUT ME
          </h1>
        </div>
      
         {about_me.map((me)=>{return(
         <div class="aboutme"> {me.about}
         
        
         <Offcanvas_1 About_me_more={More_information} />
       
         
         </div>
         )})}

         
      </container>
    </section>
  )
}

export default About