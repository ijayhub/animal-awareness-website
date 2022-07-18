import React from 'react'
import close from '../img/x (2).svg'


const MobileNavbar = ({showNav,active}) => {
  return (
		<>
			<ul
				className={
					active
						? 'flex-col flex-center flex items-center gap-8 p-12 justify-center text-white text-xl md:hidden'
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
					<a href='/'>HOME</a>
				</li>
				<li>
					<a href='#gallery'>GALLERY</a>
				</li>
				<li>
					<a href='#news-letter'>UPDATE</a>
				</li>
				<a href='Checkout'>
					<div>
						<button className='btn-Navbar p-4 rounded-lg border-none'>
							Contribute
						</button>
					</div>
				</a>
			</ul>
		</>
	);
}

export default MobileNavbar
