import React from 'react'
import Navbar from './Navbar';

const Update = () => {
	const [position, setPosition] = React.useState('');
	const [company, setCompany] = React.useState('');
	// const [date, setDate] = React.useState('');
    const [status, setStatus] = React.useState('status');
    const [edit, setEdit] = React.useState(false);
    

	const handleSubmit = (e) => {
		e.preventDefault();
		setEdit(true);
		setPosition('')
		setCompany('')
		setDate('')
	};
	setTimeout(() => {
		if (edit) {
			setEdit(false);
		}
	}, 400);
	

	return (
		<>
			<div className='mb-20'>
				<div className='nav flex items-center mx-4'>
					<a href='/'>
						<div className=' text-white w-14 p-2 rounded-lg shadow-md text-center font-bold nav-icon'>
							J
						</div>
					</a>
					<span className='px-2 nav-text font-bold'>JobCR</span>
				</div>
			</div>
			<div>
				<a href='User' className='cursor-pointer '>
					<button className='text-white bg-black  p-1 w-56 rounded-lg mb-8 mx-4'>
						Go back To Dashboard
					</button>
				</a>
			</div>
			<form onSubmit={handleSubmit} className='p-6 shadow-2xl'>
				<h3 className='nav-text text-center font-bold'>Edit Job</h3>
				<div>
					<label
						htmlFor='text'
						className='block my-4 label  nav-text font-bold'>
						Position
					</label>
					<input
						type='text'
						name='text'
						id='text'
						className='email p-1'
						value={position}
						onChange={(e) => setPosition(e.target.value)}
						placeholder='position'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='text'
						className='block mb-2 label my-4 nav-text font-bold'>
						Company
					</label>
					<input
						type='text'
						name='text'
						id='text'
						className='email p-1'
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						placeholder='Company'
						required
					/>
				</div>
				<div className='w-28'>
					<label
						htmlFor='text'
						className='block mb-2 label my-4 nav-text font-bold'>
						Status
					</label>
					<select
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						className='email w-11 p-1'>
						<option value='status' hidden>status</option>
						<option value='interviewed'>Interviewed</option>
						<option value='pending'>Pending</option>
						<option value='declined'>Declined</option>
					</select>
				</div>
				<div className='text-center'>
					{!edit && (
						<button
							type='submit'
							className='hero-btn text-white md:w-32 form-user rounded-lg my-4 '>
							Edit
						</button>
					)}
					{edit && (
						<button
							disabled
							className='hero-btn text-white md:w-32 form-user rounded-lg my-4 '>
							Editing...
						</button>
					)}
				</div>
			</form>
		</>
	);
}

export default Update
