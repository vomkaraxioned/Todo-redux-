import styled from "styled-components";

const TabsStyle = styled.ul`
  display:flex;
  justify-content:center;

  li {
    padding:10px 2%;
    border-radius:50px;
    margin-right:5%;
    background-color:#fff;
    font-weight:700;
    text-align:center;
    text-transform:capitalize;

    &:last-child { margin-right:0}

    &:hover { transform:scale(1.1) }
  }
`;

export default TabsStyle;