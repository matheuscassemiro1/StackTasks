import { Task } from "./task";


export interface Project{
    id: number,
    nome: string,
    tasks?: Task[]  
}

export interface ProjectList{
    id: number,
    nome: string,
    projects: Project[]
}