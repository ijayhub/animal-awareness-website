import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Home from './components/Home';


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