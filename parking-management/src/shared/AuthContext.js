import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);

    const login = (role) => {
        setUserRole(role);  // Actualiza el rol del usuario
    };

    const logout = () => {
        setUserRole(null);  // Cierra la sesión
    };

    return (
        <AuthContext.Provider value={{ userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
