 import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9huxja', 'template_k1sqdtx', form.current, 'CpjZOdIq1rHS2IbDh')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTittle'>My clients</h1>
        <p className='clientDesc'>
          I have the opportunities to work with a diverse group of companies. Some of the notable 
          companies I have worked with include
        </p>
        <div className='clientImgs'>
          <img src={Walmart} alt='Client' className='clientImg' />
          <img src={Adobe} alt='Client' className='clientImg' />
          <img src={Microsoft} alt='Client' className='clientImg' />
          <img src={Facebook} alt='Client' className='clientImg' />
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTittle'>Contact ME</h1>
        <span className='contactDesc'>Please fill out the form to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your name' name='your_name' />
          <input type='email' className='email' placeholder='Your email' name='your_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <img src={FacebookIcon} alt='Facebook' className='link' />
            <img src={TwitterIcon} alt='Twitter' className='link' />
            <img src={YoutubeIcon} alt='Youtube' className='link' />
            <img src={InstagramIcon} alt='Instagram' className='link' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
