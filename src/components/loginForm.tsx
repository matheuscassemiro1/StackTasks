import React, { useState } from "react";
import './loginForms.css'
import { Button, Input } from "../styles/global";
import { ErroForm } from "../types/erroForm";

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

    const [errosForm, setErro] = useState<ErroForm[]>([]);

    function validateLoginForm(): boolean {
        let errosTemp: ErroForm[] = []
        if (!formLogin.login || formLogin.login.length < 4) {
            errosTemp.push({ campo: "login", mensagem: "O login é inválido." });
        }
        if (!formLogin.senha || formLogin.senha.length < 6) {
            errosTemp.push({ campo: "senha", mensagem: "A senha é inválida." });
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
            <form className="formulario" onSubmit={handleSubmit}>
                {
                    errosForm.map(erro => {
                        if (erro.campo === "login") return <span id={`error ${erro}`} className="error-message">{erro.mensagem}</span>
                    })
                }
                <div className="input-case">
                    <Input
                        type="text"
                        name="login"
                        placeholder="Login"
                        className="valid-input"
                        value={formLogin.login}
                        onChange={handleChange}></Input>
                    <span className="valid-icon"></span>
                </div>
                {
                    errosForm.map(erro => {
                        if (erro.campo === "senha") return <span id={`error ${erro}`} className="error-message">{erro.mensagem}</span>
                    })
                }
                <div className="input-case">
                    <Input
                        type="password"
                        name="senha"
                        placeholder="********"
                        className="valid-input"
                        value={formLogin.senha}
                        onChange={handleChange} onBlur={validateLoginForm}></Input>
                    <span className="valid-icon"></span>
                </div>
                <Button disabled={!formIsValid} type="submit" $primary>Entrar</Button>
            </form>
        </>
    )
}