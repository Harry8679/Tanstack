import { useQuery } from '@tanstack/react-query';
import './App.css';
import axios from 'axios';
import type { Todo } from './types';

const getToDos = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  };

function App() {
  const { data, error, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: getToDos,
  });

  return <>
    <h1>{isSuccess && <p>Data fetched successfully</p>}</h1>
    <ul>
      {isSuccess && 
        data.map((todo: Todo) => (
          <li key={todo.userId}>{todo.title}</li>
        ))}
      {error && <p>{error.message}</p>}
    </ul>
  </>
}

export default App
