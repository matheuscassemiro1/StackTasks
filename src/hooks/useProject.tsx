import { useEffect, useState } from "react";
import { Project, ProjectList } from "../types/project-types";
import { Task } from "../types/task";
import { OrderBy } from "../types/orderTypes";

export function useProject() {
    const [projectList, setProjectList] = useState<ProjectList[]>(
        [
            {
                id: 1, nome: "Lista", projects:
                    [{
                        id: 1,
                        nome: "Pessoal",
                        tasks:
                            [{
                                id: 1,
                                name: "Tarefa Básica",
                                description: "Tarefa inicial",
                                tags: ["teste"],
                                done: false,
                                order: 0,
                                limit: "2025-09-14"
                            },
                            {
                                id: 2,
                                name: "Tarefa Básica OK",
                                description: "Tarefa inicial",
                                tags: ["testeDone"],
                                done: true,
                                order: 1,
                                limit: "2025-09-13"
                            }]
                    },
                    {
                        id: 2,
                        nome: "Trabalho",
                        tasks:
                            [{
                                id: 2,
                                name: "Projeto2 Básico",
                                description: "Inicial p2",
                                tags: ["teste2"],
                                done: false,
                                order: 0,
                                limit: "2025-09-14"
                            }]
                    },
                    {
                        id: 3,
                        nome: "Projeto Exemplo3",
                        tasks: [
                            { id: 1, name: "Tarefa 1", description: "Descrição da tarefa 1", tags: ["exemplo", "teste"], done: false, order: 0, limit: "2025-09-14" },
                            { id: 2, name: "Tarefa 2", description: "Descrição da tarefa 2", tags: ["exemplo", "teste"], done: false, order: 1, limit: "2025-09-15" },
                            { id: 3, name: "Tarefa 3", description: "Descrição da tarefa 3", tags: ["exemplo", "teste"], done: false, order: 2, limit: "2025-09-16" },
                            { id: 4, name: "Tarefa 4", description: "Descrição da tarefa 4", tags: ["exemplo", "teste"], done: false, order: 3, limit: "2025-09-17" },
                            { id: 5, name: "Tarefa 5", description: "Descrição da tarefa 5", tags: ["exemplo", "teste"], done: false, order: 4, limit: "2025-09-18" },
                            { id: 6, name: "Tarefa 6", description: "Descrição da tarefa 6", tags: ["exemplo", "teste"], done: false, order: 5, limit: "2025-09-19" },
                            { id: 7, name: "Tarefa 7", description: "Descrição da tarefa 7", tags: ["exemplo", "teste"], done: false, order: 6, limit: "2025-09-20" },
                            { id: 8, name: "Tarefa 8", description: "Descrição da tarefa 8", tags: ["exemplo", "teste"], done: false, order: 7, limit: "2025-09-21" },
                            { id: 9, name: "Tarefa 9", description: "Descrição da tarefa 9", tags: ["exemplo", "teste"], done: false, order: 8, limit: "2025-09-22" },
                            { id: 10, name: "Tarefa 10", description: "Descrição da tarefa 10", tags: ["exemplo", "teste"], done: false, order: 9, limit: "2025-09-23" },
                            { id: 11, name: "Tarefa 11", description: "Descrição da tarefa 11", tags: ["exemplo", "teste"], done: false, order: 10, limit: "2025-09-24" },
                            { id: 12, name: "Tarefa 12", description: "Descrição da tarefa 12", tags: ["exemplo", "teste"], done: false, order: 11, limit: "2025-09-25" },
                            { id: 13, name: "Tarefa 13", description: "Descrição da tarefa 13", tags: ["exemplo", "teste"], done: false, order: 12, limit: "2025-09-26" },
                            { id: 14, name: "Tarefa 14", description: "Descrição da tarefa 14", tags: ["exemplo", "teste"], done: false, order: 13, limit: "2025-09-27" },
                            { id: 15, name: "Tarefa 15", description: "Descrição da tarefa 15", tags: ["exemplo", "teste"], done: false, order: 14, limit: "2025-09-28" },
                            { id: 16, name: "Tarefa 16", description: "Descrição da tarefa 16", tags: ["exemplo", "teste"], done: false, order: 15, limit: "2025-09-29" },
                            { id: 17, name: "Tarefa 17", description: "Descrição da tarefa 17", tags: ["exemplo", "teste"], done: false, order: 16, limit: "2025-09-30" },
                            { id: 18, name: "Tarefa 18", description: "Descrição da tarefa 18", tags: ["exemplo", "teste"], done: false, order: 17, limit: "2025-10-01" },
                            { id: 19, name: "Tarefa 19", description: "Descrição da tarefa 19", tags: ["exemplo", "teste"], done: false, order: 18, limit: "2025-10-02" },
                            { id: 20, name: "Tarefa 20", description: "Descrição da tarefa 20", tags: ["exemplo", "teste"], done: false, order: 19, limit: "2025-10-03" },
                            { id: 21, name: "Tarefa 21", description: "Descrição da tarefa 21", tags: ["exemplo", "teste"], done: false, order: 20, limit: "2025-10-04" },
                            { id: 22, name: "Tarefa 22", description: "Descrição da tarefa 22", tags: ["exemplo", "teste"], done: false, order: 21, limit: "2025-10-05" },
                            { id: 23, name: "Tarefa 23", description: "Descrição da tarefa 23", tags: ["exemplo", "teste"], done: false, order: 22, limit: "2025-10-06" },
                            { id: 24, name: "Tarefa 24", description: "Descrição da tarefa 24", tags: ["exemplo", "teste"], done: false, order: 23, limit: "2025-10-07" },
                            { id: 25, name: "Tarefa 25", description: "Descrição da tarefa 25", tags: ["exemplo", "teste"], done: false, order: 24, limit: "2025-10-08" },
                            { id: 26, name: "Tarefa 26", description: "Descrição da tarefa 26", tags: ["exemplo", "teste"], done: false, order: 25, limit: "2025-10-09" },
                            { id: 27, name: "Tarefa 27", description: "Descrição da tarefa 27", tags: ["exemplo", "teste"], done: false, order: 26, limit: "2025-10-10" },
                            { id: 28, name: "Tarefa 28", description: "Descrição da tarefa 28", tags: ["exemplo", "teste"], done: false, order: 27, limit: "2025-10-11" },
                            { id: 29, name: "Tarefa 29", description: "Descrição da tarefa 29", tags: ["exemplo", "teste"], done: false, order: 28, limit: "2025-10-12" },
                            { id: 30, name: "Tarefa 30", description: "Descrição da tarefa 30", tags: ["exemplo", "teste"], done: false, order: 29, limit: "2025-10-13" }
                        ]
                    }]
            }
        ]
    );
    const [selectedList, setSelectedList] = useState<ProjectList>();
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | undefined>();
    const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.BYPOS);
    const [onlyActives, setOnlyActives] = useState<boolean>(true);
    const [activeProjectTags, selectActiveProjectTags] = useState<string[] | undefined>();
    const [activeTag, setActiveTag] = useState<string | undefined>();
    const [selectedTag, setSelectedTag] = useState<string | undefined>();
    const [searchString, setSearchString] = useState<string>("");
    const [tasksOrdersChanged, setTasksOrdersChanged] = useState<boolean>(false);
    const [reviseTaskChangesMode, setReviseTaskChangesMode] = useState<boolean>(false);
    const [originalSelected, setOriginalSelected] = useState<Project>();

    useEffect(() => {
        if (projects.length === 0) {
            setProjects(projectList[0].projects);
            setSelectedList(projectList[0]);
        }
        if (!selectedProject) {
            selectProject(projectList[0].projects[0]);
        }
    }, [projectList])

    useEffect(() => {
        if (!selectedProject && projects.length > 0) {
            selectProject(projects![0]!)
        }
    }, [projects])

    useEffect(() => {
        if (!onlyActives) {
            setOrderBy(OrderBy.BYSTATE);
        } else {
            setOrderBy(OrderBy.BYPOS);
        }
    }, [onlyActives])

    function newProject(nome: string): void {
        let newProject = {
            id: projects!.length + 1,
            nome: nome,
            tasks: []
        } as Project;
        setProjects((previous) => ([...previous!, newProject]))
    }


    function newListProject(nome: string): void {
        let newProjectList = {
            id: projectList!.length + 1,
            nome: nome,
            projects: []
        } as ProjectList;
        setProjectList((previous) => ([...previous!, newProjectList]))
    }

    function selectList(list: ProjectList) {
        setSelectedList(list);
        setProjects(list.projects)
        setReviseTaskChangesMode(false);
        setTasksOrdersChanged(false);
        selectProject(list.projects[0])
    }


    function updateProject(tempProject: Project) {
        setProjects(previous =>
            previous!.map(p =>
                p.id === tempProject.id
                    ? { ...p, tasks: tempProject.tasks }
                    : p
            )
        );

        setProjectList(previousList =>
            previousList.map(list => {
                if (list.id === selectedList!.id) {
                    const projectExists = list.projects.some(p => p.id === tempProject.id);
                    const updatedProjects = projectExists
                        ? list.projects.map(p => p.id === tempProject.id ? tempProject : p)
                        : [...list.projects, tempProject];
                    return { ...list, projects: updatedProjects };
                } else {
                    return list;
                }
            })
        );

        let tags = Array.from(new Set(tempProject.tasks!.flatMap(task => task.tags)));
        selectActiveProjectTags(tags);
    }

    function completeTask(task: Task): void {
        let tarefasAtualizadas = selectedProject!.tasks?.map(t => t.id === task.id ? { ...t, done: !t.done } : t);
        let auxProjTemp = selectedProject!;
        auxProjTemp!.tasks = tarefasAtualizadas;
        let taskIndex = auxProjTemp.tasks?.findIndex(t => t.id === task.id);
        auxProjTemp!.tasks!.forEach((item, index) => {
            if (task.done) {
                if (item.id === task.id) {
                    item.order = auxProjTemp!.tasks!.reduce((ant, t) => { return t.order > ant.order ? t : ant }).order + 1;
                }
            } else {
                if (index >= taskIndex!) {
                    item.order = item.order === 0 ? 0 : item.order - 1;
                }
            }
        })
        updateProject(auxProjTemp!);
        setOriginalSelected(auxProjTemp!)
        setSelectedProject(p => ({ ...p!, tasks: tarefasAtualizadas }))
    }

    function deleteProject(proj: Project): void {
        let auxProjects = projects!.filter(p => p.id !== proj.id);
        setProjects(auxProjects);
        selectProject(auxProjects[0]);
    }

    function changeOrder(task: Task, direcao: string) {
        let auxProj = { ...selectedProject! }
        let tasksAux = auxProj.tasks;
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
                auxProj.tasks = tasksAux;
                setSelectedProject(p => ({ ...p!, tasks: tasksAux }));
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
                auxProj.tasks = tasksAux;
                setSelectedProject(p => ({ ...p!, tasks: tasksAux }));
                break;
        }

        if (JSON.stringify(projects!.find(p => p.id === auxProj.id)?.tasks) !== JSON.stringify(auxProj.tasks)) {
            setTasksOrdersChanged(true);
        }
    }

    const deleteTask = (task: Task): void => {
        let projectTemp = selectedProject!;
        let taskIndex = projectTemp.tasks?.findIndex(t => t.id === task.id);
        let tasksTemp = projectTemp.tasks!.filter(t => t.name !== task.name);
        tasksTemp.forEach((item, index) => {
            if (index >= taskIndex!) {
                item.order = item.order - 1;
            }
        })
        projectTemp.tasks = tasksTemp;
        updateProject(projectTemp);
        setOriginalSelected(projectTemp)
        setSelectedProject((previous) => ({ ...previous!, tasks: tasksTemp }));
    }

    const orderTask = (a: Task, b: Task): number => {
        switch (orderBy) {
            case OrderBy.BYPOS:
                return a.order - b.order;
            case OrderBy.BYDATE:
                return new Date(a.limit).getTime() - new Date(b.limit).getTime();
            case OrderBy.BYSTATE:
                return Number(a.done) - Number(b.done);
        }
    }

    const filterTask = (task: Task): boolean => {
        let onlyActivesTasksShowed: boolean = onlyActives ? !task.done : true;
        let selectedTag: boolean = activeTag ? task.tags.includes(activeTag) : true;
        let stringSearch = task.name.toLowerCase().includes(searchString) || task.description.toLowerCase().includes(searchString) || task.tags.some(tag => tag.toLowerCase().includes(searchString)) || task.limit.includes(searchString)
        return onlyActivesTasksShowed && selectedTag && stringSearch;
    }

    const taskCreated = (task: Partial<Task>): void => {
        let lastId = 0;
        let maxOrder = 0;
        if (selectedProject!.tasks!.length >= 1) {
            lastId = selectedProject!.tasks!.reduce((ant, t) => { return t.id > ant.id ? t : ant }).id + 1;
            maxOrder = selectedProject!.tasks!.reduce((ant, t) => { return t.order > ant.order && !t.done ? t : ant }).order + 1;
        }
        let newTask = task;
        newTask.id = lastId;
        newTask.done = false;
        newTask.order = maxOrder;
        let tempTasks = selectedProject!.tasks || [];
        let auxProject = selectedProject!
        tempTasks.push(newTask as Task);
        auxProject!.tasks = tempTasks;
        updateProject(auxProject);
        setSelectedProject((previous) => (({ ...previous!, tasks: tempTasks })));
    }

    const taskEdit = (task: Task): void => {
        let tempTasks = selectedProject!.tasks!.map(t => {
            if (t.id === task.id) {
                return task
            } else {
                return t;
            }
        });
        let auxProject = selectedProject!
        auxProject!.tasks = tempTasks;
        updateProject(auxProject);
        setSelectedProject((previous) => (({ ...previous!, tasks: tempTasks })));
    }

    function selectProject(proj: Project): void {
        setSelectedProject(proj);
        let tags = Array.from(new Set(proj?.tasks?.flatMap(task => task.tags)));
        setActiveTag(undefined);
        selectActiveProjectTags(tags);
        setReviseTaskChangesMode(false);
        setTasksOrdersChanged(false);
        setOriginalSelected(proj);
    }

    function finishTaskChanges(action: string, project?: Project): void {
        if (action === 'revert') setSelectedProject(projects!.find(p => p.id === selectedProject!.id))
        if (action === 'save') updateProject(project!)
        setReviseTaskChangesMode(false);
        setTasksOrdersChanged(false);
    }

    return {
        projects,
        selectedProject,
        orderBy,
        onlyActives,
        selectedTag,
        activeProjectTags,
        activeTag,
        setSelectedProject,
        changeOrder,
        setOrderBy,
        setOnlyActives,
        setActiveTag,
        completeTask,
        taskCreated,
        filterTask,
        orderTask,
        selectProject,
        setSelectedTag,
        deleteProject,
        setSearchString,
        searchString,
        newProject,
        deleteTask,
        tasksOrdersChanged,
        reviseTaskChangesMode,
        setReviseTaskChangesMode,
        finishTaskChanges,
        projectList,
        selectedList,
        newListProject,
        selectList,
        originalSelected,
        taskEdit
    }
}