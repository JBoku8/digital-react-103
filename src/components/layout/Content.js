// import { Counter } from "../counter";
// import { UserList } from "../user-list/UserList";

import { LoginForm } from "../forms/LoginForm";

// const values = [200, 300];

export function Content() {
  return (
    <div className="columns my-5 is-flex-direction-column">
      {/* {values.map((number) => {
        return <Counter initialValue={number} key={`number-${number}`} />;
      })} */}

      {/* <UserList /> */}

      <div className="column">
        <LoginForm />
      </div>
    </div>
  );
}
