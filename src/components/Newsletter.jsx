import React from 'react'

const Newsletter = () => {
    const [email, setEmail] = React.useState('');
	const handleSubmit = () => {
		setEmail('')
		alert('subscribed for newsletter')
		
    };
    return (
			<section className='new-letter mt-8' id='news-letter'>
				<div className='container mx-auto grid grid-cols-2 p-20 news-updates'>
					<div className=' font-bold'>
						<h3 className='md:text-4xl mb-3 text-white'>
							Want Latest Info And Updates?
						</h3>
						<small className='md:text-xl mb-2'>
							Sign up for newsletter and stay up to date
						</small>
					</div>
					<form action='https://fabform.io/f/42kZL9S'
						method='post' onSubmit={handleSubmit}
						>
						<input
							name="email"
							type='email'
							placeholder=' Your Email'
							className='p-2 newLetter-form border-none outline-none '
							value={email}
							onChange={(e)=>setEmail(e.target.value)}
						
							
						/>
						<button
							type='submit'
							className='newLetter-btn p-2 text-white rounded-r-lg '>
							SUBMIT
						</button>
					</form>
				</div>
			</section>
		);
}

export default Newsletter
