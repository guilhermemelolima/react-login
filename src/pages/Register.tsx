import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../types/UserDTO";

export const Register = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const auth = useContext(AuthContext);

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const handleRegister = async () => {
		if (email && password && name) {
			const newUser: UserDTO = {
				name: name,
				email: email,
				password: password,
				role: "USER"
			}
			const isRegistered = await auth.register(newUser);
			if (isRegistered) {
				navigate('/login');
			} else {
				setError('Registration failed. Please try again.');
			}
		} else {
			setError('All fields are required.');
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={handleNameInput}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={handleEmailInput}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={handlePasswordInput}
			/>
			<button onClick={handleRegister}>Register</button>
			{error && <p className="alert">{error}</p>}
		</div>
	);
}
