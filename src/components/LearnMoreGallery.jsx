import React from 'react'
import {data} from '../../data'
import Gallery from './Gallery';

const LearnMoreGallery = () => {
    const[animals,setAnimals]=React.useState(data)
    return (
			<>
				<section className='container mx-auto'>
					<div className=' text-center mt-8 font-bold leading-6'>
						<h4>LEARN MORE ABOUT</h4>
						<h2 className='text-gallery  md:text-4xl tracking-widest'>
							EXTINCT & ENDANGERED ANIMALS
						</h2>
					</div>
                    <div className='mt-8'>
                        <Gallery animals={animals} />
					</div>
				</section>
			</>
		);
}

export default LearnMoreGallery
