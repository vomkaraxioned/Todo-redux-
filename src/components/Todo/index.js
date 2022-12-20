import TodoItem from "./TodoItem";
import TodoList from "../../style/TodoList.style";

const Todo = ({todoList})=>{
  return(
    <TodoList>
    {todoList.length>0?todoList.map(({task,status},i)=>{
      if(1) {
        return <TodoItem toDo={task} status={status} key={i}/>
      }
    }):<li className="err">Nothing to show</li>}
  </TodoList>
  );
};

export default Todo;