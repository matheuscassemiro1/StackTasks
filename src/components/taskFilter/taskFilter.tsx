import React from "react";
import "./taskFilter.css"
import { Project } from "../../types/project";

type Projects = {
    projects: Project[];
    selectProject: (Project: Project) => void;
    deleteProject: (Project: Project) => void;
    activeTag: string | undefined;
    setActiveTag: (tag: string | undefined) => void;
    setOnlyActivesTasks: (done: boolean) => void;
    selectedProject: Project;
    activeProjectTags: string[] | undefined;
    onlyActivesTasks: boolean;
};

export const TaskFilter: React.FC<Projects> = ({ projects,
    activeProjectTags,
    activeTag,
    selectProject,
    deleteProject,
    selectedProject,
    onlyActivesTasks,
    setOnlyActivesTasks,
    setActiveTag }: Projects) => {

    function checkSelected(projectName?: string): boolean {
        return projectName === selectedProject?.nome;
    }

    return (
        <>
            <div className="divFilters">
                <div className="topicFilters">
                    <span>PROJETOS</span>
                    <div className="topic-div">
                        {projects.map(p => {
                            return (
                                <div key={`${p.id}`}
                                    className={`option ${checkSelected(p.nome) ? 'option-selected' : ''}`}
                                >
                                    <span className="span-opt" onClick={() => { selectProject(p) }}>{p.nome}</span>
                                    {projects.length > 1 ? <span className="delete-icon" onClick={() => deleteProject(p)} title="Excluir projeto">🗑️</span> : ''}
                                </div>
                            )
                        })}
                    </div>
                    <span>FILTROS</span>
                    <div className="topic-div">
                        <span className={`filter ${onlyActivesTasks ? 'filter-selected' : ''}`} onClick={() => setOnlyActivesTasks(true)}>Pendente</span>
                        <span className={`filter ${!onlyActivesTasks ? 'filter-selected' : ''}`} onClick={() => setOnlyActivesTasks(false)}>Todas</span>
                    </div>
                    <span>ETIQUETAS</span>
                    <div className="topic-div">
                        <div className='div-tags'>
                            <span className={`tag ${!activeTag ? 'tag-selected' : ''}`} onClick={() => { setActiveTag(undefined) }}>todas</span>
                            {activeProjectTags?.map(t => {
                                return <span key={t} className={`tag ${activeTag === t ? 'tag-selected' : ''}`} onClick={() => setActiveTag(t)}>{t}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}