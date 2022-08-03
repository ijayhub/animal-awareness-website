import React from 'react'
import Navbar from '../components/Navbar';
import Together from '../components/Together';
import LearnMoreGallery from '../components/LearnMoreGallery';
import Hero from '../components/Hero';
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
