import React, { useEffect, useState } from 'react'
import "./style.css"
import { RESPONSIVE } from '../../../shared/Constants'

const TAB_DATA = [
    {
        label: "Home", id: "#home", icon: <i className='bx bxs-home'></i>
    },
    {
        label: "About", id: "#about", icon: <i className='bx bxs-user-detail'></i>
    },
    // {
    //     label: "Services", id: "#services", icon: <i className='bx bx-cog'></i>
    // },
    {
        label: "Projects", id: "#portfolio", icon: <i className='bx bx-detail'></i>
    },
    {
        label: "Contact", id: "#contact", icon: <i className='bx bx-current-location'></i>
    },
]

const Header = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const handleToggle = () => {
        if (isMobile) {
            setIsOpen((prev) => !prev)   
        }
    }
    
    const handleWindowDimensions = () => {
		if (window.innerWidth <= RESPONSIVE.BREAKPOINT_NOT_MOBILE.MIN_WIDTH) {
			setIsOpen(false)
            setIsMobile(true)
            return;
		}
        setIsOpen(true)
        setIsMobile(false)
	}


	useEffect(() => {

        handleWindowDimensions()
        window.addEventListener("resize", handleWindowDimensions)
		return () => {
            window.removeEventListener("resise", handleWindowDimensions)
        }
	}, [])

    return (
        <>
            <header className='header d-flex justify-content-between align-items-center'>
                <a href="#" className='my-logo '>Portfolio</a>
                {isOpen ? (
                    <i className='bx bx-x' id="hamburger-icon"
                        onClick={handleToggle}
                    ></i>
                ) : (
                    <i className='bx bx-menu' id="hamburger-icon"
                        onClick={handleToggle}
                    ></i>
                )}
                <nav className={`navbar my-nav ${!isOpen ? "d-none" : ""} `}>
                    {TAB_DATA.map((item) => (
                        <a href={item?.id} key={item?.id}
                            onClick={handleToggle}
                        >
                            {item?.icon} &nbsp;
                            {item?.label}</a>
                    ))}
                </nav>
            </header>
        </>
    )
}

export default Header