import React from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'


const Section = () => {
  return (
    <>
        <section className='home d-flex justify-content-center align-items-center' id="home">
            <div className="home-content text-start">
                <h3>Hello, It's me</h3>
                <h1>Saurabh Shukla</h1>
                <h3>And I'm a <span>Frontend Developer</span>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>
                <div className="social-media">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
            <div className="home-img">
                <img src={IMAGES.portFolio_1} alt="text_image" />
            </div>
        </section>
    </>
  )
}

export default Section