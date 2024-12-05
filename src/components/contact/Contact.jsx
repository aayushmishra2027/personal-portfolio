import React, {useRef} from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b0s7aqm', 'template_fxb2agj', form.current, '0UxcjjHZLqVBU83qf');
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Want to Connect?</h5>
            <h2>Contact Me Here</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>E-Mail</h4> 
                        <h5>aayushmishra1105@gmail.com</h5>
                        <a href="mailto:aayushmishra1105@gmail.com">E-Mail Me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4> 
                        <h5>in/aayushanilmishra</h5>
                        <a href='https://www.linkedin.com/in/aayush-anil-mishra-508abb280/' target='_blank'>Connect on LinkedIn!</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
