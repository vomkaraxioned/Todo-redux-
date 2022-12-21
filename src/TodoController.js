class TodoController {
  constructor() {
    this.todoData = localStorage.getItem("todo");
    this.todoData = this.todoData ? this.todoData : this.setData([]);
    this.todoArr = JSON.parse(this.todoData);
  }

  setData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
    const updatedArr = localStorage.getItem("todo");
    return updatedArr;
  }

  addData(data) {
    this.todoArr.push({ id: Math.round((Math.random() * 100)) + data.slice(0, 4), task: data, status: "active" });
    localStorage.setItem("todo", JSON.stringify(this.todoArr));
  }

  removeSaveAndComplete(id, to_remove, editedValue) {
    this.todoArr.map((todo, i) => {
      if (todo.id == id) {
        editedValue ? todo.task = editedValue : to_remove ? this.todoArr.splice(i, 1) : todo.status = "completed";
      }
    });
    this.setData(this.todoArr);
  }

}

export default TodoController;