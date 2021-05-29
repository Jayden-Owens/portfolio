import React from 'react'
import Button from '../Button'
import emailjs from 'emailjs-com';
import './Contact.css'
function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('JaydensGmail', 'Portfolio', e.target, "")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className='footer-container'>
            <section classname="footer-subscritption">
                <p className='footer-subscription-heading'>
                    Feel free to contact me at jaydenowens23@gmail.com
                </p>
                <p className='footer-subscription-text'> 
                    fill out the form and i will contact you!
                </p>
                <div className='input-areas'>
             <form className="contact-form" onSubmit={sendEmail}>
          <label style={{color: 'white'}}>Name</label><br/>
          <input type="name" name="name" style={{width: '40%'}}/><br/>
          <label style={{color: 'white'}}>Email</label><br/>
          <input type="email" name="email" style={{width: '40%'}}/><br/>
          <label style={{color: 'white'}}>Phone Number</label><br/>
          <input type="text" name="phone" style={{width: '40%'}} /><br/>
          <label style={{color: 'white'}}>Description</label><br/>
          <textarea name="description" centered style={{width: '80%'}}/><br/><br/>
          <Button onClick={()=>{ alert('Email Sent!'); }} type="submit" value="Send" style={{ text: 'white'}}> Submit </Button>
          <br/>
          <br/>
        </form>
          </div>
            </section>
            
        </div>
    )
}

export default Contact
