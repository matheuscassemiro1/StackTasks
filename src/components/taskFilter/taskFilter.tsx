import React, { useEffect, useState } from "react";
import "./taskFilter.css"
import { Project } from "../../types/project";

type Projects = {
    onSendData: (project: Project) => void;
};

export const TaskFilter: React.FC<Projects> = ({ onSendData }: Projects) => {

    const [project, setProject] = useState<Project[]>([
        { id: 1, nome: "Pessoal", tasks: [{ id: 1, name: "Tarefa Básica", description: "Tarefa inicial", tags: ["teste"], done: false, order: 0 }, { id: 2, name: "Tarefa Básica OK", description: "Tarefa inicial", tags: ["testeDone"], done: true, order: 1 }] },
        { id: 2, nome: "Projeto2", tasks: [{ id: 2, name: "Tarefa Básica p2", description: "Tarefa inicial p2", tags: ["teste2"], done: false, order: 0 }] }
    ])

    const [selectedProject, setSelected] = useState<String>('');
    useEffect(() => {
        selecionarProjeto(project[0]);
    }, []);

    function selecionarProjeto(proj: Project): void {
        setSelected(proj.nome);
        onSendData(proj);
    }

    function checkSelected(project: string): boolean {
        return project === selectedProject;
    }

    return (
        <>
            <div className="divFilters">
                <div className="topicFilters">
                    <span>PROJETOS</span>
                    <div>
                        {project.map(p => {
                            return <div key={`${p.id}`} className={`option ${checkSelected(p.nome) ? 'option-selected' : ''}`} onClick={() => {selecionarProjeto(p)}}>{p.nome}</div>
                        })}

                    </div>
                    <span>FILTROS</span>
                    <div>
                        <span className="filter filter-selected">Todas</span>
                        <span className="filter">Pendente</span>
                    </div>

                    <div>
                    </div>
                    <span>ETIQUETAS</span>
                    <div className="div-flex">
                        <div>
                            <span className="tag">trabalho</span>
                        </div>
                    </div>
                </div>
                <hr />

            </div>

        </>
    )
}