export interface Task{
    id: number,
    name: string,
    description: string,
    tags: string[],
    done: boolean,
    order: number,
    limit: string
}