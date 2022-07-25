import React from 'react'
import hero from '../img/hero-img.svg'
import Navbar from '../components/Navbar';


const Hero = () => {
	return (
		<>
			<Navbar/>

			<div className="grid md:grid-cols-2 hero-container">
				<div>
					<h1 className='text-5xl font-bold hero-title'>Job Tracking App</h1>
					<p className='mt-4 leading-8 text-justify'>
						Uniquely extend cross-unit alignments vis-a-vis bleeding-edge testing
						procedures. Energistically redefine stand-alone content rather than
						enterprise convergence. Conveniently maximize economically sound
						imperatives with 24/7 users. 
					</p>
					<a href="Login" >
						<button className="hero-btn p-4 text-white rounded-lg shadow-md cursor-pointer mt-4 ">Login/Register</button>
					</a>
				</div>
					<div>
						<img src={hero} alt="hero-img" className="mx-20 hero-img" style={{ width:'600px', height:'450px'} } />
					</div>
				
			</div>
		</>
		);
}

export default Hero
