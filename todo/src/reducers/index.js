export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

const initialState = {
  todos: [
    { value: "Walk the dog", completed: false },
    { value: "Wash the car", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    
    default:
      return state;
  }
};