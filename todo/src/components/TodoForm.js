import React from "react";
import { addTodo } from "../actions/index.js";
import { connect } from "react-redux";


class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

  inputHandler = event => {
    this.setState({ input: event.target.value })
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
        <div className='todo-form'>
        <h2>Todos:</h2>
        <form onSubmit={this.submitHandler}>
          <input
            placeholder="Add New Task... "
            name="input"
            value={this.state.input}
            onChange={this.inputHandler}
          />
          <button>Add</button>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);