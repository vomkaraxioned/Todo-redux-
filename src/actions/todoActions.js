const add = (data, i) => { return { type: "add", todo: data } };

const remove = (details) => {
  return { type: "remove", id: details.id, to_remove: 1 };
};

const complete = (details) => {
  return { type: "complete", id: details.id, to_remove: 0 };
};

const edit = (textarea) => {
  return { type: "edit", element: textarea };
};

const saveEdited = (details, textarea) => {
  return { type: "save", element: textarea, to_remove: 0, details: details };
}

export default add;
export { remove, complete, edit, saveEdited };