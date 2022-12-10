import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { IHeaders, INewUsers, IUsers } from "../interfaces/users";
import api from '../service/api';

const UserContext = createContext({});

interface Props {
	children?: React.ReactNode;
};


export const UserProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = usePersistedState("user", null);
	const [token, setToken] = usePersistedState("token", null);

	const headers: IHeaders = {
		authorization: `Bearer ${token}`
	}


	const login = async (form: IUsers): Promise<void> => {
		try {
			const { data } = await api.post('/login', { ...form });


			setToken(data.token);
			setUser(data.user);
		} catch (e: any) {
			return e;
		}
	}

	const logout = (): void => {
		setToken(null);
		setUser(null);
	}

	const singup = async (form: INewUsers): Promise<void> => {
		try {
			await api.post('/user', { ...form });

		} catch (e) {
			throw e;
		}
	}

	const data: object = {
		user,
		login,
		singup,
		logout,
		headers,
		token,
		setToken
	}

	return (
		<UserContext.Provider value={data}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;