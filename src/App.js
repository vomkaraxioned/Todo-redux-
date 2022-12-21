import { useState } from "react";
import Title from "./components/Title/index";
import Container from "./style/Container.style";
import appConfig from "./appConfig";
import Form from "./components/Form/index";
import Tabs from "./components/Tabs/index";
import Todo from "./components/Todo/index";
import { useSelector, useDispatch } from "react-redux";
import add, { edit, remove, complete } from "./actions/todoActions";

const App = () => {

  const { container, title, form, tabs } = appConfig,
    todoList = useSelector((state => state.todoReducer)),
    dispatch = useDispatch(),
    [tabFilter, setTabFilter] = useState("active"),
    controlsHandler = { dispatch, edit, remove, complete };

  return (
    <Container bgColor={container.bgColor}>
      <Title name={title.name} textColor={title.textColor} />
      <Form formDetails={form.actions} inputs={form.inputs} submitHandler={(data) => dispatch(add(data))} />
      <Tabs tabs={tabs} tabFilterHandler={setTabFilter} />
      <Todo todoList={todoList} controlsHandler={controlsHandler} tabFilter={tabFilter} />
    </Container>
  );
};

export default App;
