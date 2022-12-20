const TodoItem = ({toDo}) => {
  return (
   <li>
     <textarea  rows="10" value={toDo}></textarea>
     
   </li>
  )
}

export default TodoItem
