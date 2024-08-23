import { createContext } from "react";
import {UserDTO} from '../../types/UserDTO'

export type AuthContextType = {
	userDTO: UserDTO | null;
	signin: (email: string, password: string) => Promise<boolean>;
	signout: () => void;
	register: (userDTO: UserDTO) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);
