import { ChangeEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { UserDTO } from "../types/UserDTO"

export const Register =() =>{
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()
	const auth = useContext(AuthContext)

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
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
			if(isRegistered){
				navigate('/login')
			}else{
				alert('Não deu certo')
			}
		}else{
			alert("todos os campos devem estar preenchidos")
		}
	}

	return(
		<>
			<h1>Register public</h1>
			<input
				type="text"
				placeholder='Digite o nome
				'value={name}
				onChange={handleNameInput}
			/> <br />

			<input
				type="email"
				placeholder='Digite o email
				'value={email}
				onChange={handleEmailInput}
			/> <br />
			<input
				type="password"
				placeholder='Digite a senha
				'value={password}
				onChange={handlePasswordInput}
			/> <br />
			<button onClick={handleRegister}>Cadastrar</button>
		</>
	)
}
