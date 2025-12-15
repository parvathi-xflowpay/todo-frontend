//updateTodo later maybe


export type TodoItem = {
    id: number;
    title: string;
    completed: boolean;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export async function getTodoById(id: string): Promise<TodoItem> {
    const res = await fetch(`http://localhost:3001/todos/${id}`, {cache: "no-cache"});
    //const res = await fetch(`http://localhost:3001/api/todos/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) {
        throw new Error(`Failed to fetch todo with id ${id}`);
    }
    return res.json();
}  

export async function getAllTodos(): Promise<[TodoItem] | null> {
    const res = await fetch(`http://localhost:3001/todos`, {cache: "no-cache"});
    if (!res.ok) {
        return null;
    }
    return res.json();
}