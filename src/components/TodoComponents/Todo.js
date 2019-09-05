import React from "react";

const Todo = props => {
    return(
        <div className={`todo${props.todo.clearCompleted ? "clear" : ""}`}
                onClick={() => {
                    props.clearItem(props.todo.id);
                }}
                >
            <p>{props.todo.name}</p>
        </div>
    )

}

export default Todo