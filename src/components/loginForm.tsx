import React, { useState } from "react";
import './loginForms.css'
import { Button, Input } from "../styles/global";

export const LoginForm: React.FC = () => {
    type FormLogin = {
        login?: string,
        senha?: string
    }

    const [formIsValid, setValidity] = useState<boolean>(false);

    const [formLogin, setForm] = useState<FormLogin>({
        login: undefined,
        senha: undefined
    });

    const [errosForm, setErro] = useState<string[]>([]);

    function validateLoginForm(): boolean {
        let errosTemp: string[] = []
        if (!formLogin.login || formLogin.login.length < 4) {
            errosTemp.push("O login é inválido.");
        }
        if (!formLogin.senha || formLogin.senha.length < 6) {
            errosTemp.push("A senha é inválida.");
        }
        setErro(errosTemp);
        setValidity(errosTemp.length < 1);
        return errosTemp.length < 1;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        if (validateLoginForm()) {
            console.log("form ok, submitted");
            console.log(formLogin);
        }
    }

    return (
        <>
            <h2>Log in</h2>
            {
                errosForm.map(erro => {
                    return <span id={`error ${erro}`} className="error-message">{erro}</span>
                })
            }
            <form className="formulario" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="login"
                    placeholder="Login"
                    value={formLogin.login}
                    onChange={handleChange}></Input>
                <Input
                    type="password"
                    name="senha"
                    placeholder="********"
                    value={formLogin.senha}
                    onChange={handleChange} onBlur={validateLoginForm}></Input>
                <Button disabled={!formIsValid} type="submit" $primary>Entrar</Button>
            </form>
        </>
    )
}