import axios from 'axios';
import { useQuery } from 'react-query'
import { DataType } from '../../interfaces';


const fetchFunc = (page:number) =>{
    //return axios.post(`http://localhost:3001/users/?_limit=1&_page=${page}`)
    return axios.get<DataType[]>(`http://localhost:3001/users?_limit=1&_page=${page}`);
}


export const LoginListGet = (onSuccess:()=>void,onError:()=>void,page:number) => {
  
  return (useQuery(['myQueryKey',page],
        ()=>fetchFunc(page),{
          onSuccess,
          onError
        }))
  
}

export default LoginListGet