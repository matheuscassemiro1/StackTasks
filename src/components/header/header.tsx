import React, { useState } from "react";
import "./header.css"
import { Button, Input } from "../../styles/global";

import { useProjectContext } from "../../contexts/ProjectProvider";
import { NewProjectList } from "../new-project-list/newProjectList";
import { useThemeContext } from "../../contexts/UseTheme";

export const Header: React.FC = () => {
    const { setSearchString, projectList, selectedList, selectList } = useProjectContext();
    const [modalNewListProj, setModalNewListProj] = useState<boolean>(false);
    const { darkMode, toggleDarkMode } = useThemeContext();

    return (
        <header className={`topbar ${darkMode ? 'dark' : ''}`}>
            <div className="div-logo flex1 justify-start" >
                <span className="nomeAplicacao">StackTasks</span>
                <div className="div-lists">
                    {projectList.map(l => {
                        return <span key={`${l.id}`} onClick={() => { selectList(l) }} className={`lista opt ${darkMode ? 'opt-dark' : ''} ${l.id === selectedList?.id ? 'selecionado' : ''}`}>{l.nome}</span>
                    })}
                </div>
                <div className="div-create-list">
                    <span className={`opt ${darkMode ? 'opt-dark' : ''}`} onClick={() => { setModalNewListProj(true) }}>+ Criar</span>
                    {modalNewListProj ? <NewProjectList opened={setModalNewListProj}></NewProjectList> : ''}
                </div>
            </div>

            <div className="flex1 justify-end">
                <div className="div-perfil">
                    <div className="div-search">
                        <span>🔍</span>
                        <Input $alternative className="input-busca" placeholder="Buscar tarefas, tags..." onChange={(e) => { setSearchString(e.target.value) }} />
                    </div>
                    <div className="div-perfil">
                        <details className="details-div">
                            <summary className="div-perfil">
                                <span className={`nome-perfil ${darkMode ? 'dark' : ''}`}>Matheus</span>
                                <span className={`letra-perfil ${darkMode ? 'dark' : ''}`} >M</span>
                            </summary>

                            <div className={`account-options ${darkMode ? 'dark' : ''}`}>
                                {darkMode ? <Button onClick={() => { toggleDarkMode() }} className="theme-button" $smaller>
                                    ☀️ Modo Claro
                                </Button> : <Button onClick={() => { toggleDarkMode() }} className="theme-button" $smaller>
                                    🌙 Modo Escuro
                                </Button>}
                                <Button className="theme-button" $smaller>
                                    Sair
                                </Button>
                            </div>

                        </details>

                    </div>
                </div>
            </div>
        </header>
    )
}