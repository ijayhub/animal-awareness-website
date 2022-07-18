import React from 'react'
import Navbar from '../comps/Navbar';
import Together from '../comps/Together';
import LearnMoreGallery from '../comps/LearnMoreGallery';
import Hero from '../comps/Hero';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Home = () => {
  return (
		<div>
			<Navbar />
			<Hero />
			<Together />
			<LearnMoreGallery />
			<Newsletter />
			<Footer/>
		</div>
	);
}

export default Home
