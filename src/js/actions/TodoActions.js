import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type:"CREATE_TODO",
    text,
  });
  // console.log("here");
}

export function deleteTodo(text) {
  dispatcher.dispatch({
    type:"DELETE_TODO",
    text,
  });
}
