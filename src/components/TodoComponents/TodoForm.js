import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ""
        }

    }


    handleChanges = e => {
        this.setState({todoName: e.target.value});
        console.log("handle change in app:", this.state.todoName)
    }


    handleSubmit = e => {
        this.props.addTodo(e, this.state.todoName)
        this.setState({todoName: ""});
        };




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todoItem"
                    value={this.state.todoName}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
             )

        }
    }


export default TodoForm