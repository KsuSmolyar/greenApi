import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Credentials } from "../api/types";
import { ApiService } from "../api/apiService";
import { LOCAL_STORAGE_CREDENTIALS_KEY } from "../constants";

type AuthorizationContextValue = {
	setCredentials: (credentials: Credentials) => void
	isAuthorized: boolean
	apiService: ApiService | null
	isLoading: boolean
}

const AuthorizationContext = createContext<AuthorizationContextValue>({
	setCredentials: () => { },
	isAuthorized: false,
	apiService: null,
	isLoading: false,
});

export const AuthorizationContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [credentials, setCredentials] = useState<Credentials | null>(null);
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [isLoading, setIsLoading] = useState(false);

	const apiService = useMemo(() => {
		const currentCredentials = localStorage.getItem(LOCAL_STORAGE_CREDENTIALS_KEY);
		if (currentCredentials) {
			setIsLoading(true)
			return new ApiService(JSON.parse(currentCredentials));
		}
		if (credentials) {
			localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, JSON.stringify(credentials))
			setIsLoading(true)
			return new ApiService(credentials);
		}
		return null
	}, [credentials]);

	useEffect(() => {
		if (apiService) {
			apiService.getAccountInfo()
				.then(res => {
					if (res?.stateInstance === "authorized") {
						setIsAuthorized(true);
					}
				})
				.catch(() => {
					localStorage.removeItem(LOCAL_STORAGE_CREDENTIALS_KEY)
					setCredentials(null)
					alert("Ошибка авторизации, возможно были введены неверные данные")
					console.error("Ошибка авторизации")
				})
				.finally(() => setIsLoading(false))
		}
	}, [apiService])

	return (
		<AuthorizationContext.Provider value={{ setCredentials, isAuthorized, apiService, isLoading }}>
			{children}
		</AuthorizationContext.Provider>
	)
}

export const useAuthorizationContext = () => {
	const data = useContext(AuthorizationContext);
	return data;
}


