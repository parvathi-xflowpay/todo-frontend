import Link from "next/link";
import { notFound } from "next/navigation";
import { TodoItem, getTodoById } from "@/lib/rest/api";
import { todo } from "node:test";

export default async function TodoPageItem({params}: {params: {id: string}}) {
    const resolvedParams = await Promise.resolve(params);
    let todoItem: TodoItem | null = null;
    try {
        //console.log("Fetching todo item with id:", resolvedParams.id);
        todoItem = await getTodoById(resolvedParams.id);
    } catch (error) {
        notFound();
    }
    if (!todoItem) {
        notFound();
    }
    
    return (
        <div  className="p-10 min-h-full">
            <div className="mb-5">
                <Link href="/todos" className='text-blue-500'> &larr; Back to Todos</Link>
            </div>
            <div className='p-5 flex flex-col bg-gray-50 rounded text-gray-700'>
                {todoItem ? (
                    <div>
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">{todoItem.title}</h1>
                        <span className={`${todoItem.completed ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"} p-2 rounded-2xl`}>{todoItem.completed ? "Completed": "Pending"}</span>
                        <div className="mt-4 pb-2 border-b ">
                            <p>{todoItem.description}</p>
                        </div>
                        <div className="pt-2 flex text-gray-500 ">
                            <span className="mr-4">Created: {new Date(todoItem.createdAt).toLocaleString()}</span>
                            <span>Updated: {new Date(todoItem.updatedAt).toLocaleString()}</span>
                        </div>
                    </div>
                    ) : (
                        notFound()
                    )}
            </div>
        </div>
    );
}
