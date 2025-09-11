import { Task } from "./task";

export interface Project{
    id: number,
    nome: string,
    tasks?: Task[]  
}