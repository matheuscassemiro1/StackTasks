import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
import "./routes.css"
import { DefaultDiv } from "../styles/global";
import { ProjectsContainer } from "../containers/ProjectsContainer";
import { useThemeContext } from "../contexts/ThemeProvider";
import { useAuthContext } from "../contexts/AuthProvider";

export const AppRoutes: React.FC = () => {
    const {darkMode} = useThemeContext();
    const {authenticatedUser} = useAuthContext();
    return (
        <BrowserRouter>
                <DefaultDiv $dark={darkMode}>
                    <Routes>
                        <Route path="/" element={<Login />} />

                        <Route path="/home" element={authenticatedUser ? <ProjectsContainer /> : <Navigate to={'/'}></Navigate>} />
                    </Routes>
                </DefaultDiv>
        </BrowserRouter>
    );
}