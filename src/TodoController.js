class TodoController {
  constructor() {
    this.todoData = localStorage.getItem("todo");
    this.todoData = this.todoData ? this.todoData : this.setData();
    this.todoArr = JSON.parse(this.todoData);
  }

  setData() {
    localStorage.setItem("todo", JSON.stringify([]));
    const todoData = localStorage.getItem("todo");
    return todoData;
  }

  addData(data) {
    this.todoArr.push({id:Math.round((Math.random()*100))+data.slice(0,4),task:data,status:"active"});
    localStorage.setItem("todo", JSON.stringify(this.todoArr));
  }

  removeData(id) {
    this.todoArr.map((todo,i)=>{
      console.log(todo.id,id)
    });
  }
}

export default TodoController;