import React, { useEffect, useRef } from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'
import ScrollReveal from 'scrollreveal'

const DATA = [
	{
		id: "1",
		image_data: IMAGES.portFolio_1,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "2",
		image_data: IMAGES.portFolio_2,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "3",
		image_data: IMAGES.portFolio_3,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "4",
		image_data: IMAGES.portFolio_1,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "5",
		image_data: IMAGES.portFolio_2,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "6",
		image_data: IMAGES.portFolio_3,
		heading: "Web Design",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	}
]

const Portfolio = () => {
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

			ScrollReveal().reveal('.portfolio-container', {
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
			<section className='portfolio' id="portfolio">
				<h2 className='heading'> Latest <span>Projects</span></h2>
				<div className="portfolio-container d-flex justify-content-center align-items-center gap-2 flex-wrap">
					<div className="row">
						{DATA.map((item)=> (
							<div className="col-md-4 col-sm-6 p-3 " key={item?.id}>
								<div className="h-100 portfolio-box position-relative">
									<img src={item?.image_data} alt="port1" />
									<div className="portfolio-layer d-inline-flex justify-content-center align-items-center flex-column">
										<h4>{item?.heading}</h4>
										<p className='text-center'>{item?.desc}</p>
										<a href="#">
											<i className='bx bx-link-external'></i>
										</a>
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