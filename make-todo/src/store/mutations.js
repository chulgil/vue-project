const addOneItem = (state, todoItem) => {
  const obj = {complated: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);  
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item, payload.index);
  state.todoItems.splice(payload.index,1);
}

const toggleOneItem = (state, todoItem) => {
  todoItem.complated = !todoItem.complated;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }