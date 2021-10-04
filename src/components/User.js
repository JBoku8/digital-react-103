import PropTypes from "prop-types";

import { logGroup } from "../helpers/logger";
import { formatUser } from "../helpers/user";
import { User as UserModel } from "../models/user.model";

export const User = ({ user, title, bio }) => {
  logGroup(user, "USER COMPONENT");

  return (
    <>
      <div className="column">
        {title && <h1 className="title">{title}</h1>}
        <h2 className="has-text-success">
          User Component - {formatUser(user)}
        </h2>
        <p hidden={!bio}>{user.bio}</p>
      </div>
    </>
  );
}; // named export

User.defaultProps = {
  user: new UserModel("Missing firstName", "Missing lastName"),
  bio: false,
};

User.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf(UserModel).isRequired,
};
