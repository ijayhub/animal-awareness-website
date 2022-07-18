import React from 'react'


const Button = () => {
    const [btnState, setBtnState] = React.useState(false);
		const handleClick = () => {
			setBtnState((btnState) => !btnState);
		};
		let toggleBtnClass = btnState ? 'active' : '';
  return (
		<div>
			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$15
			</button>

			<button
				className={` btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$25
			</button>

			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$50
			</button>

			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$100
			</button>

			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$250
			</button>

			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}>
				{' '}
				$500
			</button>

			<button
				className={`btn ${toggleBtnClass}`}
				onClick={handleClick}> 
				{' '}
				$1000
			</button>
		</div>
	);
}

export default Button
