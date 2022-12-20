import FormStyle from "../../style/FormStyle.style";
import Input from "./input";

const Form = ({formDetails,inputs}) => {

  return (
    <FormStyle>
      <form action={formDetails.action} name={formDetails.name} >
        {
          inputs.map(({ type, name, styleName,basis, placeholder }) => <Input type={type} name={name} styleName={styleName} basis={basis} placeholder={placeholder} key={name}/>)
        }
      </form>
    </FormStyle>
  );
};

export default Form;