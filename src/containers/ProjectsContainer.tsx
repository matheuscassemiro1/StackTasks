import { useState } from "react";
import { NewTask } from "../components/new-task/newTask";
import { Select } from "../styles/global";
import { TaskFilter } from "../components/taskFilter/taskFilter";
import { OrderBy } from "../types/orderTypes";
import { TaskList } from "../components/taskList/taskList";
import { Header } from "../components/header/header";
import { useProjectContext } from "../contexts/ProjectProvider";

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
        taskCreated } = useProjectContext();
    const [showNewTaskMenu, setNewTaskMenu] = useState<boolean>(false);

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
                projects={projects}
                deleteProject={deleteProject} />
            <div className="div-projeto">
                <div className="box-titulo">
                    <h3 className="titulo-tarefas">Lista da Tarefas <button onClick={() => setNewTaskMenu(true)} className="btn-add-tarefa" title="Nova tarefa">✚</button></h3>
                    <div>
                        <span className="titulo-ordenacao">Ordenar por:</span>
                        <Select className="select-ordenacao" name="ordenacao" id="ordenacao" onChange={(e) => setOrderBy(e.target.value as OrderBy)}>
                            <option value={OrderBy.BYPOS}>Posição</option>
                            <option value={OrderBy.BYDATE}>Data de Vencimento</option>
                        </Select>
                    </div>
                </div>
                {showNewTaskMenu ?
                    <div className="newtask-box">
                        <NewTask opened={setNewTaskMenu} taskCreated={taskCreated}></NewTask>
                    </div>
                    : <TaskList
                        tasks={selectedProject?.tasks}
                        changeOrder={changeOrder}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        filterTask={filterTask}
                        orderBy={orderBy}
                        orderTask={orderTask}
                    ></TaskList>}

            </div>
        </div>
    </>
}