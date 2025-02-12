import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Credentials } from "../api/types";
import { ApiService } from "../api/apiService";
import { LOCAL_STORAGE_CREDENTIALS_KEY, LOCAL_STORAGE_USER_PHOTO } from "../constants";

type AuthorizationContextValue = {
	setCredentials: (credentials: Credentials) => void
	apiService: ApiService | null
	isLoading: boolean
	isDone: boolean,
	accountData: AccountDataType,
	setUserName: (name: string) => void,
	setAvatar: (imgSrc: string) => void,
}

const AuthorizationContext = createContext<AuthorizationContextValue>({
	setCredentials: () => { },
	apiService: null,
	isLoading: false,
	isDone: false,
	accountData: {
		isAuthorized: false,
		avatar: "",
		name: ""
	},
	setUserName: () => { },
	setAvatar: () => { },
});

export type AccountDataType = {
	isAuthorized: boolean,
	avatar: string,
	name: string

}

export const AuthorizationContextProvider = ({ children }: { children: React.ReactElement }) => {
	const [credentials, setCredentials] = useState<Credentials | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [accountData, setAccountData] = useState<AccountDataType>({
		isAuthorized: false,
		avatar: "",
		name: ""
	})

	const setAvatar = (imgSrc: string) => {
		setAccountData(prev => ({ ...prev, avatar: imgSrc }));
		localStorage.setItem(LOCAL_STORAGE_USER_PHOTO, imgSrc);
	}

	const setUserName = (name: string) => {
		setAccountData(prev => ({ ...prev, name }));
	}

	const [isDone, setIsDone] = useState(false)
	const isFirstRenderRef = useRef(true)

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
		if (!isFirstRenderRef.current) return
		if (apiService) {
			isFirstRenderRef.current = false
			apiService.getAccountInfo()
				.then(res => {
					if (res?.stateInstance === "authorized") {
						const userNameFromLs = localStorage.getItem("userName");
						setAccountData({ avatar: res?.avatar, name: userNameFromLs || res?.phone, isAuthorized: false })
						setIsDone(true)

						return new Promise((resolve) => {
							setTimeout(() => {
								setAccountData(prev => ({ ...prev, isAuthorized: true }))
								resolve(null)
								setIsLoading(false)
							}, 3000)
						})
					}
				})
				.catch(() => {
					localStorage.removeItem(LOCAL_STORAGE_CREDENTIALS_KEY)
					setCredentials(null)
					setIsLoading(false)
					alert("Ошибка авторизации, возможно были введены неверные данные")
					console.error("Ошибка авторизации")
				})
				.finally(() => {
					setIsDone(false)
				})
		}
	}, [apiService])

	return (
		<AuthorizationContext.Provider value={{
			setCredentials, apiService, isLoading, isDone, accountData, setAvatar, setUserName
		}}>
			{children}
		</AuthorizationContext.Provider>
	)
}

export const useAuthorizationContext = () => {
	const data = useContext(AuthorizationContext);
	return data;
}


