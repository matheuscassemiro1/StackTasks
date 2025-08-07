import React from "react";
import "./header.css"
import { Button } from "../../styles/global";

export const Header: React.FC = () => {
    return (
        <header className="topbar">
            <div className="div-logo flex1 justify-start" >
                <span className="logotipo">StackTasks</span>
            </div>
            <div className="flex1 justify-center">
                <span>Welcome, Fulano!</span>
            </div>
            <div className="flex1 justify-end">
                <Button className="" $small>Sair</Button>
            </div>
        </header>
    )
}