import React from 'react';

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = { 
      todos //todos: todos is the same as just calling todos
    }
  }  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = (e, todoName) => {
    e.preventDefault();
    const existingTodo = this.state.todos.filter( todo => todo.task === todoName);
      if (existingTodo.length === 0) {
        const newTodo = {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      
    this.setState({todos: [...this.state.todos, newTodo]});
    console.log("handle change in app:")
  }
}

    clearCompleted = e => { 
      e.preventDefault();
      this.setState({
        todos: this.state.todos.filter(todo => !todo.completed)
      });
    }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
