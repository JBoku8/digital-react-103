import { Counter } from '../../components/counter';
import { useFetch } from '../../hooks/useFetch';

const values = [100];

export function Home() {
  const todoRequest = useFetch('https://jsonplaceholder.typicode.com/users');

  if (todoRequest.loading) {
    return <h2 className="size-1">Loading...</h2>;
  }

  return (
    <div className="columns my-5 is-flex-direction-column">
      {values.map(number => {
        return <Counter initialValue={number} key={`number-${number}`} />;
      })}
    </div>
  );
}
