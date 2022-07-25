import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }
    
    

    return (
        <>
            <Navbar/>
				<div className='box-container shadow-lg rounded '>
					<div className='flex items-center mt-6'>
						<div className=' text-white w-14 p-2 rounded-lg shadow-md text-center font-bold nav-icon'>
							J
						</div>
						<span className='px-2 nav-text font-bold'>JobCR</span>
					</div>
					<h3 className='mt-4 text-2xl '>Login</h3>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='email' className='block mb-2 label'>
								Email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								className='email p-1'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Enter your email address'
								required
							/>
						</div>
						<div>
							<label htmlFor='password' className='block my-2 label'>
								Password
							</label>
							<input
								type='password'
								name='password'
                                id='password'
                                className='email p-1'
                                value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='Enter your password'
								required
							/>
                    </div>
                        <button
							type='submit'
							className='form-btn flex items-center justify-center hero-btn p-1 text-white rounded-sm shadow-md cursor-pointer my-4 w-96 bt'>
							<a href="User" className="cursor-pointer">Submit</a>
                        </button>
                        <div className='flex items-center justify-center my-4'>
							<p>
								Not a member yet?{' '}
								<span className='nav-text login-text'>
									<a href='SignUp'>Register</a>
								</span>
							</p>
						</div> 
					</form>
				</div>
			</>
		);
}

export default Login
