import React from "react";
import './loginForm.css'
import { Button } from "../styles/global";

export const LoginForm: React.FC = () => {
    return (
        <div className="div-login">
            <h1>Log in</h1>
            <input type="text" id="login" placeholder="Login"/>
            <input type="password" id="senha" placeholder="********"/>
            <Button $primary>Entrar</Button>
        </div>
    )
}