import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Credentials } from "../api/types";
import { ApiService } from "../api/apiService";

type AuthorizationContextValue = {
    setCredentials: (credentials: Credentials ) => void
    isAuthorized: boolean
    apiService: ApiService | null
    isLoading: boolean
}

const AuthorizationContext = createContext<AuthorizationContextValue>({
    setCredentials: () => {},
    isAuthorized: false,
    apiService: null,
    isLoading: false,
});

export const AuthorizationContextProvider = ({ children }: { children: React.ReactElement }) => {
    const [credentials, setCredentials] = useState<Credentials | null>(null);
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const isFirstRenderRef = useRef(true)
    
    const apiService = useMemo(() => {
        const currentCredentials = localStorage.getItem("credentials");
        if (currentCredentials) {
            setIsLoading(true)
            return new ApiService(JSON.parse(currentCredentials));
        }
        if (credentials) {
            localStorage.setItem("credentials", JSON.stringify(credentials))
            setIsLoading(true)
            return new ApiService(credentials);
        }
        return null
    }, [credentials]);

    useEffect(() => {
        if(!isFirstRenderRef.current) return
        if (apiService) {
            isFirstRenderRef.current = false
            apiService.getAccountInfo()
                .then(res => {
                    if (res?.stateInstance === "authorized") {
                        setIsAuthorized(true);
                        
                    }
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


