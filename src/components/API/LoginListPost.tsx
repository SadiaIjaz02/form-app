import { useQuery, useMutation } from 'react-query';
import { DataType } from '../../interfaces';
import { request } from '../../utils/Axios-Utils';

const fetchFunc2 = (userLogin: DataType) => {
  return request({
    url: '/users',
    method: 'post',
    data: { ...userLogin },
  });
};

export const LoginListPost = (userLogin: DataType) => {
  return useQuery('enteredData', () => fetchFunc2(userLogin));
};

export const addReqFunc = () => {
  return useMutation((userLogin: DataType) => fetchFunc2(userLogin));
};
