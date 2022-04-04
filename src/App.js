import logo from './logo.svg';
import './App.css';
import { Topbar } from './components/Topbar';
import { Header } from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import {Signin} from './Forms/Signin'
import {Herosection} from './components/Herosection'
import { Signup } from './Forms/Signup';
import { Aboutsection } from './components/Aboutsection';
import {Task} from './components/Task';
// import { AddTask } from './components/AddTask';
import {NewTask} from './components/NewTask'
import { Updatetask } from './components/Updatetask';
import { Deletetask } from './components/Deletetask';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Topbar/>
      <Header/>
      {/* <Aboutsection/> */}
      {/* <Herosection/> */}
      {/* <NewTask/> */}
      
      
      
      <Routes>
     <Route path='/signin' element={<Signin/>}/>
     <Route path='/' element={<Herosection/>}/>
     <Route path='/signUp' element={<Signup/>}/>
     <Route path='/tasks' element={<Task/>}/>
     <Route path='/task' element={<NewTask/>}/>
     <Route path='/table/Update/:id' element={<Updatetask/>}/>
     <Route path='/table/delete/:id' element={<Deletetask/>}/>
     <Route path='/About' element={<Aboutsection/>}/>



     

      

      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
