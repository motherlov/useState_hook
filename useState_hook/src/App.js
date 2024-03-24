

 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import './App.css';

import Home from './Components/Cms/Home/Home';
import Homepart from './Components/Cms/Homepart/Homepart';
import Products from './Components/Products/Products';
import Update from './Components/New/Update';
import FromValidation from './Components/New/FromValidation';
import Add_Remove from './Components/New/Add_Remove';
import UpdateState from './Components/New/UpdateState';
import Toggle from './Components/New/Toggle';
import MousePosition from './Components/New/MousePosition';
import ApiFetch from './Components/New/ApiFetch';
import Form from './Components/New/Form';
import LoadingSpinner from './Components/New/LoadingSpinner';
import UseState_Props from './Components/New/UseState_Props';
import Time from './Components/New/Time';
import HomePage from './Components/New/HomePage';
import BlogPost from './Components/New/BlogPost';
import Reducer from './Components/New/Reducer';
import Counter from './Components/New/Counter';
import ColorChange from './Components/New/ColorChange';
import FromBox from './Components/New/FromBox';
import Accordion from './Components/New/Accordion';
import EventBubbling from './Components/New/EventBubbling';
import EventCapturing from './Components/New/EventCapturing';
import UserTable from './Components/New/UserTable';
import TodoList from './Components/New/TodoList';
import Add_to_Cart from './Components/New/Add_to_Cart';
import  Add from './Components/New/Add';
import Shopping_Cart from './Components/New/Shopping_Cart';
import TodoList_Api from './Components/New/TodoList_Api';
import Edit from './Components/New/Edit';
import Parent from './Components/Props_Drilling/Parent';
import Child from './Components/Props_Drilling/Child';
import Small_Child from './Components/Props_Drilling/Small_Child';
import Search_bar_Api from './Components/Search_Bar/Search_bar_Api';
import Page from './Components/Context/Page';
import NoteContex from './Components/Context/Context';
 import Notestate from './Components/Context/NewContext'
import ToDoList from './Components/ToDoList/ToDoList';
import Accordion1 from './Components/Accordion/Accordion1';
import Fetch from './Components/New/Post';
import Get from './Components/Api/Get';
import PostData from './Components/Api/PostData';
import Data from './Components/Crud/create';
import ListData from './Components/Crud/ListData';


function App() {
  return (
    <div className="App">
     
        
          <Router>
          <Notestate>
          <Routes >
 
          <Route path='/page' element={<Page/>} /> 

            
              {/* <Route path='/toggle' element={<Toggle/>} />
             <Route path='/counter' element={<Counter/>} />
             <Route path='/colorPicker' element={<ColorChange/>} />
             <Route path='/validation' element={<FromValidation/>} />
             <Route path='/fromBox' element={<FromBox/>} />
             {/* <Route path='/accordion' element={<Accordion/>} />   */}
             {/* <Route path='/accordion' element={<Accordion1/>} />   */}
  
            
                       
            {/* <Route path='/eventbubbling' element={<EventBubbling/>} />
            <Route path='/eventcapture' element={<EventCapturing/>} />
            <Route path='/usertable' element={<UserTable/>} /> */}
            {/* <Route path='/todo' element={<TodoList/>} /> */}
            {/* <Route path='/ToDo' element={<ToDoList/>} /> */}
            {/* <Route path='/cart' element={<Add_to_Cart/>} />  */}




            {/* <Route path='/fetch' element={<Fetch/>} /> */}



            {/* <Route path='/get' element={<Get/>} /> 
            <Route path='/postdata' element={<PostData/>} />  */}



            {/* <Route path='/create' element={<Data/>} />  
            <Route path='/list' element={<ListData/>} />  


            <Route path='/add' element={<Add/>} />
            <Route path='/cart' element={<Shopping_Cart/>} />

            <Route path='/api' element={<TodoList_Api/>} />
            <Route path='/edit/:id' element={<Edit/>} />
            <Route path='/parent' element={<Parent/>} />
            <Route path='/child' element={<Child/>} />
            <Route path='/smallchild' element={<Small_Child/>} />
            <Route path='/searchBar' element={<Search_bar_Api/>} />   */}

           


            {/* <Route path='/memo' element={<Home/>} />
            <Route path='/memo2' element={<Homepart/>} />
            <Route path='/products' element={<Products/>} />
             <Route path='/update' element={<Update/>} />
             <Route path='/add_remove' element={<Add_Remove/>} />
             <Route path='/update_state' element={<UpdateState/>} /> 
             <Route path='/mouse' element={<MousePosition/>} />
             <Route path='/apifetch' element={<ApiFetch/>} />
             <Route path='/form' element={<Form/>} />
             <Route path='/loading' element={<LoadingSpinner/>} />
             <Route path='/props' element={<UseState_Props/>} />
             <Route path='/time' element={<Time/>} />
             <Route path='/' element={<HomePage/>} />
             <Route path='/page/:id' element={<BlogPost/>} />*/}
             <Route path='/reducer' element={<Reducer/>} /> 




          </Routes>
          </Notestate>
          </Router> 
      
    </div>
  )
}

export default App;
