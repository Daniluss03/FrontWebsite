import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button} from '../../pages/Button'
function Offcanvas_1({About_me_more}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        MORE
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {About_me_more.map((me)=>{return(
         <div> 
          
          <h1>{me.Nombre}</h1>

        <h1>{me.student}</h1> 

        <h2>I have different knowledge such as</h2>
        <p>-{me.skill_1}</p> 
        <p>-{me.skill_2}</p> 
        <p>-{me.skill_3}</p> 
        <p>-{me.skill_4}</p> 
        <p>-{me.skill_5}</p> 
        <p>-{me.skill_6}</p> 
        
         </div>
          
         
        )})}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Offcanvas_1;