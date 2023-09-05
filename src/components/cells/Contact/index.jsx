import React from 'react'
import "./style.css"

const Contact = () => {

    return (
        <>
            <section className="contact" id="contact">
                <h2 className='heading'> Contact <span>Me!</span></h2>

                <form action="#">
                    <div className="row">
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