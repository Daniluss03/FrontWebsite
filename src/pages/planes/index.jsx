import Aos from "aos";
import "aos/dist/aos.css"
import React,{useEffect,useState} from 'react'
import './planes.css';
import Modal from '../../components/Modal'
import Formulario_contacto from '../../components/Formulario'
const Plans = () => {

  const [show, SetShow] = useState(false)

  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  return (
    <section id='contact'>
      <h1>Contact with us to see our plans</h1>

        <button className='buttonplans' onClick={() => SetShow(true)}>Contact</button>
        <Modal onClose={() => SetShow(false)} show={show}>
          <Formulario_contacto />

        </Modal>

    

    </section>


  )
}

export default Plans;