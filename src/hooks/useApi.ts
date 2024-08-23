import axios from 'axios';
import { UserDTO } from '../types/UserDTO';

const api = axios.create({
	baseURL: '/auth'
  });

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.post('/user/validate-token', token);
		return response.data;
	  },
	signin: async (email: string, password: string) => {
		const response = await api.post('/user/login', {email, password});
		return response.data;
	},
	register: async (userDTO: UserDTO) =>{
		try{
			console.log(userDTO)
			const response = await api.post('/user/register', userDTO)
			return response.data;
		}catch{
			return false
		}
	}
});
