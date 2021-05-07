import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function LogIn({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		evt.preventDefault();
		try {
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<div>
			<div className='login-form' onSubmit={handleSubmit}>
				<Form autoComplete='off' className="login-form">
					<Label>Email</Label>
					<FormGroup>
					<Input
						type='text'
						name='email'
						value={credentials.email}
						onChange={handleChange}
						required
					/>
					</FormGroup>
					<Label>Password</Label>
					<FormGroup>
					<Input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						required
					/>
					</FormGroup>
					<Button type='submit' size="sm" color="warning">LOG IN</Button>
					<div className="text-center">
						<a href="/">Sign Up</a>
						<span className="p-2">|</span>
						<a href="/">Forgot Password</a>
						</div>
				</Form>
			</div>
			<p className='error-message'>&nbsp;{error}</p>
		</div>
	);
}
