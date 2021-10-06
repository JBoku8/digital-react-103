import { User } from "./User";
import { dummyData } from "../../helpers/user";

export function UserList() {
  return (
    <div className="column columns">
      {dummyData.map((user, index) => {
        return (
          <User
            user={user}
            key={`${user.firstName}-${index}`}
            title={`${user.firstName} ${user.lastName}`}
          />
        );
      })}
    </div>
  );
}
