import { useState } from "react";
import { TaskDetail } from "../components/new-task/taskDetail";
import { Button, Select } from "../styles/global";
import { TaskFilter } from "../components/taskFilter/taskFilter";
import { OrderBy } from "../types/orderTypes";
import { TaskList } from "../components/taskList/taskList";
import { Header } from "../components/header/header";
import { useProjectContext } from "../contexts/ProjectProvider";
import "./ProjectsContainer.css"
import { Task } from "../types/task";

export const ProjectsContainer: React.FC = () => {
    const {
        selectedProject,
        selectProject,
        orderBy,
        setOrderBy,
        projects,
        onlyActives,
        setOnlyActives,
        setActiveTag,
        completeTask,
        deleteProject,
        deleteTask,
        filterTask,
        activeTag,
        changeOrder,
        activeProjectTags,
        orderTask,
        taskCreated,
        tasksOrdersChanged,
        reviseTaskChangesMode,
        setReviseTaskChangesMode,
        finishTaskChanges,
        originalSelected,
        taskEdit
    } = useProjectContext();
    const [showNewTaskMenu, setNewTaskMenu] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<Task | undefined>();

    return <>
        <Header></Header> {/* vai sair em breve, o pai deve chamar */}
        <div className="content">
            <TaskFilter
                onlyActivesTasks={onlyActives}
                setOnlyActivesTasks={setOnlyActives}
                setActiveTag={setActiveTag}
                activeProjectTags={activeProjectTags}
                selectedProject={selectedProject!}
                activeTag={activeTag}
                selectProject={selectProject}
                projects={projects!}
                deleteProject={deleteProject} />
            <div className="div-projeto">
                <div className="box-titulo">
                    <h3 className="titulo-tarefas">Lista da Tarefas <button disabled={reviseTaskChangesMode || !selectedProject} onClick={() => setNewTaskMenu(true)} className="btn-add-tarefa" title="Nova tarefa">✚</button></h3>
                    <div>
                        <span className="titulo-ordenacao">Ordenar por:</span>
                        <Select className="select-ordenacao" name="ordenacao" id="ordenacao" value={orderBy} onChange={(e) => setOrderBy(e.target.value as OrderBy)}>
                            <option value={OrderBy.BYPOS} disabled={!onlyActives}>Posição</option>
                            <option value={OrderBy.BYDATE}>Data de Vencimento</option>
                            <option value={OrderBy.BYSTATE}>Estado da tarefa</option>
                        </Select>
                    </div>
                </div>
                <div className='action-buttons'>
                    {tasksOrdersChanged && !reviseTaskChangesMode ?
                        <Button $primary $smaller onClick={() => setReviseTaskChangesMode(true)}>Revisar alterações</Button> : ''}
                    {reviseTaskChangesMode ? <>
                        <Button $smaller onClick={() => finishTaskChanges('revert')}>Reverter</Button>
                        <Button $smaller $primary onClick={() => finishTaskChanges('save', selectedProject)}>Salvar</Button>
                    </> : ''}
                </div>
                {showNewTaskMenu ?
                    <div className="task-detail-box">
                        <TaskDetail opened={setNewTaskMenu} taskCreated={taskCreated} editTask={editTask} finishTaskEdit={taskEdit} setEditTask={setEditTask}></TaskDetail>
                    </div>
                    :
                    <div className="div-preview-tasklist">
                        {reviseTaskChangesMode ? <div className="box-task old border">
                            <span className="titulo-box">ANTIGA ORDENAÇÃO</span>
                            <TaskList
                                tasks={originalSelected?.tasks}
                                changeOrder={changeOrder}
                                completeTask={completeTask}
                                deleteTask={deleteTask}
                                filterTask={filterTask}
                                orderBy={orderBy}
                                orderTask={orderTask}
                                openTaskMenu={setNewTaskMenu}
                                reviseTaskChangesMode={reviseTaskChangesMode}
                            ></TaskList>
                        </div> : ""}
                        <div className={`box-task ${reviseTaskChangesMode ? 'new border' : ''}`}>
                            {reviseTaskChangesMode ? <span className="titulo-box">NOVA ORDENAÇÃO</span> : ''}
                            <TaskList
                                tasks={selectedProject?.tasks}
                                changeOrder={changeOrder}
                                completeTask={completeTask}
                                deleteTask={deleteTask}
                                filterTask={filterTask}
                                orderBy={orderBy}
                                orderTask={orderTask}
                                reviseTaskChangesMode={reviseTaskChangesMode}
                                setEditTask={setEditTask}
                                openTaskMenu={setNewTaskMenu}
                            ></TaskList>
                        </div>
                    </div>
                }

            </div>
        </div>
    </>
}