import { ChangeEvent, useState } from "react"

export const Register =() =>{
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	return(
		<>
		<h1>Register public</h1>
			<input
				type="email"
				placeholder='Digite o email
				'value={email}
				onChange={handleEmailInput}
			/>
			<input
				type="text"
				placeholder='Digite o nome
				'value={name}
				onChange={handleNameInput}
			/>
			<input
				type="password"
				placeholder='Digite a senha
				'value={password}
				onChange={handlePasswordInput}
			/>
		</>
	)
}
