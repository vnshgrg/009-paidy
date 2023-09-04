import { todoReducer, addTodo, updateTodo, removeTodo } from "./todoSlice";
import {
  CreateTodoParams,
  UpdateTodoParams,
  DeleteTodoParams,
} from "./todoSlice"; // Import the types as well
import { nanoid } from "@reduxjs/toolkit";

describe("todoSlice", () => {
  const initialState = { todos: [] };

  describe("reducer", () => {
    it("should handle the addTodo action", () => {
      const newTodoParams: CreateTodoParams = {
        title: "Test Todo",
      };
      const action = addTodo(newTodoParams);
      const newState = todoReducer(initialState, action);

      expect(newState.todos.length).toEqual(1);

      const newTodo = newState.todos[0];
      expect(newTodo.title).toEqual(newTodoParams.title);
      expect(newTodo.isCompleted).toEqual(false);
      expect(typeof newTodo.id).toBe("string");
    });

    it("should handle the updateTodo action", () => {
      const todoId = nanoid();
      const initialStateWithTodo = {
        todos: [
          {
            id: todoId,
            title: "Initial Todo",
            isCompleted: false,
            createdAt: 123456789,
            updatedAt: 123456789,
          },
        ],
      };

      const updateParams: UpdateTodoParams = {
        id: todoId,
        title: "Updated Todo",
      };

      const action = updateTodo(updateParams);
      const newState = todoReducer(initialStateWithTodo, action);

      expect(newState.todos.length).toEqual(1);
      const updatedTodo = newState.todos[0];
      expect(updatedTodo.title).toEqual(updateParams.title);
      expect(updatedTodo.isCompleted).toBeFalsy();
      expect(updatedTodo.updatedAt).not.toEqual(123456789); // Updated timestamp should change.
    });

    it("should handle the removeTodo action", () => {
      const todoId = nanoid();
      const initialStateWithTodo = {
        todos: [
          {
            id: todoId,
            title: "Todo to be removed",
            isCompleted: false,
            createdAt: 123456789,
            updatedAt: 123456789,
          },
        ],
      };

      const action = removeTodo({ id: todoId });
      const newState = todoReducer(initialStateWithTodo, action);

      expect(newState.todos.length).toEqual(0);
    });
  });

  it("should handle the markComplete action", () => {
    const todoId = nanoid();
    const initialStateWithTodo = {
      todos: [
        {
          id: todoId,
          title: "Todo to be completed",
          isCompleted: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
      ],
    };

    const updateParams: UpdateTodoParams = {
      id: todoId,
      isCompleted: true,
    };

    const action = updateTodo(updateParams);
    const newState = todoReducer(initialStateWithTodo, action);

    expect(newState.todos.length).toEqual(1);
    const updatedTodo = newState.todos[0];
    expect(updatedTodo.isCompleted).toBeTruthy();
  });
});
