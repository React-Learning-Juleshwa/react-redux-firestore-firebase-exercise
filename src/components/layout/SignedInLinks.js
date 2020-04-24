import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/'>Create Project</NavLink>
			</li>
			<li>
				<NavLink to='/'>Sign Out</NavLink>
			</li>
			<li>
				<NavLink to='/' className='btn btn-floating pink lighten-1'>
					JUE
				</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;
