import React from 'react'
import pay from '../img/g-pay.jpg'
import card from '../img/credit-card.svg'
import left from '../img/chevron-left.svg'



const Checkout = () => {
	const[amount, setAmount] = React.useState('')
	
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Thank you for contributing')
		setAmount('')
		
	}
  
  return (
		<div className='body-checkout scroll lg:h-screen'>
			<div className='container mx-auto flex flex-col items-center justify-center'>
				<h2 className='text-center md:text-4xl text-white py-8 font-extrabold '>
					SAVE ANIMALS
					<br /> FACING EXTINCTION
					<div className='underline'></div>
				</h2>

				<div className=' shadow-2xl bg-white extinction-checkout p-8  '>
					<h3 className='md:text-3xl font-extrabold mb-4 leading-10'>
						Support Save Animals Facing Extinction!
					</h3>
					<p className='leading-7'>
						Please chip in $5 or more now to help us fight back against poachers
						and win the race against extinction. <br />
						This will save lives:
					</p>
					<div>
						<h4 className='font-extrabold mt-8'>
							Choose an amount:{' '}
							<div className='font-extrabold checkout-numbers my-3'>
								$5, $15, $25, $50, $100, $250, $500, $1000
							</div>
						</h4>
						<p className='mb-3 leading-7'>
							Your contribution will benefit Save Animals Facing Extinction.
						</p>
						<div className='amount-checkout  p-4'>
							<form onSubmit={handleSubmit}>
								<input
									type='text'
									placeholder='$ amount'
									className='w-20 checkout-input md:p-3 mt-2'
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
								<div>
									<div>
										<h4 className='text-checkout font-extrabold my-4 md:text-xl'>
											Make It Monthly!
										</h4>
										<label htmlFor='yes'>Yes</label>
										<input
											type='checkbox'
											name='yes'
											id='yes'
											className='mx-4'
										/>
										<label htmlFor='no'>No</label>
										<input type='checkbox' name='no' id='no' className='mx-4' />
									</div>
									<button
										type='submit'
										className='checkbox-btn__btn mt-2 p-2 block'>
										Contribute
									</button>
								</div>
							</form>
						</div>
						<div className='mt-4 block'>
							<button className='bg-black g-pay text-center  flex items-center justify-center'>
								<img src={pay} alt='g-pay' className='g-pay__img' />
							</button>
						</div>
						<div className='mt-4 block'>
							<button className='bg-yellow-500 g-pay text-center  flex items-center justify-center'>
								<span className='text-blue-900 font-extrabold'>Pay</span>
								<span className='text-blue-500 font-extrabold'>Pal</span>
							</button>
						</div>
						<div className='mt-4 text-white'>
							<button className='card-pay g-pay flex items-center justify-center'>
								<img
									src={card}
									alt='credit-card'
									className='text-center mx-4'
								/>{' '}
								pay with card
							</button>
						</div>
					</div>
				</div>
			</div>
			<a href='/'>
				<div className='left'>
					<img src={left} alt='chevron-left' />
				</div>
			</a>
		</div>
	);
}

export default Checkout
