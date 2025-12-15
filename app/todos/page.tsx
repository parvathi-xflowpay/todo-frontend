import Link from 'next/link';
import { useListTodos } from '@/lib/graphql/operations';
import { notFound } from 'next/navigation';
import TodoCard from './components/TodoCard';
import { getAllTodos } from '@/lib/rest/api';

export default async function TodoPage() {
    const todoList = await getAllTodos();
    if (!todoList || todoList.length === 0) {
        notFound();
    }
    return (
        <div className='p-10 min-h-full'>
            <div className='flex justify-between items-center mb-5'>
                <p className='text-4xl text-gray-900 font-extrabold'>My Todos</p>
                <Link href="/todos/create" className='text-white border rounded bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br hover:border-blue-500 hover:border focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 inline-block'>
  Create New Todo
</Link>

            </div>

            {todoList && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-full text-gray-900'>
                {todoList.map((todo: any) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
            </div>
        )}
        </div>
        
    );
}