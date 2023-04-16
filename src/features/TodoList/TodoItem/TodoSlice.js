import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodolist = window.localStorage.getItem("todoList");
  if (localTodolist) {
    return JSON.parse(localTodolist);
  }
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};
const initialValue = {
  filterStatus: "All Status",
  filterPriority: "All Priority",
  todoList: getInitialTodo(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      // console.log(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify({ ...action.payload })
        );
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
            todo.priority = action.payload.priority;
            todo.deadline = action.payload.deadline;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    updateFilterPriority: (state, action) => {
      state.filterPriority = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  updateFilterStatus,
  updateFilterPriority,
} = todoSlice.actions;
export default todoSlice.reducer;
