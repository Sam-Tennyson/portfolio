import React from 'react'
import "./style.css"

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
					{/* <div className="services-box">
						<i className="bx bx-code-alt"></i>
						<h3>Web Developer</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>
						<a href="#" className='btn'>Read More</a>
					</div>
					<div className="services-box">
						<i className="bx bx-code-alt"></i>
						<h3>Web Developer</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>
						<a href="#" className='btn'>Read More</a>
					</div> */}
				</div>

			</section>
		</>
	)
}

export default Services