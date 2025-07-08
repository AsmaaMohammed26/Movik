import { createContext ,  useContext , useState} from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext(null);

export function useToken() {
    return useContext(userContext);
}


export default function UserProvider({ children }) {

    const navigate = useNavigate();
    const [  token, setToken] = useState(() => {
        return localStorage.getItem("token") || null;
    });
    

    function logOut() {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/login");

    }

    return (
        <userContext.Provider value={{ token, setToken , logOut }}>
            {children}
        </userContext.Provider>
    );
}