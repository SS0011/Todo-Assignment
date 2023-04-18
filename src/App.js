
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Task from './Pages/Task/Task';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/task' element={<Task/>}/>
        </Routes>
    
      
    </div>
  );
}

export default App;
