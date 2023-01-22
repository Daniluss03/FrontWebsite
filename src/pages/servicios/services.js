import React from 'react'
import'./services.css';
import LoremIpsum from 'react-lorem-ipsum';
const servicios = ({informaciones}) => {
  return (
<>

    <h1>PROYECTS</h1>


    <div  className='wrapper'>
    



   {informaciones.map((informacion)=>{return(
     <div class="card">
      <i>{informacion.image}</i>
     <h1> {informacion.title} </h1> 
     <p>{informacion.made}</p>
     
     
     
     
     </div>

   )})}


    
     
   


    </div>
    </>
  )
}
export default servicios