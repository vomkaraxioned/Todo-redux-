const TodoItem = ({ id, toDo, status, controlsHandler }) => {

  return (
    <li data-details = {[id,status]}>
      {status == "completed" ? <span>done</span> : null}
      <textarea rows="10" value={toDo} disabled></textarea>
      <div className="controls">
        <button className="controls__edit" onClick={(e) => controlsHandler.dispatch(controlsHandler.edit(e))}>edit</button>
        <button className="controls__complete" onClick={(e) => controlsHandler.dispatch(controlsHandler.complete(e))}>complete</button>
        <button className="controls__delete" onClick={(e) => controlsHandler.dispatch(controlsHandler.remove(e))}>delete</button>
      </div>
    </li>
  )
}

export default TodoItem
