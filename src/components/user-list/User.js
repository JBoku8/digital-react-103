import PropTypes from 'prop-types';

import { logGroup } from '../../helpers/logger';
import { formatUser } from '../../helpers/user';
import { User as UserModel } from '../../models/user.model';

export const User = ({ user, title }) => {
  logGroup(user, 'USER COMPONENT');

  return (
    <>
      <div className="column">
        {title && <h1 className="title">{title}</h1>}
        <h2 className="has-text-success">{formatUser(user)}</h2>
        <p>{user.bio}</p>
      </div>
    </>
  );
}; // named export

User.defaultProps = {
  user: new UserModel('Missing firstName', 'Missing lastName'),
};

User.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(UserModel).isRequired,
};
