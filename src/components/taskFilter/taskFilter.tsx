import React, { useEffect, useState } from "react";
import "./taskFilter.css"
import { Project } from "../../types/project";

type Projects = {
    onSendData: (project: Project) => void;
    updateProject: Project;
    onlyActives: (done: boolean) => void;
    activeTag: (result: string | undefined) => void;
};

export const TaskFilter: React.FC<Projects> = ({ onSendData, updateProject, onlyActives, activeTag }: Projects) => {

    const [project, setProject] = useState<Project[]>([
        { id: 1, nome: "Pessoal", tasks: [{ id: 1, name: "Tarefa Básica", description: "Tarefa inicial", tags: ["teste"], done: false, order: 0, limit: "2025-09-14" }, { id: 2, name: "Tarefa Básica OK", description: "Tarefa inicial", tags: ["testeDone"], done: true, order: 1, limit: "2025-09-13" }] },
        { id: 2, nome: "Projeto2", tasks: [{ id: 2, name: "Projeto2 Básico", description: "Inicial p2", tags: ["teste2"], done: false, order: 0, limit: "2025-09-14" }] }
    ])
    const [onlyActivesTasks, setOnlyActivesTasks] = useState<boolean>(false);
    const [selectedProject, setSelected] = useState<String>('');
    const [activeProjectTags, selectActiveProjectTags] = useState<string[] | undefined>();
    const [selectedTag, setSelectedTag] = useState<string | undefined>();
    
    useEffect(() => {
        selecionarProjeto(project[0]);
    }, []);

    useEffect(() => {
        if (updateProject) {
            let auxProject = project.map(p => {
                if (p.id === updateProject.id) {
                    return { ...p, tasks: updateProject.tasks }
                }
                return p;
            })
            setProject(auxProject);
        }
    }, [updateProject])

    function selecionarProjeto(proj: Project): void {
        setSelected(proj.nome);
        let tags = proj!.tasks!.flatMap(task => task.tags);
        selectActiveProjectTags(tags);
        onSendData(proj);
    }

    function checkSelected(project: string): boolean {
        return project === selectedProject;
    }

    function setFilter(done: boolean): void {
        setOnlyActivesTasks(done);
        onlyActives(done);
    }

    function selectTag(tag: string | undefined): void{
        activeTag(tag);
        setSelectedTag(tag);
    }

    return (
        <>
            <div className="divFilters">
                <div className="topicFilters">
                    <span>PROJETOS</span>
                    <div>
                        {project.map(p => {
                            return <div key={`${p.id}`} className={`option ${checkSelected(p.nome) ? 'option-selected' : ''}`} onClick={() => { selecionarProjeto(p) }}>{p.nome}</div>
                        })}

                    </div>
                    <span>FILTROS</span>
                    <div>
                        <span className={`filter ${!onlyActivesTasks ? 'filter-selected' : ''}`} onClick={() => setFilter(false)}>Todas</span>
                        <span className={`filter ${onlyActivesTasks ? 'filter-selected' : ''}`} onClick={() => setFilter(true)}>Pendente</span>
                    </div>
                    <span>ETIQUETAS</span>
                    <div className="div-flex">
                        <div className='div-tags'>
                            <span className={`tag ${!selectedTag ? 'tag-selected' : ''}`} onClick={() => {selectTag(undefined)}}>todas</span>
                            {activeProjectTags?.map(t => {
                                return <span key={t} className={`tag ${selectedTag === t ? 'tag-selected' : ''}`} onClick={() => selectTag(t)}>{t}</span>
                            })}
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}