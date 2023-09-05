import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'
import Header from './components/cells/Header';
import Section from './components/cells/Section';
import About from './components/cells/About';
import Services from './components/cells/Services';
import Portfolio from './components/cells/Portfolio';
import Contact from './components/cells/Contact';
import Footer from './components/cells/Footer';

function App() {
	const items = ["Item 1", "Item 2", "Item 3"]; // Replace with your data
	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(255, 255, 255, 0)"
		},
		visible: {
			pathLength: 1,
			fill: "rgba(255, 255, 255, 1)"
		}
	}

	return (
		<>
			<Header />
			<Section />
			<About />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
			{/* <div>
				{items.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: index * 0.2 }}
						whileHover={{ scale: 1.1 }} // Add a hover animation
						whileTap={{ scale: 0.9 }}   // Add a tap animation
						while={{ scale: 1.1 }}      // Add a looped animation
					>
						{item}
					</motion.div>
				))}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
				>
					<motion.path
						d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
						variants={icon}
						initial="hidden"
						animate="visible"
					/>
				</svg>
			</div> */}
		</>
	)
}

export default App
