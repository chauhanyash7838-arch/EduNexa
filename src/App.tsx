import './App.css'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Investment/Home/Home';
import Aadharcard from './Aadharcard/Aadharcard';

function App() {
 

  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aadharcard' element={< Aadharcard/>}/>
    </Routes>
    
  )
}

export default App;
