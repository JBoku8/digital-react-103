import axios from 'axios';
import { logGroup } from '../helpers/logger';

export const getUserList = async () => {
  try {
    const result = await axios.get('/users');
    return result.data.data;
  } catch (error) {
    logGroup(error, 'getUserList');
  }
};
