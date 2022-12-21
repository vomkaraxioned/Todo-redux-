const TabItem = ({ name, tabFilterHandler }) => <li data-status={name} onClick={(e) => tabFilterHandler(e.target.dataset.status)}>{name}</li>;

export default TabItem;