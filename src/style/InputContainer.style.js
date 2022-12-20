import styled from "styled-components";
const InputContainer = styled.div`
  display:flex;
  flex-basis:${props=>props.basis};

  input {
    width:100%;
    border:none;
    outline:none;

    &[type=text],&[type=email] {
      padding:7px 2%;
      margin-right:5%;

      &:focus { outline:2px solid #271c6c; }
    }

    &[type=submit] {
      padding:10px;
      border-radius:50%;
      background:#271c6c;
    }
  }
`;

export default InputContainer;