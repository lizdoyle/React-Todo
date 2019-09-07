import React from "react";

const Todo = props => {
    return(
        <div className={`todo${props.todo.clearCompleted ? "clear" : ""}`}
                onClick={() => {
                    props.clearCompleted(props.todo.completed);
                }}
                >
            <p>{props.todo.task}</p>
        </div>
    )

}

export default Todo