import React, { useEffect, useRef } from 'react'
import "./style.css";
import ScrollReveal from 'scrollreveal';

const DATA = [
	{
		id: "1",
		heading: "Web Developer",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "2",
		heading: "Web Developer",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	},
	{
		id: "3",
		heading: "Web Developer",
		desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam suscipit recusandae, libero maiores provident?"
	}
]

const Services = () => {
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

			ScrollReveal().reveal('.services-content', {
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
			<section className='services' id="services">
				<h2 className='heading'> Our <span>Services</span></h2>
				<div className="services-content d-flex justify-content-center align-items-center gap-2 flex-wrap">
					<div className="row">

					{DATA.map((item) => (
						<div className="col-md-4 col-sm-6 p-3 " key={item?.id}>
							<div className="services-box" >
								<i className="bx bx-code-alt"></i>
								<h3>{item?.heading}</h3>
								<p>{item?.desc}</p>
								<a href="#" className='btn'>Read More</a>
							</div>
						</div>
					))}
					</div>

				</div>

			</section>
		</>
	)
}

export default Services