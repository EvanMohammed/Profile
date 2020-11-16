import React from 'react'
import emailjs from 'emailjs-com';
import './style.css';
function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_evansaleh', 'contact_form', e.target, 'user_AEeJwaOVkQBPapeqII85h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact--container'>
            
        <form className="contact--form" onSubmit={sendEmail} id='contact'>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Name' className='contact--input'/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Email' className='contact--input'/>
        <label>Message</label>
        <textarea name="message" placeholder='Message' className='contact--input'/>
        <input type="submit" value="SUBMIT"  className='contact--btn'/>
      </form>
        </div>
    );
}

export default Contact
