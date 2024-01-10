import React, {useRef} from 'react';
import './footer.css';

import { useState } from 'react';

import emailjs from '@emailjs/browser';
//import {} from '@hookform/resolvers/yup';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_36gs0dk', 'template_k07t7qa', form.current, 'J7ku8nKwCIql0IiCB')
      .then((result) => {
          console.log(result.text);
          console.log("email sent");
          const form = document.getElementById("form1");
            // Reset the form
          form.reset();
          const msg= document.getElementById("msg");
          msg.innerHTML = "Form successfully submitted!"

      }, (error) => {
          console.log(error.text);
      });
      
  

 
  };

  
  
  return (
    <center>
    <footer id="contact">
      

      <div className="contact-form" >
        <h3> Contact Me </h3>
        <form id="form1" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name="user_name" required/>
        <input type="number" placeholder="Phone Number" name="user_number" required/>
        <input type="email" placeholder="Email" name="user_email" required/>
        <textarea name="message" placeholder="Message" required/>
        <p className="msg" id="msg"></p>
        <center><input className="button" type="submit" value="Send" /></center>
      </form>
    </div>

    </footer>
    
    </center>

  );
};

export default Footer;