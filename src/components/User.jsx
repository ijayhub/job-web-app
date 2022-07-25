import React from 'react'
import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

import UserAdd from './UserAdd'
import Update from './Update'


const User = () => {
	const [position, setPosition] = React.useState('');
	const [company, setCompany] = React.useState('');
	const [date, setDate] = React.useState('');
	const [status, setStatus] = React.useState('status');
	// const [show, setShow] = React.useState(false);
	const [jobs, setJobs] = useLocalStorage('jobs', []);
	const [isPending, setIsPending] = useState(false);
	const [isEditing, setIsEditing] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (position && company) {
			const job = {
				id: new Date().getTime().toString(),
				position,
				company,
				date,
				status,
			};

			setJobs((jobs) => {
				setIsPending(true);
				return [...jobs, job];
			});
			setPosition('');
			setCompany('');
			setDate('');
			// setIsPending(false);
		} else {
			// console.log('')
		}
	};
	setTimeout(() => {
		if (isPending) {
			setIsPending(false);
		}
	}, 400);

	// function for the handleDelete
	const handleDelete = (id) => {
		const newJob = jobs.filter((job) => job.id !== id);
		setJobs(newJob);
    };
    // still working on the edit function
	const handleUpdate = (job) => {
		
		setIsEditing({...jobs,[job.id]:job});
    };
    // .........................//

	return (
		<>
			<div className='container mx-auto '>
				<div className='flex items-center justify-between mb-8 mx-2'>
					<div className='nav flex items-center'>
						<div className=' text-white w-14 p-2 rounded-lg shadow-md text-center font-bold nav-icon'>
							J
						</div>
						<span className='px-2 nav-text font-bold'>JobCR</span>
					</div>
					<div>
						<a href='/'>
							<button className=' p-2 rounded-lg shadow-lg btn-logout text-white'>
								Logout
							</button>
						</a>
					</div>
				</div>
				<div>
					<form
						className='md:grid grid-cols-3 gap-7 rounded-lg '
						onSubmit={handleSubmit}>
						<input
							type='text'
							name='text'
							id='text'
							className='border form-user rounded-lg'
							value={position}
							onChange={(e) => setPosition(e.target.value)}
							placeholder='position'
						/>
						<input
							type='text'
							name='text'
							id='text'
							className=' border form-user rounded-lg'
							value={company}
							onChange={(e) => setCompany(e.target.value)}
							placeholder='company'
						/>
						<input
							type='date'
							name='date'
							id='date'
							className=' border form-user rounded-lg'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
						<select
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							className='form-user'>
							<option value='status' disabled>
								status
							</option>
							<option value='interviewed'>Interviewed</option>
							<option value='pending'>Pending</option>
							<option value='declined'>Declined</option>
						</select>

						{!isPending && (
							<button
								type='submit'
								className='hero-btn text-white md:w-32 form-user rounded-lg mx-2'>
								Add Job
							</button>
						)}
						{isPending && (
							<button
								disabled
								className='hero-btn text-white md:w-40 form-user rounded-lg'>
								Adding Job...
							</button>
						)}
					</form>
					{jobs && (
						<UserAdd
							jobs={jobs}
							handleDelete={handleDelete}
							handleUpdate={handleUpdate}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default User
