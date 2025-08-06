import React from "react";
import { Button, Input } from "../styles/global";

export const RegisterForm: React.FC = () => {

    return (
        <>
            <h2>Registro</h2>
            <Input placeholder="Seu nome"></Input>
            <Input placeholder="Login"></Input>
            <Input placeholder="********"></Input>
            <Button $primary>Registrar</Button>
        </>
    )
}