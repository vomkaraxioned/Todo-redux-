const add = (data, i) => { return { type: "add", todo: data } };

const remove = (e) => {
  const id = e.target.parentElement.parentElement.dataset.id;
  return { type: "remove", id: id, to_remove: 1 };
};

const complete = (e) => {
  const id = e.target.parentElement.parentElement.dataset.id;
  return { type: "complete", id: id, to_remove: 0 };
};

const edit = (e) => {
  return { type: "edit" };
};

export default add;
export { remove, complete, edit };