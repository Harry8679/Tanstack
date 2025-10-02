import { useQuery } from '@tanstack/react-query';
import './App.css';
import axios from 'axios';

const getToDos = async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  };

function App() {
  const { data, isPending } = useQuery({
    queryKey: ['todos'],
    queryFn: getToDos,
  });

  if (isPending) return <p>Loading. ...</p>

  return <>{JSON.stringify(data)}</>
}

export default App
