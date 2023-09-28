import React, { useEffect, useRef } from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'
import ScrollReveal from 'scrollreveal'

const About = () => {
	const isMountRef = useRef(true);
	useEffect(() => {
		if (isMountRef.current) {
			ScrollReveal().reveal('.about-content, .heading', {
				reset: true,
				origin: 'top',   // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
				distance: '80px', // Distance from the origin
				duration: 1000,   // Animation duration in milliseconds
				delay: 200,       // Delay before animation starts in milliseconds
			});

			ScrollReveal().reveal('.profile-image', {
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
			<section className='about d-flex justify-content-center align-items-center' id="about">
				<div className="profile-image">
					<img src={IMAGES.PPP} alt="text_image" />
				</div>
				<div className="about-content">
					<h2 className='heading'>About <span>Me</span></h2>

					<p>
						I'm a versatile developer with a passion for creating user-friendly websites and applications. My expertise spans both frontend and full-stack development, allowing me to craft end-to-end solutions that meet the needs of users and businesses alike. </p>

					<p>
						As a working professional, I'm committed to continuous learning and staying up-to-date with the latest technologies to deliver cutting-edge solutions. Whether I'm working on the frontend or diving into backend development, my goal is to create innovative and functional digital experiences that exceed expectations.</p>

					<p>
						I look forward to taking on new challenges, embracing emerging technologies, and contributing to the world of web development as a frontend and full-stack developer.

					</p>

				</div>

			</section>
		</>
	)
}

export default About