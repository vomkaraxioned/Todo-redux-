import InputContainer from "../../style/InputContainer.style";
import { useRef } from "react";

const Input = ({ type, name, styleName, basis, placeholder,handler }) => {
  const reference = useRef();
  return (
    <InputContainer basis={basis}>
      <input type={type} name={name} className={styleName} placeholder={placeholder} ref={reference} onChange={()=>handler(reference.current.value)}/>
    </InputContainer>
  );
};

export default Input;