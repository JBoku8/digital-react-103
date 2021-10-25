import { withUserList } from '../../hoc/withUserList';

const ProtectedPage = ({ title = 'Protected Page', userList }) => {
  return (
    <div className="column">
      <h2 className="title">{title}</h2>
      <div className="columns is-flex-wrap-wrap">
        {userList.map(item => {
          return (
            <div className="column box is-one-third" key={item.id}>
              {item.email}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withUserList(ProtectedPage);
