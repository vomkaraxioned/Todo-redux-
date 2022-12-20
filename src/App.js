import Title from "./components/Title/index";
import Container from "./style/Container.style";
import appConfig  from "./appConfig";
import Form from "./components/Form/index";
import Tabs from "./components/Tabs/index";
import Todo from "./components/Todo/index";
import {useSelector,useDispatch} from "react-redux";
import add from "./actions/todoActions";

const App = ()=>{

  const {container,title,form,tabs} = appConfig,
  todoList = useSelector((state=>state.todoReducer)),
  dispatch = useDispatch();

  return(
    <Container bgColor={container.bgColor}>
      <Title name={title.name} textColor={title.textColor}/>
      <Form formDetails={form.actions} inputs={form.inputs} submitHandler={(data)=>dispatch(add(data))}/>
      <Tabs tabs={tabs}/>
      <Todo todoList={todoList}/>
    </Container>
  );
};

export default App;
