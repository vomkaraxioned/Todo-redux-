import TabsStyle from "../../style/TabsStyle.style";
import TabItem from "./TabItem";

const Tabs = ({tabs,tabFilterHandler})=>{
  return(
    <TabsStyle>
      {tabs.map(name=><TabItem name={name}  key={name} tabFilterHandler={tabFilterHandler}/>)}
    </TabsStyle>
  );

};

export default Tabs;