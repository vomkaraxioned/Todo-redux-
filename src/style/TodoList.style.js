import styled from "styled-components";

const TodoList = styled.ul`
  width:90%;
  margin:0 auto;
  display:flex;
  flex-wrap:wrap;

  li {
    padding:10px 2%;
    height:128px;
    border-radius:10px;
    margin-right:1%;
    display:flex;
    background:#fff;
    flex-basis:18%;
    flex-direction:column;

    &:hover { transform:scale(.9) }

    &:nth-child(4n) { margin-rigth:0 }

    textarea { 
      flex-basis:100%;

      &:focus { outline:1px solid #000 }
    }
    
    div {
      display:flex;
      justify-content:flex-end;

      button {
        border:none;
        background:none;
        text-indent:-9999px;

        &::before {
          float:right;
          font-family:'FontAwesome';
          font-size:21px;
          font-weight:900;
          text-indent:0;
        }

        &:first-child::before { 
          color:#271c6c;
          content:'\f303';
        }

        &:nth-child(2)::before { 
          color:#008000;
          content:'\f00c';
        }

        &:last-child::before { 
          color:#ff0000;
          content:'\f00d';
        }
      }
    }
  }

  .err {
    padding:40px 0 ;
    background:none;
    flex-basis:100%;
    font-size:28px;
    text-align:center;
  }
`;

export default TodoList;