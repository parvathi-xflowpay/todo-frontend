//the graphql queries and mutations
import { gql } from 'graphql-request'
import { graphQLClient } from './client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';

const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodo!) {
    createTodo(input: $input) {
      title
      description
      completed
    }
  }
`;


function useCreateTodo() {
    const router = useRouter();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (inputData: {title: string; description?: string, completed: boolean}) => {
            const variables = {input: inputData}
            const data = await graphQLClient.request(CREATE_TODO, variables)
            return data.createTodo
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['todos']});
            alert("Todo created successfully");
            router.push('/todos');
        },
        onError: (error) => {
            alert("Error creating todo: " + error);
        }
    })
}

const LIST_TODOS = gql`
query{
  listTodos {
      id
      title
      description
      completed
      createdAt
      updatedAt
    }
}
`;

function useListTodos() {
    return useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const data = await graphQLClient.request(LIST_TODOS)
            return data.listTodos
        },
        staleTime: 2 * 60 * 1000,
    })
}

export { useCreateTodo, useListTodos };
