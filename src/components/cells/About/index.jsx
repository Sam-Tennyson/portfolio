import React, { useEffect, useRef } from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'
import ScrollReveal from 'scrollreveal'

const About = () => {
	const isMountRef = useRef(true);
	useEffect(() =>{
        if (isMountRef.current) {
            ScrollReveal().reveal('.about-content, .heading', {
                reset: true,
                origin: 'top',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });

			ScrollReveal().reveal('.profile-image', {
                reset: false,
                origin: 'bottom',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });
        }
    }, [])
	return (
		<>
			<section className='about d-flex justify-content-center align-items-center' id="about">
				<div className="profile-image">
					<img src={IMAGES.portfolio_user_image} alt="text_image" />
				</div>
				<div className="about-content">
					<h2 className='heading'>About <span>Me</span></h2>
					<h3>Frontend Developer</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>

				</div>

			</section>
		</>
	)
}

export default About