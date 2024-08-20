import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"

export const Home =() =>{
	const auth = useContext(AuthContext)

	return(
		<>
			<h2>Página privada</h2>

			olá { auth.user?.name}
		</>
	)
}
