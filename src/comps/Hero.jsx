import React from 'react'
import chevron from '../img/chevron-right (1).svg'

const Hero = () => {
	const [email, setEmail] = React.useState('')
	const [zipCode, setZipCode] = React.useState('')
  return (
		<section className='bg-hero h-screen w-full bg-cover bg-center bg-no-repeat'>
			<div className='overlay-hero flex items-center justify-center flex-col'>
				<div className='flex flex-col items-center justify-center h-96 text-white text-2xl leading-10   '>
					<h2 className='md:text-8xl '>ACT NOW</h2>
					<p className='sm:mx-5'>To save animals about facing Extinction</p>
					<small>By</small>
					<a href='Checkout'>
						<button className='btn-hero text-white p-3 rounded-sm shadow-lg border-none w-72'>
							Contributing
						</button>
					</a>
				</div>
				<div className=' flex  md:border-4 border-black hero-form outline-none'>
					<form className='border-none'>
						<input
							type='email'
							placeholder='your email address'
							className='p-4 hero-form '
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='text'
							placeholder='zip code '
							className='p-4 border-l-8 hero-form'
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
						/>
						<div className='chevron-right__hero p-4 hero-form hero-chevron__icon'>
							<a href='Checkout'>
								<img
									src={chevron}
									alt='chevron-right'
									className='chevron-right__hero1'
								/>
							</a>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Hero
