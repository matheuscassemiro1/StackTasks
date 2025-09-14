import React from "react";
import "./header.css"
import { Input } from "../../styles/global";

export const Header: React.FC = () => {
    return (
        <header className="topbar">
            <div className="div-logo flex1 justify-start" >
                <span className="nomeAplicacao">StackTasks</span>
                <span className="lista selecionado">Lista</span>
                <span className="opt">+ Criar</span>
                <span className="opt">⚙️</span>
            </div>

            <div className="flex1 justify-end">

                <div className="div-perfil">
                    <div className="div-search">
                        <span>🔍</span>
                        <Input $alternative className="input-busca" placeholder="Buscar tarefas, tags..." />
                    </div>
                    <span className="nome-perfil">Matheus</span>
                    <span className="letra-perfil">M</span>
                </div>
            </div>
        </header>
    )
}