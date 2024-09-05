import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import './Home.css';

export const Home = () => {
	const auth = useContext(AuthContext);

	return (
		<div className="home-container">
			<h2>Página privada</h2>
			<p>Token: {localStorage.getItem('authToken')}</p>
			<p>ID: {auth.userDTO?.id}</p>
			<p>Nome: {auth.userDTO?.name}</p>
			<p>Email: {auth.userDTO?.email}</p>
			<p>Tipo: {auth.userDTO?.role}</p>
		</div>
	);
};
