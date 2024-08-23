import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login =() =>{
	const auth = useContext(AuthContext);
	const navigate = useNavigate()

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const handleLogin= async () => {
		if (email && password) {
			const isLogged = await auth.signin(email, password);
			if(isLogged){
				navigate('/')
			}else{
				alert('Não deu certo')
			}
		}
	}

	return(
		<div>
			<h1>Login public</h1>
			<input
				type="text"
				value={email}
				placeholder="Digite o email"
				onChange={handleEmailInput}
			/> <br />
			<input
				type="password"
				value={password}
				placeholder="Digite a password"
				onChange={handlePasswordInput}
			/> <br />
			<button onClick={handleLogin}>Logar</button>
		</div>
	)
}
