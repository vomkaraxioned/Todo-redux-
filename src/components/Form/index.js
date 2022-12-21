import FormStyle from "../../style/FormStyle.style";
import Input from "./input";

import { useState } from "react";

const Form = ({formDetails,inputs,submitHandler}) => {
  const [text,setText] = useState();

  const eventPreventer = (e)=>{
    e.preventDefault();
    submitHandler(text);
  }

  return (
    <FormStyle>
      <form action={formDetails.action} name={formDetails.name} onSubmit={eventPreventer}>
        {
          inputs.map(({ type, name, styleName,basis, placeholder },i) => <Input type={type} name={name} styleName={styleName} basis={basis} placeholder={placeholder} key={name} handler={setText}/>)
        }
      </form>
    </FormStyle>
  );
};

export default Form;