const add = (data, i) => { return { type: "add", todo: data } };

const remove = (e) => {
  const [id,status] = e.target.parentElement.parentElement.dataset.details;
  return { type: "remove",id:id };
};

const complete = (e) => {

  return { type: "complete" };
};

const edit = (e) => {
  return { type: "edit" };
};

export default add;
export { remove, complete, edit };