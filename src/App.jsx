import { useEffect, useRef } from 'react'
import './App.css'
import Header from './components/cells/Header';
import Section from './components/cells/Section';
import About from './components/cells/About';
import Services from './components/cells/Services';
import Portfolio from './components/cells/Portfolio';
import Contact from './components/cells/Contact';
import Footer from './components/cells/Footer';
import PublicLayout from './components/layout/PublicLayout';
import TechStack from './components/cells/TechStack';

function App() {
	
	const handleScrollActiveDiv = () => {
        let sections = document.querySelectorAll("section");
        let navlinks = document.querySelectorAll(".header nav a");

		console.log(sections, navlinks, ">>");
        sections.forEach((sec) => {
			let top = window.scrollY;
            let offset = sec.offsetTop -150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

			if (top >= offset && top < offset + height) {
				navlinks.forEach(link => {
					link.classList.remove("active-section");
                });
				
                // Add the "active" class to the corresponding navigation link.
                document.querySelector(`.header nav a[href="#${id}"]`).classList.add("active-section");
            }
        })
    }

    useEffect(() => {
        window.addEventListener("scroll",handleScrollActiveDiv )

        return () => {
            window.removeEventListener("scroll", handleScrollActiveDiv)
        }
    }, [])

	return (
		<>
			<Header />
			<PublicLayout>

				<Section />
				<About />
				{/* <Services /> */}
				<TechStack />
				<Portfolio />
				<Contact />
				<Footer />
			</PublicLayout>
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
