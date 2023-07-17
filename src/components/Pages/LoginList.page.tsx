import {LoginListGet} from "../API/LoginListGet"
import { deleteData } from "../API/LoginListDelete";
import {useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


function LoginListpage() {
    
    const [page, setPage] = useState(1);

    const onSuccess =() =>{
        console.log('perform side effects after data fetching')
      }
    const onError =() =>{
        console.log('perform side effects after encountering error')
      }

    const {isLoading, data, isError, error} = 
      LoginListGet(onSuccess,onError,page)
         
    if(isLoading){
        return <h2>...Loading</h2>
      }
    if(isError){
        return <h2>{(error as Error).message}</h2>
      }
   

      const handleDelete = async (id: number) => {
        try {
          await deleteData(id);
          // Refetch data after deletion
          setPage((prevPage) => prevPage-1);
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      };

      
    return (
    <>
    <div>
        <h2>Login List Page</h2>
        {
            data?.data.map(tKey=>{
                return (<div key={tKey.id}>
                    <p>Name: {tKey?.name}</p> 
                    <p>Email: {tKey?.email}</p>
                    <p>Subscription Type: {tKey?.subs}</p>
                    <p>Terms and Conditions: {tKey?.terms}</p>
                    <Button variant="danger" onClick={() => handleDelete(tKey.id)}>
                      Delete Data
                    </Button>
                    
                </div>);
            })
        }
    </div>


    


    <div>
        <button className="butn" onClick={()=>setPage(page-1)} disabled={page===1}>
            Prev Page
        </button>
        <button className="butn" onClick={()=>setPage(page+1)} disabled={page===10}>
            Next Page
        </button>
    </div>
    <div>
        <Link to='/'>
        <button className="butn mt-3">Go back to LogIn</button>
        </Link>
    </div>
    </>
  )
}

export default LoginListpage