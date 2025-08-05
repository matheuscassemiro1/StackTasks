import React from "react";
import './styles.css';
import { LoginForm } from "../../components/loginForm";

export const Login: React.FC = () => {
    return (
        <>
            <title>StackTasks | Login</title>
            <div className="div-welcome">
                <LoginForm />
            </div>
        </>
    );
}
