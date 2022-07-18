import React from 'react'
import MobileNavbar from './MobileNavbar';
import menu from '../img/menu (2).svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = React.useState(false)
    const showNav = () => {
        setActive(!active)
    }
    return (
			<>
				<header className='flex items-center justify-around w-full bg-black p-4 shadow-lg '>
					<div className='text-nav font-bold md:text-3xl'>
						<h1 className='text-white'>
							Extinct_<span className='text-green-900'>Endangered</span>
						</h1>
					</div>
					<nav>
						<div className=' absolute right-0 md:hidden top-2'>
							<img
								src={menu}
								alt={menu}
								onClick={showNav}
								className=' px-5 cursor-pointer'
							/>
						</div>
						<ul className='hidden md:flex items-center justify-center  gap-8 p-4 uppercase text-white font-bold'>
							<li>
								<a href="/">HOME</a>
							</li>
							<li>
								<a href="#gallery">GALLERY</a>
							</li>
							<li>
								<a href="#news-letter">UPDATE</a>
							</li>
							<a href='Checkout'>
								<div>
									<button className='btn-Navbar p-4 rounded-lg border-none'>
										Contribute
									</button>
								</div>
							</a>
						</ul>

						<MobileNavbar showNav={showNav} active={active} />
					</nav>
				</header>
			</>
		);
}

export default Navbar
