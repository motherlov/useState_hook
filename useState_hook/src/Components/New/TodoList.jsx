import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [updateData, setUpdateData] = useState([])
  
    const addTodo = () => {
      if (todo !== "") {
        setTodos([...todos, todo]);
        setTodo("");
      }
    };
  
    const deleteTodo = (text) => {
      alert("delete the todo !");
      const newTodos = todos.filter((todo) => {
        return todo !== text;
      });
      setTodos(newTodos);
    }

    const editTodo =(index)=>{
 const editedTodo = prompt("Edit the todo:");
 if(editedTodo!== null && editedTodo.trim() !==""){
  setTodos([...todos, todo]);
 }
    }
  return (
    <Container> 
    <Row 
        style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            fontSize: "3rem", 
            fontWeight: "bolder", 
            color:"dark",
        }} 
    > 
        TODO LIST 
    </Row> 

    <hr /> 
    <Row> 
        <Col md={{ span: 5, offset: 4 }}> 
            <InputGroup className="mb-3"> 
                <FormControl 
                    placeholder=" Enter add item . . . "
                    size="lg"
                    value={todo} 
                    onChange={(e) => {
                        setTodo(e.target.value) }}
              
                    aria-label="add something"
                    aria-describedby="basic-addon2"
                /> 
                <InputGroup> 
                    <Button 
                        variant="dark"
                        className="mt-2"
                        onClick={addTodo}
                    > 
                        ADD 
                    </Button> 
                </InputGroup> 
            </InputGroup> 
        </Col> 
    </Row> 
    <Row> 
        <Col md={{ span: 5, offset: 4 }}> 
            <ListGroup> 
                {/* map over and print items */} 
                {todos.map((todo, index) => {
                    return ( 
                      <div key = {index} >  
                        <ListGroup.Item 
                            variant="yellow"
                            action 
                            style={{display:"flex", 
                                    justifyContent:'space-between'

                          }} 
                        > 
                            {todo} 
                            <span> 
                            <Button style={{marginRight:"10px"}} 
                            variant = "light"
                            onClick={() => {
                                deleteTodo(todo);
                              }}
                >
                              Delete 
                            </Button> 
                            <Button variant = "light" onClick={()=>{editTodo(index)}} > 
                              Edit 
                            </Button> 
                            </span> 
                        </ListGroup.Item> 
                      </div> 
                    ); 
                        })} 
            </ListGroup> 
        </Col> 
    </Row> 
</Container> 

  );
}

export default TodoList