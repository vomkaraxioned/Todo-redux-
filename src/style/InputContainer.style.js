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
      border-radius:5px;
      margin-right:3%;

      &:focus { outline:2px solid #271c6c; }
    }

    &[type=submit] {
      width:50px;
      height:50px;
      border-radius:50%;
      background:#271c6c;
      text-indent:-9999px;
      display:block;
    }
  }
`;

export default InputContainer;