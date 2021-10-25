import { Counter } from '../../components/counter';
// import { UserList } from '../../components/user-list';

const values = [100];

export function Home() {
  return (
    <div className="columns my-5 is-flex-direction-column">
      {values.map(number => {
        return <Counter initialValue={number} key={`number-${number}`} />;
      })}

      {/* <UserList /> */}
    </div>
  );
}
