import InputContainer from "../../style/InputContainer.style";

const Input = ({ type, name, styleName, basis, placeholder }) => {

  return (
    <InputContainer basis={basis}>
      <input type={type} name={name} className={styleName} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;