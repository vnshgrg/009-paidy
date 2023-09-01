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

export const useTodo = () => {
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

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    toggleComplete,
  };
};
