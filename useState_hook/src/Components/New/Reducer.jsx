import React, { useReducer, useState } from 'react'

const initialState = 1;

const reducer = (state, action) => {
    
    if (action.type === "INCREMENT") {
        return (
         state + action.payload
        );
    }

    if (action.type === "MULTI") {
        return state * action.payload;
    }
    if (action.type === "DIVIDE") {
        return state / action.payload;
    }

    if (action.type === "DECREMENT") {
        return state - action.payload;
    }
    return state;
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [num, setNum] = useState(1);

    return (
        <div>
            <input type='number' value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: num })}>Increment</button>

             
            <button onClick={() => dispatch({ type: "MULTI", payload: num })}>Multiply</button>
            <button onClick={() => dispatch({ type: "DIVIDE", payload: num })}>Divide</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: num })}>Decrement</button> 
        </div>
    );
}

export default Counter;