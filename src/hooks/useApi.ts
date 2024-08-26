import axios from 'axios';
import { UserDTO } from '../types/UserDTO';

const api = axios.create({
	baseURL: import.meta.env.VITE_URL_API
  });

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.post('/auth/user/validate', {}, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	},	
	signin: async (email: string, password: string) => {
		const response = await api.post('/auth/user/login', {email, password});
		return response.data;
	},
	register: async (userDTO: UserDTO) =>{
		try{
			const response = await api.post('/auth/user/register', userDTO)
			return response.data;
		}catch{
			return false
		}
	}
});
