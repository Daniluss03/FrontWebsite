
import './services.css';
import React, { useState, useEffect,forwardRef } from 'react';

const InformationService = () => {

  const [user, setUsers] = useState({})

  /* const getApiData = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/lista/api/'
    ).then((response) => response.json());
  
    setUsers(response);
    console.log(response)
  };
  
  useEffect(() => {
    getApiData();
  }, []);  */



  return (

    <section id='servicios'>
      <h1>Our Proyects</h1>
      <div className="wrapper">

        <div className='card'>
          <h1>this is a title</h1>
          <p>this is a text</p>
        </div>



        <div className='card'>
          <h1>this is a title</h1>
          <p>this is a text</p>
        </div>



        <div className='card'>
          <h1>this is a title</h1>
          <p>this is a text</p>
        </div>
      </div>


      {/*  <div className='wrapper'>

     {   user.map((user) => {
          return (

            <div class="card">
              <h1> {user.title} </h1>

              <p>{user.content}</p>
            </div>

          )
        })}


      </div> */}
    </section>
  )
}
export default InformationService;