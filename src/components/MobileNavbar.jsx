import React from 'react'
import close from '../img/x (2).svg'


const MobileNavbar = ({showNav,active}) => {
	return (
		<>
			<ul
				className={
					active
						? 'flex-col flex-center flex items-center gap-6 p-8 justify-center text-white text-xl md:hidden'
						: 'hidden'
				}>
				<div className=''>
					<img
						src={close}
						alt={close}
						onClick={showNav}
						className='cursor-pointer pr-5'
					/>
				</div>
				<li>
					<a href='/' className='text-sm'>
						HOME
					</a>
				</li>
				<li>
					<a href='#gallery' className='text-sm'>
						GALLERY
					</a>
				</li>
				<li>
					<a href='#news-letter' className='text-sm'>
						UPDATE
					</a>
				</li>
				<a href='Checkout'>
					<div>
						<button className='btn-Navbar p-2 rounded-lg border-none text-sm'>
							Contribute
						</button>
					</div>
				</a>
			</ul>
		</>
	);
}

export default MobileNavbar
