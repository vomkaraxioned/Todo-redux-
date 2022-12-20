import TodoItem from "./TodoItem";
import TodoList from "../../style/TodoList.style";

const Todo = ({todoList})=>{
 
  return(
    <TodoList>
    {todoList.length>1?todoList.map((todo,i)=><TodoItem toDo={todo} key={i}/>):<li className="err">Nothing to show</li>}
  </TodoList>
  );
};

export default Todo;