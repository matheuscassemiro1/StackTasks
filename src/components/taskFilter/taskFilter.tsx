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
        { id: 2, nome: "Trabalho", tasks: [{ id: 2, name: "Projeto2 Básico", description: "Inicial p2", tags: ["teste2"], done: false, order: 0, limit: "2025-09-14" }] },
        {
            id: 3,
            nome: "Projeto Exemplo3",
            tasks: [
                { id: 1, name: "Tarefa 1", description: "Descrição da tarefa 1", tags: ["exemplo", "teste"], done: false, order: 1, limit: "2025-09-14" },
                { id: 2, name: "Tarefa 2", description: "Descrição da tarefa 2", tags: ["exemplo", "teste"], done: false, order: 2, limit: "2025-09-15" },
                { id: 3, name: "Tarefa 3", description: "Descrição da tarefa 3", tags: ["exemplo", "teste"], done: false, order: 3, limit: "2025-09-16" },
                { id: 4, name: "Tarefa 4", description: "Descrição da tarefa 4", tags: ["exemplo", "teste"], done: false, order: 4, limit: "2025-09-17" },
                { id: 5, name: "Tarefa 5", description: "Descrição da tarefa 5", tags: ["exemplo", "teste"], done: false, order: 5, limit: "2025-09-18" },
                { id: 6, name: "Tarefa 6", description: "Descrição da tarefa 6", tags: ["exemplo", "teste"], done: false, order: 6, limit: "2025-09-19" },
                { id: 7, name: "Tarefa 7", description: "Descrição da tarefa 7", tags: ["exemplo", "teste"], done: false, order: 7, limit: "2025-09-20" },
                { id: 8, name: "Tarefa 8", description: "Descrição da tarefa 8", tags: ["exemplo", "teste"], done: false, order: 8, limit: "2025-09-21" },
                { id: 9, name: "Tarefa 9", description: "Descrição da tarefa 9", tags: ["exemplo", "teste"], done: false, order: 9, limit: "2025-09-22" },
                { id: 10, name: "Tarefa 10", description: "Descrição da tarefa 10", tags: ["exemplo", "teste"], done: false, order: 10, limit: "2025-09-23" },
                { id: 11, name: "Tarefa 11", description: "Descrição da tarefa 11", tags: ["exemplo", "teste"], done: false, order: 11, limit: "2025-09-24" },
                { id: 12, name: "Tarefa 12", description: "Descrição da tarefa 12", tags: ["exemplo", "teste"], done: false, order: 12, limit: "2025-09-25" },
                { id: 13, name: "Tarefa 13", description: "Descrição da tarefa 13", tags: ["exemplo", "teste"], done: false, order: 13, limit: "2025-09-26" },
                { id: 14, name: "Tarefa 14", description: "Descrição da tarefa 14", tags: ["exemplo", "teste"], done: false, order: 14, limit: "2025-09-27" },
                { id: 15, name: "Tarefa 15", description: "Descrição da tarefa 15", tags: ["exemplo", "teste"], done: false, order: 15, limit: "2025-09-28" },
                { id: 16, name: "Tarefa 16", description: "Descrição da tarefa 16", tags: ["exemplo", "teste"], done: false, order: 16, limit: "2025-09-29" },
                { id: 17, name: "Tarefa 17", description: "Descrição da tarefa 17", tags: ["exemplo", "teste"], done: false, order: 17, limit: "2025-09-30" },
                { id: 18, name: "Tarefa 18", description: "Descrição da tarefa 18", tags: ["exemplo", "teste"], done: false, order: 18, limit: "2025-10-01" },
                { id: 19, name: "Tarefa 19", description: "Descrição da tarefa 19", tags: ["exemplo", "teste"], done: false, order: 19, limit: "2025-10-02" },
                { id: 20, name: "Tarefa 20", description: "Descrição da tarefa 20", tags: ["exemplo", "teste"], done: false, order: 20, limit: "2025-10-03" },
                { id: 21, name: "Tarefa 21", description: "Descrição da tarefa 21", tags: ["exemplo", "teste"], done: false, order: 21, limit: "2025-10-04" },
                { id: 22, name: "Tarefa 22", description: "Descrição da tarefa 22", tags: ["exemplo", "teste"], done: false, order: 22, limit: "2025-10-05" },
                { id: 23, name: "Tarefa 23", description: "Descrição da tarefa 23", tags: ["exemplo", "teste"], done: false, order: 23, limit: "2025-10-06" },
                { id: 24, name: "Tarefa 24", description: "Descrição da tarefa 24", tags: ["exemplo", "teste"], done: false, order: 24, limit: "2025-10-07" },
                { id: 25, name: "Tarefa 25", description: "Descrição da tarefa 25", tags: ["exemplo", "teste"], done: false, order: 25, limit: "2025-10-08" },
                { id: 26, name: "Tarefa 26", description: "Descrição da tarefa 26", tags: ["exemplo", "teste"], done: false, order: 26, limit: "2025-10-09" },
                { id: 27, name: "Tarefa 27", description: "Descrição da tarefa 27", tags: ["exemplo", "teste"], done: false, order: 27, limit: "2025-10-10" },
                { id: 28, name: "Tarefa 28", description: "Descrição da tarefa 28", tags: ["exemplo", "teste"], done: false, order: 28, limit: "2025-10-11" },
                { id: 29, name: "Tarefa 29", description: "Descrição da tarefa 29", tags: ["exemplo", "teste"], done: false, order: 29, limit: "2025-10-12" },
                { id: 30, name: "Tarefa 30", description: "Descrição da tarefa 30", tags: ["exemplo", "teste"], done: false, order: 30, limit: "2025-10-13" }
            ]
        }
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
                    let tags = Array.from(new Set(p.tasks!.flatMap(task => task.tags)))
                    selectActiveProjectTags(tags);
                    return { ...p, tasks: updateProject.tasks }
                }
                return p;
            })
            setProject(auxProject);
        }
    }, [updateProject])

    function selecionarProjeto(proj: Project): void {
        setSelected(proj.nome);
        let tags = Array.from(new Set(proj!.tasks!.flatMap(task => task.tags)));
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

    function selectTag(tag: string | undefined): void {
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
                            <span className={`tag ${!selectedTag ? 'tag-selected' : ''}`} onClick={() => { selectTag(undefined) }}>todas</span>
                            {activeProjectTags?.map(t => {
                                return <span key={t} className={`tag ${selectedTag === t ? 'tag-selected' : ''}`} onClick={() => selectTag(t)}>{t}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}