import styled from "styled-components";

const TodoList = styled.ul`
  display:flex;
  flex-wrap:wrap;

  li {
    border-radius:10px;


    &:hover { transform:scale(.9) }
  }
`;

export default TodoList;