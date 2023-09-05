import React from 'react'
import "./style.css"
import { IMAGES } from '../../../shared/Images'

const About = () => {
  return (
    <>
        <section className='about d-flex justify-content-center align-items-center' id="about">
            <div className="about-img">
                <img src={IMAGES.testImage} alt="text_image" />
            </div>
            <div className="about-content text-start">
                <h2 className='heading'>About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas ad sequi sint porro possimus nisi velit, repudiandae expedita explicabo?</p>
                
            </div>
            
        </section>
    </>
  )
}

export default About