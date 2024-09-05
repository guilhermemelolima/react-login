import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const handleLogin = async () => {
		if (email && password) {
			const isLogged = await auth.signin(email, password);
			if (isLogged) {
				navigate('/');
			} else {
				setError('Login failed. Please try again.');
			}
		} else {
			setError('Email and password are required.');
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<input
				type="email"
				value={email}
				placeholder="Email"
				onChange={handleEmailInput}
			/>
			<input
				type="password"
				value={password}
				placeholder="Password"
				onChange={handlePasswordInput}
			/>
			<button onClick={handleLogin}>Login</button>
			{error && <p className="alert">{error}</p>}
		</div>
	);
}
