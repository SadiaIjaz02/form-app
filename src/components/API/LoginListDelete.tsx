import axios from 'axios';
import { useQuery } from 'react-query';
import { request } from '../../utils/Axios-Utils';

const fetchFunc = (page: number) => {
  //return axios.get<DataType[]>(`http://localhost:3001/users?_limit=1&_page=${page}`);
  return request({
    url: `/users?_limit=1&_page=${page}`, method:'delete'});
    
};

export const deleteData = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3001/users/${id}`);
  } 
  catch (error) {
    throw new Error('Failed to delete data.');
  }
};

export const LoginListDelete = (page: number) => {
  return useQuery(['myQueryKey', page], () => fetchFunc(page));
};
