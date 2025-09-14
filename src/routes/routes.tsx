import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Home } from "../pages/home/home";
import "./routes.css"
import { DefaultDiv } from "../styles/global";

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <DefaultDiv>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </DefaultDiv>
        </BrowserRouter>
    );
}