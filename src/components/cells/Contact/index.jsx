import React, { useEffect, useRef } from 'react'
import "./style.css";
import ScrollReveal from 'scrollreveal';
import { SOCIAL_LINKS } from '../../../shared/Constants';
import Footer from '../Footer';

const Contact = () => {
    const isMountRef = useRef(true);
	useEffect(() =>{
        if (isMountRef.current) {
            ScrollReveal().reveal('.heading', {
                reset: true,
                origin: 'top',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });

			ScrollReveal().reveal('.contact-container', {
                reset: true,
                origin: 'bottom',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });
        }
    }, [])
    return (
        <>
            <section className="contact" id="contact">
                <h2 className='heading'> Contact <span>Me!</span></h2>
                <h1 className='text-center'>Get in touch</h1>
                

                <div className="social-media text-center">
                    <a href={SOCIAL_LINKS.GITHUB} ><i className='bx bxl-github'></i></a>
                    <a href={SOCIAL_LINKS.LINKED_IN}><i className='bx bxl-linkedin'></i></a>
                    <a href={"mailto:saurabhshukla3107@gmail.com"}><i className='bx bxl-gmail'></i></a>
                </div>
            </section>
            {/* <Footer /> */}

        </>
    )
}

export default Contact