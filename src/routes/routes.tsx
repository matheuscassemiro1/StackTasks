import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
/* import { Home } from "../pages/home/home"; */
import "./routes.css"
import { DefaultDiv } from "../styles/global";
import { ProjectsContainer } from "../containers/ProjectsContainer";
import { useThemeContext } from "../contexts/UseTheme";

export const AppRoutes: React.FC = () => {
    const {darkMode} = useThemeContext();

    return (
        <BrowserRouter>
                <DefaultDiv $dark={darkMode}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<ProjectsContainer />} />
                        {/*                     <Route path="/home-old" element={<Home />} /> */}
                    </Routes>
                </DefaultDiv>
        </BrowserRouter>
    );
}