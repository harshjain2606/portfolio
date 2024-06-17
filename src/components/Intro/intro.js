import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>hello</span>
            <span className="introText">I'm <span className="introName">Harsh</span><br/>website designer</span>
            <p className="introPara">I am a skilled  web designer in creating <br/> visually appealing  and user friendly website</p>
            <Link><button className="btn"><img src= {btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
 
        <img src= {bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro
