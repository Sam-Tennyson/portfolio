import React, { useEffect, useRef } from 'react'
import "./style.css";
import ScrollReveal from 'scrollreveal';

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

                <form action="#">
                    <div className="row contact-container">
                        <div className="col-md-6 mb-3 input-box form-groups">
                            <label htmlFor="fullname" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Full Name'
                                name="fullname"
                                id="fullname"
                            />
                        </div>
                        <div className="col-md-6 mb-3 form-groups">
                            <label htmlFor="email" className="form-label">
                                Email address</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Email '
                                name="email"
                                id="email" 
                            />
                        </div>
                        <div className="col-md-6  mb-3 input-box form-groups">
                            <label htmlFor="email" className="form-label">
                                Phone Number</label>
                            <input
                                type="text"
                                className='form-control' placeholder='Phone number'
                                name="number" id="number" 
                            />
                        </div>
                        <div className="col-md-6  mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Subject</label>
                            <input type="text"
                                className='form-control'
                                placeholder='Email Subject'
                                name=""
                                id="" 
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <label htmlFor="email" className="form-label">
                                Phone Number</label>
                            <textarea
                                rows={"7"}
                                type="text"
                                className='form-control'
                                placeholder='Email Subject' name="" id="" 
                            />
                        </div>
                        <div className="text-center">
                            <input type='submit' className='btn' 
                            value={"  Send Message"}
                            />
                              

                            {/* </input> */}
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact