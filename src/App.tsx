//imports for components
import FormPage from './components/Form.Page'
import LoginListpage from './components/LoginList.page';



//import for libraries
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
        <Routes>
          <Route path='/' element={<FormPage/>}/>
          <Route path='/logl' element={<LoginListpage/>}/>
        </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
