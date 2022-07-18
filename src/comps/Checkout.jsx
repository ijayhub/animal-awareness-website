import React from 'react'
import pay from '../img/g-pay.jpg'
// import { AiFaCcVisa } from 'react-icons/ai';
import card from '../img/credit-card.svg'
import left from '../img/chevron-left.svg'



const Checkout = () => {
  const [btnState, setBtnState] = React.useState(false);
	const handleClick = () => {
		setBtnState(!btnState);
	};
	let toggleBtnClass = btnState ? 'active' : 'in-active';
  
  return (
		<div className='body-checkout'>
			<div className='container mx-auto flex flex-col items-center justify-center'>
				<h2 className='text-center md:text-4xl text-white py-8 font-extrabold '>
					SAVE ANIMALS
					<br /> FACING EXTINCTION
					<div className='underline'></div>
				</h2>

				<div className=' shadow-2xl bg-white extinction-checkout p-8 '>
					<h3 className='md:text-3xl font-extrabold mb-4 leading-10'>
						Support Save Animals Facing Extinction!
					</h3>
					<p className='leading-7'>
						Please chip in $5 or more now to help us fight back against poachers
						and win the race against extinction. <br />
						This will save lives:
					</p>
					<div>
						<h4 className='font-extrabold mt-8'>Choose an amount:</h4>
						<p className='mb-3 leading-7'>
							Your contribution will benefit Save Animals Facing Extinction.
						</p>
						<div className='md:grid grid-cols-4 gap-2 checkout-box  '>
							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$15
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$25
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$50
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$100
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$250
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$500
							</button>

							<button
								className={`btn ${toggleBtnClass} font-extrabold`}
								onClick={handleClick}>
								{' '}
								$1000
							</button>

							<div className='amount-checkout text-center p-4'>
								<input
									type='text'
									placeholder='$'
									className='w-20 checkout-input'
								/>
							</div>
						</div>
						<div>
							<div>
								<h4 className='text-checkout font-extrabold my-4'>
									Make it monthly!
								</h4>
							</div>
							<div className='flex item-center justify-between'>
								<button
									className={`btn ${toggleBtnClass} p-2 font-extrabold w-80`}
									onClick={handleClick}>
									{' '}
									Yes, count me in!
								</button>
								<button
									className={`btn ${toggleBtnClass} p-2 font-extrabold w-80`}
									onClick={handleClick}>
									{' '}
									No, count me out!
								</button>
							</div>
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
