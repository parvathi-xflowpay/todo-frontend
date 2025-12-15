import Link from 'next/link';

interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: string; 
  completed: boolean;
}

interface TodoCardProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoCardProps) {
  return (
    <div key={todo.id} className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold text-lg">{todo.title}</h2>
      <p className="line-clamp-2 text-gray-700">{todo.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Created at: {new Date(todo.createdAt).toLocaleString()}
      </p>
      <p
        className={`mt-2 px-1 py-0.5 inline-block rounded text-sm font-medium ${
          todo.completed
            ? 'bg-green-100 text-green-600'
            : 'bg-amber-100 text-amber-600'
        }`}
      >
        Status: {todo.completed ? 'Completed' : 'Pending'}
      </p>
      <div className="mt-4">
        <Link
          href={`/todos/${todo.id}`}
          className="text-blue-500 hover:underline hover:text-blue-600 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
