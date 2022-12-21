import TodoItem from "./TodoItem";
import TodoList from "../../style/TodoList.style";

const Todo = ({todoList,controlsHandler})=>{
  return(
    <TodoList>
    {todoList.length>0?todoList.map(({id,task,status},i)=>{
      if(1) {
        return <TodoItem id={id} toDo={task} status={status} key={i} controlsHandler={controlsHandler}/>
      }
    }):<li className="err">Nothing to show</li>}
  </TodoList>
  );
};

export default Todo;