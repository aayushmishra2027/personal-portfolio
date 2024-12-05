import React from 'react';
import './About.css';
import ME from '../../assests/me.png';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Learn More</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Lucas"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Experience</h5>
                        <small>Internships Done - 2</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>MIT Manipal <br/> Mechatronics Engineer</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Passionate About</h5>
                        <small>Astronomy, Coding, Solo-Travelling</small>
                    </article>
                </div>
                <p>
                    I'm an Engineering Student by Profession and 
                    currently pursuing my Bachelor's in Mechatronics
                    (Robotics & Automation) at MIT Manipal (2023-27). 
                    
                    Besides Engineering, I'm also passionate about 
                    Web-Development and Astronomy.I always look for 
                    learning a concept through practical/hands-on application.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Get in Touch!</a>
            </div>
        </div>
    </section>
  );
}

export default About;
