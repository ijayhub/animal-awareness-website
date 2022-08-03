import React from 'react'
import chevron from '../img/chevron-right (1).svg' 
import top from '../img/top.png'


const Gallery = ({animals}) => {
  return (
		<section
			className='grid gap-4 grid-cols-3 grid-rows-3 animal-card '
			id='gallery'>
			{animals.map((animal) => (
				<div className='container' key={animal.id}>
					<div className='container scale-in-center'>
						<img
							src={animal.img}
							alt='animal'
							className='image'
							style={{ width: '500px', height: '300px' }}
						/>
						<div className='overlay'>
							<div className='text'>
								<h3 className='animal-name md:text-3xl font-bold mb-4'>
									{animal.name}
								</h3>
								<p className='font-mono text-sm mb-2'>{animal.description}</p>
								<div className='chevron-right'>
									<a href={animal.Link} target='_blank'>
										<img src={chevron} alt='chevron-right' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className='flex items-center justify-end m-10 top'>
				<a href='#'>
					<img src={top} alt='top' width='50px' height='50px' />
				</a>
			</div>
		</section>
	);
}

export default Gallery
