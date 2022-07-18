import React from 'react'
import fb from '../img/facebook (3).svg'
import tw from '../img/twitter (2).svg'
import yt from '../img/youtube.svg'

const Footer = () => {
    return (
			<div>
				<footer className='bg-footer p-20 flex flex-col items-center justify-center'>
					<div className=' flex gap-8 items-center justify-center social text-white'>
						<a href='https://facebook.com' target='_blank'>
							<div className='social-icon'>
								<img src={fb} alt='facebook' />
							</div>
						</a>
						<a href='https://twitter.com' target='_blank'>
							<div className='social-icon'>
								<img src={yt} alt='youtube' />
							</div>
						</a>
						<a href='https://youtube.com'>
							<div className='social-icon'>
								<img src={tw} alt='twitter' />
							</div>
						</a>
					</div>
					<div>
						<p className='border text-footer mt-6 p-3 font-extrabold text-center'>
							To save animals about facing Extinction
						</p>
					</div>
					<p className='text-footer1 mt-4 font-extrabold'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit
						voluptatibus adipisci.
                </p>
                <div className='footer-term mt-8 text-sm'>
                    <span>Privacy Policy | Term of Use</span>
                </div>
				</footer>
			</div>
		);
}

export default Footer