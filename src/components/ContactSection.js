import React from 'react';
import '../App.css';
import './ContactSection.css';

function ContactSection() {
  return (
    <div id="contact" className='contact-container'>
      <div className="box-img">
        <img className='img-contact' src="/images/contact-us.jpg" alt="Contact Us"/>  
      </div>
      <div className='box-text'>
        <div className="text">
          <h1>Contact</h1> 
          <p>Email: info@beathunger.com</p><br />
          <p>Phone: 1-800-245-0000</p>
        </div>
      </div>    
    </div>
    
  );
}

export default ContactSection;