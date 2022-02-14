import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import './TodoContainer.css';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  state = { todos: [] };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      this.setState({
        todos: [
          ...this.state.todos.filter((todo) => {
            return todo.id !== id;
          }),
        ],
      });
    }
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  componentDidMount() {
    if (localStorage.getItem('todos')) {
      const temp = JSON.parse(localStorage.getItem('todos'));
      this.setState({ todos: temp });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              delTodoProps={this.delTodo}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
      </>
    );
  }
}
export default TodoContainer;
