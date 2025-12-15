'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useCreateTodo } from '@/lib/graphql/operations'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ErrorMessage from '../components/ErrorMessage';

type Inputs = {
    title: string;
    description: string;
    completed: boolean;
};


export default function CreateTodoPage() {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const createTodoMutation = useCreateTodo();
    
    const onSubmit: SubmitHandler<Inputs> = data => {
        createTodoMutation.mutate(data);
    };

    return (
        <div className='p-10 min-h-full '>
            <Link href="/todos" className='text-blue-800 p-5'> &larr; Back to Todos</Link>
            <p className='text-3xl text-gray-900 font-extrabold p-5'>Create New Todo</p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-gray-700'>
                <div className='p-5 flex flex-col'>
                    <label>Title</label>
                    <input className='p-2 border border-gray-300 rounded '{...register("title", { required: true, minLength: 3 })} placeholder='Enter todo title' />
                    <ErrorMessage errorType={errors.title?.type} />
                </div>
                <div className='p-5 flex flex-col'>
                    <label>Description</label>
                    <textarea className='p-2 border border-gray-300 rounded'{...register("description")} placeholder='Enter todo description' />
                </div>
                <div className='p-5'>
                    <label className=''>
                        <input type="checkbox" {...register("completed")} className='mx-2'/>
                        Mark as completed
                    </label>
                </div>
                <div className='p-5 flex space-x-4'>
                    <button type="submit" disabled={createTodoMutation.isPending} className='self-start text-white border rounded bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br hover:border-blue-500 hover:border focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5'>Create Todo</button>
                    <button type="button" onClick={() => router.back()} className='self-start text-white border rounded bg-gray-500 hover:border-gray-300 hover:border font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5'>Cancel</button>
                </div>
                {createTodoMutation.error && <span>Error creating todo: {createTodoMutation.error.message}</span>}
            </form>
        </div>
    );
}