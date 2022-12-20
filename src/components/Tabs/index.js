import TabsStyle from "../../style/TabsStyle.style";
import TabItem from "./TabItem";

const Tabs = ({tabs})=>{
  return(
    <TabsStyle>
      {tabs.map(name=><TabItem name={name}  key={name}/>)}
    </TabsStyle>
  );

};

export default Tabs;