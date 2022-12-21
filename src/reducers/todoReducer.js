import TodoController from "../TodoController";

const todoReducer = (todoList = [], action) => {
  const controller = new TodoController();
  switch (action.type) {
    case "add": controller.addData(action.todo);
      break;
      case "remove":controller.removeData(action.id);
      break;
      case "edit":console.log("edit");
      break;
      case"complete":console.log("complete");
      break;
    default: todoList = todoList;
  }
  todoList = controller.todoArr
  return todoList;
};

export default todoReducer;