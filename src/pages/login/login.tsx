import React, { useEffect, useState } from "react";
import './styles.css';
import { LoginForm } from "../../components/loginForm";
import { RegisterForm } from "../../components/registerForm";

export const Login: React.FC = () => {
    const [wantsRegister, setWantsRegister] = useState<boolean>(false);

    useEffect(() => {
        console.log(wantsRegister)
    }, [])
    return (
        <>
            <title>StackTasks | Login</title>
            <div className="div-welcome">
                <div className="div-login">
                    {wantsRegister ? <RegisterForm /> : <LoginForm />}
                    {wantsRegister ? <a onClick={() => setWantsRegister(false)}>Realizar o login</a> : <a onClick={() => setWantsRegister(true)}>Não possui uma conta? Cadastre-se agora</a>}
                </div>
            </div>
        </>
    );
}
