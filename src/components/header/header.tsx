import React, { useState } from "react";
import "./header.css"
import { Input } from "../../styles/global";

import { useProjectContext } from "../../contexts/ProjectProvider";
import { NewProjectList } from "../new-project-list/newProjectList";

export const Header: React.FC = () => {
    const { setSearchString, projectList, selectedList, selectList } = useProjectContext();
    const [modalNewListProj, setModalNewListProj] = useState<boolean>(false);

    return (
        <header className="topbar">
            <div className="div-logo flex1 justify-start" >
                <span className="nomeAplicacao">StackTasks</span>
                <div className="div-lists">
                    {projectList.map(l => {
                        return <span key={`${l.id}`} onClick={() => {selectList(l)}} className={`lista ${l.id == selectedList?.id ? 'selecionado' : ''}`}>{l.nome}</span>
                    })}
                </div>
                <div className="div-create-list">
                    <span className="opt" onClick={() => { setModalNewListProj(true) }}>+ Criar</span>
                    {modalNewListProj ? <NewProjectList opened={setModalNewListProj}></NewProjectList> : ''}
                 <span className="opt">⚙️</span>
                </div>
            </div>

            <div className="flex1 justify-end">
                <div className="div-perfil">
                    <div className="div-search">
                        <span>🔍</span>
                        <Input $alternative className="input-busca" placeholder="Buscar tarefas, tags..." onChange={(e) => { setSearchString(e.target.value) }} />
                    </div>
                    <span className="nome-perfil">Matheus</span>
                    <span className="letra-perfil">M</span>
                </div>
            </div>
        </header>
    )
}