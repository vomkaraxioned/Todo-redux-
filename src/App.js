import Title from "./components/Title/index";
import Container from "./style/Container.style";
import appConfig  from "./appConfig";
import Form from "./components/Form/index";
import Tabs from "./components/Tabs/index";
import Todo from "./components/Todo/index";

const App = ()=>{

  const {container,title,form,tabs} = appConfig;

  return(
    <Container bgColor={container.bgColor}>
      <Title name={title.name} textColor={title.textColor}/>
      <Form formDetails={form.actions} inputs={form.inputs} />
      <Tabs tabs={tabs}/>
      <Todo todoList={1}/>
    </Container>
  );
};

export default App;
