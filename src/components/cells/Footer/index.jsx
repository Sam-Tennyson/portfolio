import React from 'react'
import "./style.css"
import { SOCIAL_LINKS } from '../../../shared/Constants'


const Footer = () => {
	return (
		<>
			<footer className="footer d-flex justify-content-between align-items-center flex-wrap" id="footer">
				<div className="footer-text">
					<p>Copyright &copy; 2023 by Saurabh Shukla</p>
				</div>

				<div className="footer-icons">
					<a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
				</div>
			</footer>
		</>
	)
}

export default Footer