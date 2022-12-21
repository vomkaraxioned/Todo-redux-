import TodoController from "../TodoController";

const todoReducer = (todoList = [], action) => {
  const controller = new TodoController();
  switch (action.type) {
    case "add": controller.addData(action.todo);
      break;
    case "remove": controller.removeSaveAndComplete(action.id, action.to_remove);
      break;
    case "edit": action.element.disabled = false;
      break;
    case "save": action.element.disabled = true;
      controller.removeSaveAndComplete(action.details.id, action.to_remove, action.element.value);
      break;
    case "complete": controller.removeSaveAndComplete(action.id, action.to_remove);
      break;
    default: todoList = todoList;
  }
  todoList = controller.todoArr
  return todoList;
};

export default todoReducer;