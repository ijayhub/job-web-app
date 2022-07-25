import React from 'react'
import trash from '../img/trash-2.svg';
import edit from '../img/edit.svg';
import {Link} from 'react-router-dom'

const UserAdd = ({ jobs, handleDelete,handleUpdate}) => {
	
	return (
		<div>
			{jobs.map((job) => (
				<div key={job.id} className='grid grid-cols-1 mt-8 border-b-2'>
					<table>
						<tr className='table-job table-title '>
							<th className='p-6 rounded-sm'>position </th> 
							<th className='p-6 rounded-sm'>company</th>
							<th className='p-6 rounded-sm'>Date</th>
							<th className='p-6 rounded-sm'>Status</th>
							<th className='p-6 rounded-sm'>Action</th>
						</tr>
						<tr className='table-inputs'>
							<td className='p-8 text-center'>{job.position}</td>
							<td className='p-8 text-center'>{job.company}</td>
							<td className='p-8 text-center'> {job.date}</td>
							<td className='p-8 text-center'> {job.status}</td>

							<div className='flex items-center table-icon cursor-pointer'>
								<td className='p-8 '>
                                    <a href="Update">
										<img src={edit} alt='edit' onClick={()=>handleUpdate(job.id)} />
									</a>
								</td>
								<td className='p-8 '>
									<img
										src={trash}
										alt='trash'
										onClick={() => handleDelete(job.id)}
									/>
								</td>
							</div>
						</tr>
					</table>
				</div>
			))}
		</div>
	);
}

export default UserAdd
