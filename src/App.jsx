import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Checkout from './comps/Checkout';
import Home from './comps/Home';


const App = () => {
   return (
			<div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='Checkout' element={<Checkout />}></Route>
					
				</Routes>
			</div>
		);
}

export default App