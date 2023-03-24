
import './Home.css';
import Aos from "aos";
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  return (

  
    <section data-aos="fade-right" id='Home' className="sectionHome">

    
      <container className="wrap" data-aos="fade-right">
        <div className="rigth-Home">
          <h1> Mejores soluciones para tu negocio</h1>
        </div>
        <p>
        </p>
        <div className="left-Home">
          <img alt="" src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" />
        </div>
      </container>

    </section>


  )
}

export default Home