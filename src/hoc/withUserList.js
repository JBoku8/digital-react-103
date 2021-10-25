import { useEffect, useState } from 'react';
import { getUserList } from '../services/user.service';

export const withUserList = Component => {
  const WithUserList = props => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
      const data = await getUserList();
      setUsers(data);
    };

    useEffect(() => {
      fetchUsers();
    }, []);

    return <Component {...props} userList={users} />;
  };
  return WithUserList;
};
