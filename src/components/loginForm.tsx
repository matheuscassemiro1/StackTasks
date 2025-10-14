import React, { useState } from "react";
import './loginForms.css'
import { Button, Input } from "../styles/global";
import { ErrorsForm } from "../types/errorsForm";
import { useAuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";


export const LoginForm: React.FC = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    type FormLogin = {
        login?: string,
        senha?: string
    }

    const [formIsValid, setValidity] = useState<boolean>(false);

    const [formLogin, setForm] = useState<FormLogin>({
        login: undefined,
        senha: undefined
    });

    const [errorsForm, setErrors] = useState<ErrorsForm[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
        let errorsTemp: ErrorsForm[] = errorsForm.filter(e => e.name !== name);
        switch (name) {
            case 'login':
                if (!formLogin.login || value.length < 4) {
                    errorsTemp.push({ name: "login", message: "O login é inválido. Insira ao menos 4 letras." });
                }
                break;
            case 'senha':
                if (!formLogin.senha || value.length < 5) {
                    errorsTemp.push({ name: "senha", message: "A senha é inválida. Insira ao menos 5 caracteres." });
                    break;
                }
        }
        setErrors(errorsTemp);
        if (formLogin.login && formLogin.senha && errorsTemp.length < 1) {
            setValidity(errorsTemp.length < 1);
        } else {
            setValidity(false);
        }
    };

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        if (formIsValid) {
            console.log("form ok, submitted");
            const tryLogin = login(formLogin.login!, formLogin.senha!);
            if (tryLogin.sucesso) {
                navigate('/home');
            } else {
                alert(tryLogin.mensagem)
            }
        }
    }

    return (
        <>
            <h2>Log in</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                {
                    errorsForm.map(error => {
                        if (error.name === "login") return <span key={error.name} id={`error ${error}`} className="error-message">{error.message}</span>
                    })
                }
                <div className="input-case">
                    <Input
                        type="text"
                        name="login"
                        placeholder="Login"
                        className={`${errorsForm.find(e => e.name === 'login') ? 'invalid-input' : ''} ${formLogin.login && !errorsForm.find(e => e.name === 'login') ? 'valid-input' : ''}`}
                        onChange={handleChange}></Input>
                    <span className={`${errorsForm.find(e => e.name === 'login') ? 'invalid-icon' : ''} ${formLogin.login && !errorsForm.find(e => e.name === 'login') ? 'valid-icon' : ''}`}></span>
                </div>
                {
                    errorsForm.map(error => {
                        if (error.name === "senha") return <span key={error.name} id={`error ${error}`} className="error-message">{error.message}</span>
                    })
                }
                <div className="input-case">
                    <Input
                        type="password"
                        name="senha"
                        placeholder="********"
                        className={`${errorsForm.find(e => e.name === 'senha') ? 'invalid-input' : ''} ${formLogin.senha && !errorsForm.find(e => e.name === 'senha') ? 'valid-input' : ''}`}
                        onChange={handleChange}></Input>
                    <span className={`${errorsForm.find(e => e.name === 'senha') ? 'invalid-icon' : ''} ${formLogin.senha && !errorsForm.find(e => e.name === 'senha') ? 'valid-icon' : ''}`}></span>
                </div>
                <Button disabled={!formIsValid} type="submit" $primary>Entrar</Button>
            </form>
        </>
    )
}