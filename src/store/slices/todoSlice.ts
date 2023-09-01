import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  isCompleted: boolean;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface CreateTodoParams {
  title: string;
}

export interface UpdateTodoParams {
  id: string;
  title?: string;
  isCompleted?: boolean;
}

export interface DeleteTodoParams {
  id: string;
}

const initialState: { todos: Todo[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<CreateTodoParams>) => {
      const newTodo: Todo = {
        ...action.payload,
        id: nanoid(),
        isCompleted: false,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      };
      state.todos.unshift(newTodo);
    },

    updateTodo: (state, action: PayloadAction<UpdateTodoParams>) => {
      const newTodo = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = {
            ...todo,
            ...action.payload,
            updatedAt: new Date().getTime(),
          };
        }
        return todo;
      });
      state.todos = [...newTodo];
    },

    removeTodo: (state, action: PayloadAction<DeleteTodoParams>) => {
      const newTodo = state.todos.filter(({ id }) => id !== action.payload.id);
      state.todos = state.todos = [...newTodo];
    },
  },
});

export const { reducer: todoReducer } = todoSlice;
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
