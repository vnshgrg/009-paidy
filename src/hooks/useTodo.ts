import { useState } from "react";
import { Alert } from "react-native";
import { useAuthenticationState } from "./useAuthenticationState";
import { useTodoState } from "./useTodoState";

export const useTodo = () => {
  const [selectedTodoItem, setSelectedTodoItem] = useState<string | null>(null);
  const { setUnlocked } = useAuthenticationState();
  const { todos, addTodo, removeTodo, updateTodo, toggleComplete, stats } =
    useTodoState();

  const handleLock = () => {
    Alert.alert("Lock app?", "Are you sure you want to lock app?", [
      {
        text: "Lock",
        onPress: () => {
          setUnlocked(false);
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const handleAdd = (title: string) => {
    if (title && title.trim() !== "") {
      addTodo({ title: title.trim() });
    }
  };

  const handleUpdate = (id: string, title: string) => {
    if (id && title && title.trim() !== "") {
      updateTodo({ id, title });
    }
    setSelectedTodoItem(null);
  };

  const handleToggleComplete = (id: string) => {
    toggleComplete({ id });
  };

  const handleRemove = (id: string) => {
    Alert.alert("Are you sure?", "Do you want to delete this todo item?", [
      {
        text: "Delete",
        onPress: () => {
          removeTodo({ id });
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const handleSelect = (id: string | null) => {
    if (selectedTodoItem !== id) {
      setSelectedTodoItem(id);
    } else {
      setSelectedTodoItem(null);
    }
  };

  return {
    todos,
    stats,
    handleAdd,
    handleLock,
    handleRemove,
    handleSelect,
    handleToggleComplete,
    handleUpdate,
    selectedTodoItem,
  };
};
