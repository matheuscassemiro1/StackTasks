import React, { useEffect, useReducer, useState } from "react";
import './loginForm.css'
import { Button, Input } from "../styles/global";

export const LoginForm: React.FC = () => {
    type FormLogin = {
        login?: string,
        senha?: string
    }

    const [formLogin, setForm] = useState<FormLogin>({
        login: undefined,
        senha: undefined
    });

    const [errosForm, setErro] = useState<string[]>([])

    function validateForm() {
        let errosTemp: string[] = []
        if (!formLogin.login || formLogin.login.length < 4) {
            errosTemp.push("O login é inválido.")
        }
        if (!formLogin.senha || formLogin.senha.length < 6) {
            errosTemp.push("A senha é inválida.")
        }
        setErro(errosTemp);
        return errosTemp.length < 1;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (validateForm()) {
            console.log("form ok, submitted");
        }
    }

    return (
        <>
            <h2>Log in</h2>
            {
                errosForm.map(erro => {
                    return <span className="error-message">{erro}</span>
                })
            }
            <form className="formulario" onSubmit={handleSubmit}>
                <Input
                    name="login"
                    placeholder="Login"
                    value={formLogin.login}
                    onChange={handleChange}></Input>
                <Input
                    name="senha"
                    placeholder="********"
                    value={formLogin.senha}
                    onChange={handleChange} onBlur={validateForm}></Input>
                <Button type="submit" $primary>Entrar</Button>
            </form>
        </>
    )
}