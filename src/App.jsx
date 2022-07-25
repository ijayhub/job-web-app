import Hero from './components/Hero';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import User from './components/User';
import Update from './components/Update';

let App = () => {
	return (
		<div className='container mx-auto mt-8'>
			<Routes>
				<Route path='/' element={<Hero />}></Route>
				<Route path='Login' element={<Login />}></Route>
				<Route path='SignUp' element={<SignUp />}></Route>
				<Route path='User' element={<User />}></Route>
				<Route path='Update' element={<Update />}></Route>
			</Routes>
		</div>
	);
};

export default App;
