import React from "react";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from "./Todo";

const TodoList = props => {


    return (
        <div className="list">  
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} addTodo={props.addTodo}/>
            ))}      
            <button className="clear-button" onClick={props.addTodo}> Add Todo</button>    
            <button className="clear-button" onClick={props.clearCompleted}> Clear Completed</button>
        </div>
    )
}
export default TodoList