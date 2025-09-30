import React, { JSX } from "react";
import { Task } from "../../types/task";
import { Button } from "../../styles/global";
import { OrderBy } from "../../types/orderTypes";
import "./taskList.css"

type TaskListData = {
    tasks?: Task[] | undefined,
    orderTask: (a: Task, b: Task) => number,
    filterTask: (task: Task) => boolean,
    completeTask: (task: Task) => void,
    changeOrder: (task: Task, direcao: string) => void,
    deleteTask: (task: Task) => void,
    orderBy: OrderBy,
    reviseTaskChangesMode: boolean

}

export const TaskList: React.FC<TaskListData> = ({ tasks, orderTask, filterTask, completeTask, changeOrder, deleteTask, orderBy, reviseTaskChangesMode }): JSX.Element => {
    return <>
        <div className="div-tarefas">
            {tasks?.sort(orderTask).filter(filterTask).map(t => {
                return (
                    <div className={`box-tarefa ${t.done ? 'done' : ''}`} key={t.id}>
                        {!reviseTaskChangesMode ? <input readOnly
                            onClick={() => completeTask(t)}
                            className="checkbox-tarefa"
                            type="checkbox"
                            checked={t.done}
                        /> : ''}
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
                            {orderBy === OrderBy.BYPOS && tasks?.sort(orderTask).filter(filterTask).length >= 1 && !reviseTaskChangesMode && (
                                <div className="div-arrows">
                                    {t.order !== 0 && (
                                        <Button
                                            $small
                                            className="arrows"
                                            onClick={() => changeOrder(t, 'acima')}
                                        >
                                            ⮝
                                        </Button>
                                    )}
                                    {tasks?.sort(orderTask).filter(filterTask).length > 1 && (
                                        <Button
                                            $small
                                            className="arrows"
                                            onClick={() => changeOrder(t, 'abaixo')}
                                        >
                                            ⮟
                                        </Button>
                                    )}
                                </div>
                            )}
                            {!reviseTaskChangesMode ? <>
                                <Button $small className="botao">Editar</Button>
                                <Button $small className="botao excluir" onClick={() => { deleteTask(t) }}>Excluir</Button>
                            </> : ''}

                        </div>

                    </div>
                );
            })}
        </div>
    </>
}