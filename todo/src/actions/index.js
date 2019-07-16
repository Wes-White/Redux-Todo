import { ADD, DELETE, TOGGLE } from "../reducers/index.js";

export const addTodo = todo => {
  const newTodo = {
    value: todo,
    completed: false
  }
  return {
    type: ADD,
    payload: newTodo
  }
}