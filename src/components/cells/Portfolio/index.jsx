import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

import "./style.css"
import { IMAGES } from '../../../shared/Images'


const DATA = [
	// {
	// 	id: "1",
	// 	image_data: IMAGES.portFolio_1,
	// 	heading: "Portfolio Website",
	// 	desc: "Designed and developed my personal portfolio website from scratch, showcasing my skills and projects. Ensured it's responsive and SEO-friendly.",
	// 	live_link: "https://gleaming-daffodil-9889f1.netlify.app/"
	// },
	{
		id: "2",
		image_data: IMAGES.movie_browser,
		heading: "Movie Browser",
		desc: "This project is a result of my passion for movies and web development. I've harnessed the power of The Movie Database (TMDb) API to create a dynamic and user-friendly platform for exploring movies, TV shows, and more.",
		live_link: "https://fascinating-druid-dd46de.netlify.app/"
	},
	{
		id: "3",
		image_data: IMAGES.profChat,
		heading: "Professional Chat",
		desc: "Professional Chat project, a powerful communication platform designed to connect users in a seamless and efficient manner. Built with Firebase and React, this project offers secure user authentication, real-time messaging capabilities, and easy profile management."
	}, 
	{
		id: "4",
		image_data: IMAGES.arcade,
		heading: "Arcade Challange",
		desc: "Professional Chat project, a powerful communication platform designed to connect users in a seamless and efficient manner. Built with Firebase and React, this project offers secure user authentication, real-time messaging capabilities, and easy profile management.",
		live_link: "https://sam-tennyson.github.io/ArcadeGame_javascript/"	
	}, 
]

const Portfolio = () => {
	const isMountRef = useRef(true);
	useEffect(() =>{
        if (isMountRef.current) {
            ScrollReveal().reveal('.heading', {
                reset: true,
                origin: 'top',    // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });

			ScrollReveal().reveal('.portfolio-container', {
                reset: true,
                origin: 'bottom', // Animation origin (e.g., 'top', 'bottom', 'left', 'right')
                distance: '80px', // Distance from the origin
                duration: 1000,   // Animation duration in milliseconds
                delay: 200,       // Delay before animation starts in milliseconds
            });
        }
    }, [])
	return (
		<>
			<section className='portfolio' id="portfolio">
				<h2 className='heading'> Latest <span>Projects</span></h2>
				<div className="portfolio-container d-flex justify-content-center align-items-center gap-2 flex-wrap">
					<div className="row">
						{DATA.map((item)=> (
							<div className="col-md-4 col-sm-6 p-3 " key={item?.id}>
								<div className="h-100 portfolio-box position-relative">
									<img src={item?.image_data} alt="port1" />
									<div className="portfolio-layer justify-content-center align-items-center flex-column p-3">
										<h4 className='d-flex justify-content-between align-items-center'>
											{item?.heading}
											<a href={item?.live_link} className='cursor-pointer'>
												<i className='bx bx-link-external'></i>
											</a>
										</h4>
										<p className=''>{item?.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Portfolio