import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  id?: string;
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

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
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
      state.push(newTodo);
    },
    updateTodo: (state, action: PayloadAction<UpdateTodoParams>) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = {
            ...todo,
            ...action.payload,
            updatedAt: new Date().getTime(),
          };
        }
        return todo;
      });
    },
    removeTodo: (state, action: PayloadAction<DeleteTodoParams>) => {
      state.filter(({ id }) => id === action.payload.id);
    },
  },
});

export const { reducer: todoReducer } = todoSlice;
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
