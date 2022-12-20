const TodoItem = ({toDo}) => {
  return (
   <li>
     <textarea  rows="10" value={toDo}></textarea>
     <div className="controls">
       <button className="controls__edit">edit</button>
       <button className="controls__complete">complete</button>
       <button className="controls__delete">delete</button>
     </div>
   </li>
  )
}

export default TodoItem
