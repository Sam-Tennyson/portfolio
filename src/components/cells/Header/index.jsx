import React from 'react'
import "./style.css"


const Header = () => {
    return (
        <>
            <header className='header  d-flex justify-content-between align-items-center'>
                <a href="#" className='my-logo'>Portfolio</a>
                <i className='bx bx-menu' id="hamburger-icon"></i>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </>
    )
}

export default Header