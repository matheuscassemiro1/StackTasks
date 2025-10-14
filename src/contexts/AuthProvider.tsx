import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";


export const AuthContext = createContext<ReturnType<typeof useAuth> | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const tema = useAuth();
    return <>
        <AuthContext.Provider value={tema}>
            {children}
        </AuthContext.Provider>
    </>
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used within a ThemeProvider");
    return context;
}