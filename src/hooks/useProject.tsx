import { useEffect, useState } from "react";
import { Project, ProjectList } from "../types/project-types";
import { Task } from "../types/task";
import { OrderBy } from "../types/orderTypes";
import { toast } from "react-toastify";

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
                        nome: "Projeto Exemplo",
                        tasks: [{ id: 1, name: "Revisar contrato", description: "Verificar cláusulas e prazos do novo contrato.", tags: ["trabalho", "urgente"], done: false, order: 0, limit: "2025-09-14" },
                        { id: 2, name: "Estudar React", description: "Praticar hooks e componentização.", tags: ["estudo", "frontend"], done: true, order: 1, limit: "2025-09-15" },
                        { id: 3, name: "Limpar o quarto", description: "Organizar livros e roupas.", tags: ["casa"], done: false, order: 2, limit: "2025-09-16" },
                        { id: 4, name: "Fazer backup", description: "Salvar arquivos importantes no drive.", tags: ["segurança", "tecnologia"], done: true, order: 3, limit: "2025-09-17" },
                        { id: 5, name: "Enviar relatório", description: "Relatório semanal de desempenho.", tags: ["trabalho", "relatório"], done: false, order: 4, limit: "2025-09-18" },
                        { id: 6, name: "Comprar mantimentos", description: "Leite, frutas e produtos de limpeza.", tags: ["mercado", "casa"], done: false, order: 5, limit: "2025-09-19" },
                        { id: 7, name: "Atualizar portfólio", description: "Adicionar projetos recentes no site pessoal.", tags: ["carreira", "design"], done: true, order: 6, limit: "2025-09-20" },
                        { id: 8, name: "Planejar viagem", description: "Escolher destino e reservar hospedagem.", tags: ["lazer", "planejamento"], done: false, order: 7, limit: "2025-09-21" },
                        { id: 9, name: "Reunião com equipe", description: "Discutir metas do próximo trimestre.", tags: ["trabalho", "reunião"], done: false, order: 8, limit: "2025-09-22" },
                        { id: 10, name: "Aprender TypeScript", description: "Converter projeto JS para TS.", tags: ["estudo", "programação"], done: false, order: 9, limit: "2025-09-23" },
                        { id: 11, name: "Pagar contas", description: "Luz, internet e cartão de crédito.", tags: ["financeiro"], done: true, order: 10, limit: "2025-09-24" },
                        { id: 12, name: "Escrever artigo", description: "Artigo sobre produtividade para o blog.", tags: ["escrita", "trabalho"], done: false, order: 11, limit: "2025-09-25" },
                        { id: 13, name: "Exercícios físicos", description: "Treino de resistência e alongamento.", tags: ["saúde"], done: true, order: 12, limit: "2025-09-26" },
                        { id: 14, name: "Assistir workshop", description: "Participar de workshop online de UI/UX.", tags: ["design", "aprendizado"], done: false, order: 13, limit: "2025-09-27" },
                        { id: 15, name: "Organizar finanças", description: "Atualizar planilha de gastos mensais.", tags: ["financeiro"], done: false, order: 14, limit: "2025-09-28" },
                        { id: 16, name: "Responder e-mails", description: "Limpar caixa de entrada e priorizar mensagens.", tags: ["trabalho", "comunicação"], done: true, order: 15, limit: "2025-09-29" },
                        { id: 17, name: "Revisar código", description: "Fazer code review do novo módulo.", tags: ["backend", "programação"], done: false, order: 16, limit: "2025-09-30" },
                        { id: 18, name: "Ler livro", description: "Avançar no capítulo 5 de 'Clean Code'.", tags: ["leitura", "estudo"], done: false, order: 17, limit: "2025-10-01" },
                        { id: 19, name: "Atualizar currículo", description: "Adicionar experiências recentes.", tags: ["carreira"], done: true, order: 18, limit: "2025-10-02" },
                        { id: 20, name: "Fazer testes", description: "Criar testes unitários para o módulo de login.", tags: ["programação", "qualidade"], done: false, order: 19, limit: "2025-10-03" },
                        { id: 21, name: "Ligar para o suporte", description: "Resolver problema com a operadora.", tags: ["pessoal"], done: false, order: 20, limit: "2025-10-04" },
                        { id: 22, name: "Cuidar das plantas", description: "Regar e podar plantas da varanda.", tags: ["casa", "lazer"], done: true, order: 21, limit: "2025-10-05" }]
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
        toast.success("Novo projeto adicionado", { autoClose: 2000 });
        setProjects((previous) => ([...previous!, newProject]))
    }


    function newListProject(nome: string): void {
        let newProjectList = {
            id: projectList!.length + 1,
            nome: nome,
            projects: []
        } as ProjectList;
        toast.success("Nova lista adicionada", { autoClose: 2000 });
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
        if (task.done) {
            toast.info("Task reaberta", { autoClose: 2000 })
        } else {
            toast.success("Task completada", { autoClose: 2000 })
        }
        updateProject(auxProjTemp!);
        setOriginalSelected(auxProjTemp!)
        setSelectedProject(p => ({ ...p!, tasks: tarefasAtualizadas }))
    }

    function deleteProject(proj: Project): void {
        let auxProjects = projects!.filter(p => p.id !== proj.id);
        setProjects(auxProjects);
        selectProject(auxProjects[0]);
         toast.success("Projeto excluído", { autoClose: 2000 });
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
        toast.success("Tarefa deletada", { autoClose: 2000 });
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
            //maxOrder = selectedProject!.tasks!.reduce((ant, t) => { return t.order > ant.order && !t.done ? t : ant }).order + 1;
        }
        let newTask = task;
        newTask.id = lastId;
        newTask.done = false;
        newTask.order = maxOrder;
        let tempTasks = selectedProject!.tasks || [];
        if (tempTasks.length >= 0) {
            tempTasks.forEach(t => {
                t.order = t.order + 1
            })
        }
        let auxProject = selectedProject!
        tempTasks.push(newTask as Task);
        auxProject!.tasks = tempTasks;
        updateProject(auxProject);
        setSelectedProject((previous) => (({ ...previous!, tasks: tempTasks })));
        toast.success("Tarefa criada", { autoClose: 2000 });
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
        toast.success("Tarefa alterada", { autoClose: 2000 });
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
        if (action === 'revert') {
            toast.info("Ordenação revertida", { autoClose: 2000 });
            setSelectedProject(projects!.find(p => p.id === selectedProject!.id))
        }
        if (action === 'save') {
            toast.success("Ordenação salva", { autoClose: 2000 });
            updateProject(project!)
        }
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