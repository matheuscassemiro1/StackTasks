import React, { JSX } from "react";
import { Task } from "../../types/task";
import { Button } from "../../styles/global";
import { OrderBy } from "../../types/orderTypes";
import "./taskList.css"
import { useThemeContext } from "../../contexts/ThemeProvider";

type TaskListData = {
    tasks?: Task[] | undefined,
    orderTask: (a: Task, b: Task) => number,
    filterTask: (task: Task) => boolean,
    completeTask: (task: Task) => void,
    changeOrder: (task: Task, direcao: string) => void,
    deleteTask: (task: Task) => void,
    orderBy: OrderBy,
    reviseTaskChangesMode: boolean,
    openTaskMenu: (show: boolean) => void,
    setEditTask?: (task: Task) => void
}

export const TaskList: React.FC<TaskListData> = ({ tasks, openTaskMenu, setEditTask, orderTask, filterTask, completeTask, changeOrder, deleteTask, orderBy, reviseTaskChangesMode }): JSX.Element => {
    const { darkMode } = useThemeContext();
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
                            <span className={`titulo-descricao ${darkMode && !t.done ? 'dark-text' : ''}`}>{t.name}</span>
                            <span className={`descricao-tarefa ${darkMode && !t.done ? 'dark-text' : ''}`}>{t.description}</span>
                            <div className="div-tags">
                                <span className="tag">{new Date(t.limit).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span>
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
                                    {
                                        tasks?.sort(orderTask).filter(filterTask).length > 1 &&
                                        tasks?.sort(orderTask).filter(filterTask).findIndex(task => task.id === t.id) !== tasks?.sort(orderTask).filter(filterTask).length - 1 && (
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
                                <Button $small $darkMode={darkMode} className={`${darkMode ? 'botao-dark' : 'botao'}`} onClick={() => {
                                    openTaskMenu(true)
                                    setEditTask!(t)
                                }}>Editar</Button>
                                <Button $small className="botao excluir" onClick={() => { deleteTask(t) }}>Excluir</Button>
                            </> : ''}

                        </div>

                    </div>
                );
            })}
        </div>
    </>
}