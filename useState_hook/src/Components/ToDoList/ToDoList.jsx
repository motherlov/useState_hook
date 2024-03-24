import React from 'react';
import '../../../src/Components/ToDoList/Style.css'
import { useEffect, useState } from "react";

  export default function ToDoList() {
    
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        return JSON.parse(savedTodos);
      } else {
        return [];
      }
    });

    const [todo, setTodo] = useState("");// boolean state to know if we are editing (this will let us display
    const [isEditing, setIsEditing] = useState(false); // different inputs based on a condition (conditional rendering)
    const [currentTodo, setCurrentTodo] = useState({});// object state to set so we know which todo item we are editing

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
      ////////////////////// AddTodo//////////////////
    const  addTodo =(e)=> {
      e.preventDefault();
      if (todo !== "") {
        setTodos([  ...todos, { id: todos.length + 1,text: todo.trim() } ]);
      }
      setTodo("");
    }
     /////////////////////DeleteTodo////////////////////
    const DeleteTodo =(id)=> {
      const removeItem = todos.filter((todo) => { return todo.id !== id; });
      setTodos(removeItem);
    }

    ///////////////////////EditTodo////////////////////////
    const  EditTodo =(todo)=> {
      setIsEditing(true);               // set editing to true
      setCurrentTodo({ ...todo });     // set the currentTodo to the todo item that was clicked
    }




 // function to get the value of the edit input and set the new state
    // const EditInputChange =(e)=> {
    //   setCurrentTodo({ ...currentTodo, text: e.target.value });   // set the new state value to what's currently in the edit input box
    //   console.log(currentTodo);
    // }                                                                    

    const  handleEditFormSubmit =(e) => {
      e.preventDefault();
      UpdateTodo(currentTodo.id, currentTodo);
    }
  
    // function to edit a todo item
    const UpdateTodo =(id, updatedTodo)=> {
      const updatedItem = todos.map((todo) => { return todo.id === id ? updatedTodo : todo; });
      setIsEditing(false);            // set editing to false - which means the data was submited and we are no longer editing
      setTodos(updatedItem);         // update the todos state with the updated todo
    }
  
   
  
    return (
      <div className="App">

         {/* //  We need to conditionally render different inputs based on if we are in editing mode 
            // if we are editing - display the edit todo input
           // make sure to add the handleEditFormSubmit function in the "onClick" prop */}

        {isEditing ? (            
          <form >
            <h2>Edit Todo</h2>
            {/* also added a label for the input */}
            <label htmlFor="editTodo">Edit todo: </label>
            <input
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.text}
              onChange={(e)=>setCurrentTodo({ ...currentTodo, text: e.target.value })} />
           <button type="submit" onClick={handleEditFormSubmit}>Update</button>     
            <button onClick={() => setIsEditing(false)}>Cancel</button>     {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
          </form>

        ) : (
         
          // make sure to add the addTodo function in the "onClick" prop
          <form >
            <h2>Add Todo</h2>
            {/* also added a label for the input */}
            <label htmlFor="todo">Add todo: </label>
            <input
              name="todo"
              type="text"
              placeholder="Enter new Item"
              value={todo}
              onChange={(e)=>{setTodo(e.target.value)}} />
            <button type="submit" onClick={addTodo}>Add</button>
          </form>
        )}

         {/* ///////////////////Todo List////////////////////////////////// */}

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => EditTodo(todo)}>Edit</button>
              <button onClick={() => DeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }