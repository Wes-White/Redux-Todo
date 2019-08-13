import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";


class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     
        <div>
          {this.props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={index} />;
          })}
        </div>
     
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);