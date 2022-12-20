import TodoController from "../TodoController";

const todoReducer = (todoList = [], action) => {
  const controller = new TodoController();
  switch (action.type) {
    case "add": controller.addData(action.todo);
      break;
    default: todoList = todoList;
  }
  todoList = controller.todoArr
  return todoList;
};

export default todoReducer;