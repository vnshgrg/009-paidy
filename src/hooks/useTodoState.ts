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
import { useCallback, useMemo } from "react";

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
    const todo = todoById(params.id);
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

  const todoById = useCallback(
    (todoId: string): Todo | null => {
      return todos.filter(({ id }) => id === todoId)[0] || null;
    },
    [todos]
  );

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
