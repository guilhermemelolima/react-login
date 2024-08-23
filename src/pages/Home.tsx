import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

export const Home =() =>{
	const auth = useContext(AuthContext)

	return(
		<>
			<h2>Página privada</h2>
			<p>id: {auth.userDTO?.id}</p>
			<p>Nome: { auth.userDTO?.name}</p>
			<p>Email: {auth.userDTO?.email}</p>
			<p>Tipo: {auth.userDTO?.role}</p>
			<p>Senha: {auth.userDTO?.password}</p>
		</>
	)
}
