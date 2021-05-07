import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Form } from 'reactstrap';


export default function AuthPage({ setUser }) {
		const hStyle = { 
			color: 'gold',
		 };

	return (
		<main>
			<Form className="login-form">
			<h1 className="header">
			<span style={ hStyle }>My</span>Dailies
			</h1>
			<SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
			</Form>
		</main>
	);
}
