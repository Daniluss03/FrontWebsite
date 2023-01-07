import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import {AiFillInstagram}from 'react-icons/ai'
import {AiOutlineTwitter}from 'react-icons/ai'
import './Footer.css'
const Footter = () => {
  return (
<footer>
    <section class="section-fotter">
        <article>
            <div class="container_links">

                <img src="" alt=""/>
          

            </div>
            

           
         <p>
              

         </p>
         <div class="container_links">
            <a href=""  target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
            <a href=""  target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
            <a href=""  target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
            <a href=""  target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
         </div>
     
        </article>
      
    </section>
</footer>
  )
}

export default Footter; 