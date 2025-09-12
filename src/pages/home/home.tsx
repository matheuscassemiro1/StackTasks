import React, { useState } from "react";
import { Header } from "../../components/header/header";
import { TaskFilter } from "../../components/taskFilter/taskFilter";
import "./home.css"
import { Button, Select } from "../../styles/global";
import { Project } from "../../types/project";
import { Task } from "../../types/task";

export const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[] | undefined>()

    const receberDadosDoFilho = (project: Project): void => {
        setTasks(project.tasks);
        console.log(project);
    };

    function concluirTarefa(task: Task): void {
        let tarefasAtualizadas = tasks?.map(t => t.id === task.id ? { ...t, done: !t.done } : t);
        setTasks(tarefasAtualizadas);
    }

    function alterarPosicao(task: Task, direcao: string) {
        let tasksAux = tasks;
        tasksAux?.forEach(e => {
            console.log(`TASK: ${e.name} ORDEM: ${e.order}`)
        })
        let posAnterior = task.order;
        switch (direcao.toLowerCase()) {
            case "acima":
                tasksAux = tasksAux?.map(t => {
                    if (t.id == task.id) {
                        return { ...t, order: t.order - 1 <= 0 ? 0 : t.order - 1 }
                    }
                    if (t.order == posAnterior - 1 && t.id != task.id) {
                        return { ...t, order: t.order + 1 }
                    }
                    return t;
                })
                setTasks(tasksAux);
                break;
            case "abaixo":
                tasksAux = tasksAux?.map(t => {
                    if (tasksAux![tasksAux!.length - 1].id != task.id) {
                        if (t.id == task.id) {
                            return { ...t, order: t.order + 1 }
                        }
                    }
                    if (t.order == posAnterior + 1 && t.id != task.id) {
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
                <TaskFilter onSendData={receberDadosDoFilho} />
                <div className="div-projeto">
                    <div className="box-titulo">
                        <h3 className="titulo-tarefas">Lista da Tarefas</h3>
                        <div>
                            <span className="titulo-ordenacao">Ordenar por:</span>
                            <Select className="select-ordenacao" name="ordenacao" id="ordenacao">
                                <option value="data-venc">Data de Vencimento</option>
                            </Select>
                        </div>
                    </div>
                    <div className="div-tarefas">
                        {tasks?.sort((a, b) => a.order - b.order).map(t => {
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
                                        <div className="div-flex">
                                            {t.tags.map((tag, index) => (
                                                <span className="tag" key={index}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="div-botoes-edicao">
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
                                            <Button
                                                $small
                                                className="arrows"
                                                onClick={() => alterarPosicao(t, 'abaixo')}
                                            >
                                                ⮟
                                            </Button>
                                        </div>
                                        <Button $small>Editar</Button>
                                        <Button $small>Excluir</Button>
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