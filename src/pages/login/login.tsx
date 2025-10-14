import React, { useState } from "react";
import './login.css';
import { LoginForm } from "../../components/loginForm";
import { RegisterForm } from "../../components/registerForm";

export const Login: React.FC = () => {
    const [wantsRegister, setWantsRegister] = useState<boolean>(false);

    function register(){
        setWantsRegister(!wantsRegister);
    }
    
    return (
        <>
            <title>StackTasks | Login</title>
            <div className="div-welcome">
                <div className="div-login">
                    {wantsRegister ? <RegisterForm registered={register} /> : <LoginForm />}
                    {wantsRegister ? <button onClick={() => setWantsRegister(false)} className="botao-auxiliar">Já possuo uma conta!</button> : <button onClick={() => setWantsRegister(true)} className="botao-auxiliar">Não possui uma conta? Cadastre-se agora</button>}
                </div>
            </div>
        </>
    );
}
