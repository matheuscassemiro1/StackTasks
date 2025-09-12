import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { TaskFilter } from "../../components/taskFilter/taskFilter";
import "./home.css"
import { Button, Select } from "../../styles/global";
import { Project } from "../../types/project";
import { Task } from "../../types/task";
import { OrderBy } from "../../types/orderTypes";

export const Home: React.FC = () => {
    const [project, setProject] = useState<Project | undefined>();
    const [tasks, setTasks] = useState<Task[] | undefined>();
    const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.BYPOS);
    const [onlyActives, setOnlyActives] = useState<boolean>(false);
    const [activeTag, setActiveTag] = useState<string | undefined>();
    const receberDadosDoFilho = (project: Project): void => {
        setProject(project);
        setTasks(project.tasks);
    };

    useEffect(() => {
        if (project) {
            let tempProjeto: Project = { ...project, tasks: tasks }
            setProject(tempProjeto);
        }
    }, [tasks])

    const orderTask = (a: Task, b: Task) => {
        switch (orderBy) {
            case OrderBy.BYPOS:
                return a.order - b.order;
            case OrderBy.BYDATE:
                return new Date(a.limit).getTime() - new Date(b.limit).getTime();
        }
    }

    const filterTask = (task: Task): boolean => {
        let onlyActivesTasksShowed = onlyActives ? !task.done : true;
        let selectedTag = activeTag ? task.tags.includes(activeTag) : true;
        return onlyActivesTasksShowed && selectedTag;
    }

    function concluirTarefa(task: Task): void {
        let tarefasAtualizadas = tasks?.map(t => t.id === task.id ? { ...t, done: !t.done } : t);
        setTasks(tarefasAtualizadas);
    }

    function alterarPosicao(task: Task, direcao: string) {
        let tasksAux = tasks;
        let posAnterior = task.order;
        switch (direcao.toLowerCase()) {
            case "acima":
                tasksAux = tasksAux?.map(t => {
                    if (t.id === task.id) {
                        return { ...t, order: t.order - 1 <= 0 ? 0 : t.order - 1 }
                    }
                    if (t.order === posAnterior - 1 && t.id !== task.id) {
                        return { ...t, order: t.order + 1 }
                    }
                    return t;
                })
                setTasks(tasksAux);
                break;
            case "abaixo":
                tasksAux = tasksAux?.map(t => {
                    if (tasksAux![tasksAux!.length - 1].id !== task.id) {
                        if (t.id === task.id) {
                            return { ...t, order: t.order + 1 }
                        }
                    }
                    if (t.order === posAnterior + 1 && t.id !== task.id) {
                        return { ...t, order: t.order - 1 <= 0 ? 0 : t.order - 1 }
                    }
                    return t;
                })
                setTasks(tasksAux);
                break;
        }
    }

    return (
        <>
            < Header />
            <div className="content">
                <TaskFilter onSendData={receberDadosDoFilho} updateProject={project!} onlyActives={setOnlyActives} activeTag={setActiveTag} />
                <div className="div-projeto">
                    <div className="box-titulo">
                        <h3 className="titulo-tarefas">Lista da Tarefas</h3>
                        <div>
                            <span className="titulo-ordenacao">Ordenar por:</span>
                            <Select className="select-ordenacao" name="ordenacao" id="ordenacao" onChange={(e) => setOrderBy(e.target.value as OrderBy)}>
                                <option value={OrderBy.BYPOS}>Posição</option>
                                <option value={OrderBy.BYDATE}>Data de Vencimento</option>
                            </Select>
                        </div>
                    </div>
                    <div className="div-tarefas">
                        {tasks?.sort(orderTask).filter(filterTask).map(t => {
                            return (
                                <div className={`box-tarefa ${t.done ? 'done' : ''}`} key={t.id}>
                                    <input readOnly
                                        onClick={() => concluirTarefa(t)}
                                        className="checkbox-tarefa"
                                        type="checkbox"
                                        checked={t.done}
                                    />
                                    <div className="detalhes-tarefa">
                                        <span className="titulo-descricao">{t.name}</span>
                                        <span className="descricao-tarefa">{t.description}</span>
                                        <div className="div-tags">
                                            <span className="tag">{t.limit}</span>
                                            {t.tags.map((tag, index) => (
                                                <span className="tag" key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="div-botoes-edicao">
                                        {orderBy === OrderBy.BYPOS && (
                                            <div className="div-arrows">
                                                {t.order !== 0 && (
                                                    <Button
                                                        $small
                                                        className="arrows"
                                                        onClick={() => alterarPosicao(t, 'acima')}
                                                    >
                                                        ⮝
                                                    </Button>
                                                )}
                                                {tasks.length > 1 && (
                                                    <Button
                                                        $small
                                                        className="arrows"
                                                        onClick={() => alterarPosicao(t, 'abaixo')}
                                                    >
                                                        ⮟
                                                    </Button>
                                                )}
                                            </div>
                                        )}
                                        <Button $small className="botao">Editar</Button>
                                        <Button $small className="botao excluir">Excluir</Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}