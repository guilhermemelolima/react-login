import {  useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { UserDTO } from "../../types/UserDTO"
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({children} : {children: JSX.Element}) => {

	const [userDTO, setUserDTO] = useState<UserDTO | null>(null);
	const api = useApi();

	const signout = () => {
		setUserDTO(null);
		setToken('');
	  }

	useEffect(()=>{
		const validateToken = async () => {
			const storageData = localStorage.getItem('authToken');
			if(storageData){
				const data = await api.validateToken(storageData);
				if(data){
					setUserDTO(data)
				}
			}
		}
		validateToken()
	},[])

	const signin = async (email: string, password: string) => {
		const data = await api.signin(email, password);
		if(data.userDTO && data.token){
			setUserDTO(data.userDTO);
			setToken(data.token)
			return true;
		}
		return false;
	}

	const register = async (userDTO: UserDTO)=> {
		const data = await api.register(userDTO);
		if(data){
			return true;
		}else{
			return false;
		}
	}

	const setToken = (token: string) => {
		localStorage.setItem('authToken', token)
	}

	return(
		<AuthContext.Provider value={{ userDTO, signin, signout, register}}>
			{children}
		</AuthContext.Provider>
	)
}
