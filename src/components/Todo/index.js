import TodoItem from "./TodoItem";
import TodoList from "../../style/TodoList.style";

const Todo = ({ todoList, controlsHandler, tabFilter }) => {
  return (
    <TodoList>
      {todoList.length > 0 ? todoList.map(({ id, task, status }, i) => {
        if (tabFilter == status || tabFilter == "all") {
          return <TodoItem id={id} toDo={task} status={status} controlsHandler={controlsHandler} key={i} />
        }
      }) : <li className="err">Nothing to show</li>}
    </TodoList>
  );
};

export default Todo;