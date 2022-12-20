const TodoItem = ({toDo,status}) => {

  return (
   <li>
     {status=="completed"?<span>done</span>:null}
     <textarea  rows="10" value={toDo} disabled></textarea>
     <div className="controls">
       <button className="controls__edit">edit</button>
       <button className="controls__complete">complete</button>
       <button className="controls__delete">delete</button>
     </div>
   </li>
  )
}

export default TodoItem
