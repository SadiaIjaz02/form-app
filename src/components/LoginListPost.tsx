import {useQuery,useMutation} from 'react-query'
import axios from 'axios'
import { DataType } from '../interfaces'


const fetchFunc2 = (userLogin:DataType) =>{
    return axios.post(`http://localhost:3001/users/`,userLogin)
}

export const LoginListPost=(userLogin:DataType)=>{
    return useQuery('enteredData',()=>fetchFunc2(userLogin))
}

export const addReqFunc = () =>{
    return useMutation((userLogin: DataType) => fetchFunc2(userLogin))
}