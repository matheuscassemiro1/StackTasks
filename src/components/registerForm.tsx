import React, { useState } from "react";
import "./loginForms.css"
import { Button, Input } from "../styles/global";
import { ErroForm } from "../types/erroForm";

export const RegisterForm: React.FC = () => {
    type FormRegister = {
        nome?: string,
        login?: string,
        senha?: string
    }

    const [errors, setErrors] = useState<ErroForm[]>([]);

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
        let errosTemp: ErroForm[] = [];

        if (!formularioRegistro?.nome || formularioRegistro?.nome?.length < 3) {
            errosTemp.push({ campo: "nome", mensagem: "Preencha o nome com pelo menos 3 letras" });
        }
        if (!formularioRegistro?.login || formularioRegistro?.login?.length < 3) {
            errosTemp.push({ campo: "login", mensagem: "Preencha o login com mais de 3 letras" });
        }
        if (!formularioRegistro?.senha || formularioRegistro?.senha?.length < 6) {
            errosTemp.push({ campo: "senha", mensagem: "Preencha a senha com ao mínimo 6 dígitos" });
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
    }

    return (
        <>
            <h2>Registro</h2>
            <form className="formulario" onSubmit={handleRegister}>
                {errors.map((erro) => {
                    if (erro.campo === "nome") return <span className="error-message">{erro.mensagem}</span>
                })}
                <Input name="nome" type="text" placeholder="Seu nome" onChange={handleChange}></Input>
                {errors.map((erro) => {
                    if (erro.campo === "login") return <span className="error-message">{erro.mensagem}</span>
                })}
                <Input name="login" type="text" placeholder="Login" onChange={handleChange}></Input>
                {errors.map((erro) => {
                    if (erro.campo === "senha") return <span className="error-message">{erro.mensagem}</span>
                })}
                <Input name="senha" type="password" placeholder="********" onChange={handleChange} onBlur={validateRegisterForm}></Input>
                <Button $primary disabled={!isFormValid}>Registrar</Button>
            </form>
        </>
    )
}