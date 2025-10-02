import { useQuery } from '@tanstack/react-query';
import './App.css';
import axios from 'axios';

const getToDos = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  };

function App() {
  const { data, error, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: getToDos,
  });

  if (error) return <p>{error.message}</p>

  return <>
    <h1>{isSuccess && <p>Data fetched successfully</p>}</h1>
    <ul>
      {isSuccess && 
        data.map((todo: { id: number, title: string }) => (
          <li key={todo.id}>{todo.title}</li>
        ))
      }
      {!isSuccess && <p>Loading ...</p>}
    </ul>
  </>
}

export default App
