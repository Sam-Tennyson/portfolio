import React, { useEffect, useRef } from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';


const Section = () => {

    const isMountRef = useRef(true);
    useEffect(() =>{
        if (isMountRef.current) {
            ScrollReveal().reveal('.home-content', {
                reset: true,
                origin: 'top',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });

			ScrollReveal().reveal('.profile-image, social-media', {
                reset: false,
                origin: 'bottom',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });

            ScrollReveal().reveal('.home-content h1, .home-content .social-media', {
                reset: true,
                origin: 'left',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });
        }
    }, [])

    useEffect(() => {
        // Initialize Typed.js
        const options = {
          strings: ["Full Stack Developer.", "Web Developer.", "Frontend Developer."],
          typeSpeed: 100, // typing speed in milliseconds
          backSpeed: 50, // backspacing speed in milliseconds
          backDelay: 100,
          loop: true, // loop the animation
        };
    
        const typed = new Typed('.typed-text', options);
    
        // Clean up when the component unmounts
        return () => {
          typed.destroy();
        };
      }, []);

    return (
    <>
        <section className='home d-flex justify-content-center align-items-center' id="home">
            <div className="home-content text-start">
                <h3>Hello, It's me</h3>
                <h1>Saurabh Shukla</h1>
                <h3>And I'm a <span className='typed-text'></span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>
                <div className="social-media">
                    <a href="#"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                </div>
            </div>
            <div className="profile-image">
                <img src={IMAGES.portfolio_user_image} alt="text_image" />
            </div>
        </section>
    </>
  )
}

export default Section