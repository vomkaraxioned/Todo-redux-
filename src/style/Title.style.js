import styled from "styled-components";

const Heading = styled.h1`
  padding:53px 0 35px 0;
  color:${props=>props.textColor};
  cursor:pointer;
  font-size:31px;
  font-weight:900;
  text-align:center;
  text-shadow: -3px -3px 2px rgba(0, 0, 0, 1);
  text-transform:capitalize;

  &:hover {
    transform:scale(1.1)
  }
`;

export default Heading ;