import { useAppDispatch, useAppSelector } from "./useStore";
import {
  addTodo as AddTodo,
  updateTodo as UpdateTodo,
  removeTodo as RemoveTodo,
  CreateTodoParams,
  UpdateTodoParams,
  DeleteTodoParams,
  Todo,
} from "../store";
import { useMemo } from "react";

export const useTodoState = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const addTodo = (params: CreateTodoParams) => {
    dispatch(AddTodo(params));
  };

  const updateTodo = (params: UpdateTodoParams) => {
    dispatch(UpdateTodo(params));
  };

  const removeTodo = (params: DeleteTodoParams) => {
    dispatch(RemoveTodo(params));
  };

  const toggleComplete = (params: Pick<UpdateTodoParams, "id">) => {
    const todo = todos.filter(({ id }) => id === params.id)[0];
    if (todo) {
      dispatch(UpdateTodo({ ...params, isCompleted: !todo.isCompleted }));
    }
  };

  const stats = useMemo(
    () => ({
      total: todos.length,
      completed: todos.filter(({ isCompleted }) => isCompleted).length,
    }),
    [todos]
  );

  const todoById = (todoId: string): Todo | null => {
    return todos.filter(({ id }) => id === todoId)[0] || null;
  };

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    toggleComplete,
    stats,
    todoById,
  };
};
