import React, { useState } from "react";
import "./loginForms.css"
import { Button, Input } from "../styles/global";
import { ErrorsForm } from "../types/errorsForm";


export const RegisterForm: React.FC = () => {
    type FormRegister = {
        nome?: string,
        login?: string,
        senha?: string
    }

    const [errors, setErrors] = useState<ErrorsForm[]>([]);

    const [isFormValid, setFormStatus] = useState<boolean>(false);

    const [formularioRegistro, setFormRegistro] = useState<FormRegister>({
        nome: undefined,
        login: undefined,
        senha: undefined
    });

    function handleRegister(e: React.FormEvent): void {
        e.preventDefault();
        if (validateRegisterForm()) {
            console.log("registrado");
        }
    }

    function validateRegisterForm(): boolean {
        let errosTemp: ErrorsForm[] = [];

        if (!formularioRegistro?.nome || formularioRegistro?.nome?.length < 3) {
            errosTemp.push({ name: "nome", message: "Preencha o nome com pelo menos 3 letras" });
        }
        if (!formularioRegistro?.login || formularioRegistro?.login?.length < 3) {
            errosTemp.push({ name: "login", message: "Preencha o login com mais de 3 letras" });
        }
        if (!formularioRegistro?.senha || formularioRegistro?.senha?.length < 6) {
            errosTemp.push({ name: "senha", message: "Preencha a senha com ao mínimo 6 dígitos" });
        }

        setErrors(errosTemp);
        setFormStatus(errosTemp.length < 1);
        return errosTemp.length < 1;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setFormRegistro((previousForm) => ({
            ...previousForm, [name]: value
        }));

        let errorsTemp = errors.filter(e => e.name !== name);
        switch (name) {
            case 'nome':
                if (!formularioRegistro?.nome || value.length < 4) {
                    errorsTemp.push({ name: "nome", message: "Preencha o nome com pelo menos 4 letras" });
                }
                break;
            case 'login':
                if (!formularioRegistro?.login || value.length < 4) {
                    errorsTemp.push({ name: "login", message: "Preencha o login com mais de 4 letras" });
                }
                break;
            case 'senha':
                if (!formularioRegistro?.senha || value.length < 6) {
                    errorsTemp.push({ name: "senha", message: "Preencha a senha com ao mínimo 6 dígitos" });
                }
                break;
        }
        setErrors(errorsTemp);
        if (formularioRegistro.nome && formularioRegistro.login && formularioRegistro.senha && errorsTemp.length < 1) {
            setFormStatus(errorsTemp.length < 1)
        } else {
            setFormStatus(false);
        }
    }

    return (
        <>
            <h2>Registro</h2>
            <form className="formulario" onSubmit={handleRegister}>
                {errors.map((erro) => {
                    if (erro.name === "nome") return <span className="error-message">{erro.message}</span>
                })}
                <div className="input-case">
                    <Input
                        name="nome"
                        type="text"
                        className={`${errors.find(e => e.name === 'nome') ? 'invalid-input' : ''} ${formularioRegistro.nome && !errors.find(e => e.name === 'nome') ? 'valid-input' : ''}`}
                        placeholder="Seu nome"
                        onChange={handleChange}></Input>
                    <span className={`${errors.find(e => e.name === 'nome') ? 'invalid-icon' : ''} ${formularioRegistro.nome && !errors.find(e => e.name === 'nome') ? 'valid-icon' : ''}`}></span>
                </div>
                {errors.map((erro) => {
                    if (erro.name === "login") return <span className="error-message">{erro.message}</span>
                })}
                <div className="input-case">
                    <Input
                        name="login" type="text"
                        placeholder="Login"
                        className={`${errors.find(e => e.name === 'login') ? 'invalid-input' : ''} ${formularioRegistro.login && !errors.find(e => e.name === 'login') ? 'valid-input' : ''}`}
                        onChange={handleChange}></Input>
                    <span className={`${errors.find(e => e.name === 'login') ? 'invalid-icon' : ''} ${formularioRegistro.login && !errors.find(e => e.name === 'login') ? 'valid-icon' : ''}`}></span>
                </div>
                {errors.map((erro) => {
                    if (erro.name === "senha") return <span className="error-message">{erro.message}</span>
                })}
                <div className="input-case">
                    <Input
                        name="senha"
                        type="password"
                        placeholder="********"
                        className={`${errors.find(e => e.name === 'senha') ? 'invalid-input' : ''} ${formularioRegistro.senha && !errors.find(e => e.name === 'senha') ? 'valid-input' : ''}`}
                        onChange={handleChange}></Input>
                    <span className={`${errors.find(e => e.name === 'senha') ? 'invalid-icon' : ''} ${formularioRegistro.senha && !errors.find(e => e.name === 'senha') ? 'valid-icon' : ''}`}></span>
                </div>
                <Button $primary disabled={!isFormValid}>Registrar</Button>
            </form>
        </>
    )
}