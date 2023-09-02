import { View, StyleSheet, Alert, FlatList } from "react-native";
import { useAuthentication, useTodo } from "../../hooks";
import { Todo } from "../../store";
import {
  ItemSeparator,
  ListEmpty,
  ListHeader,
  ListItemTodo,
  TodoForm,
} from "../../components";
import { useState } from "react";

export function TodoScreen() {
  const [selectedTodoItem, setSelectedTodoItem] = useState<string | null>(null);
  const { lock } = useAuthentication();
  const { todos, addTodo, removeTodo, updateTodo, toggleComplete, stats } =
    useTodo();

  const handleLock = () => {
    Alert.alert("Lock app?", "Are you sure you want to lock app?", [
      {
        text: "Lock",
        onPress: () => {
          lock();
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

  const handleSelect = (id: string) => {
    if (selectedTodoItem !== id) {
      setSelectedTodoItem(id);
    } else {
      setSelectedTodoItem(null);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item: Todo) => item.id}
        ListHeaderComponent={() => {
          return <ListHeader onLock={handleLock} stats={stats} />;
        }}
        ListEmptyComponent={() => {
          return <ListEmpty />;
        }}
        ItemSeparatorComponent={() => {
          return <ItemSeparator />;
        }}
        renderItem={({ item, index }) => {
          return (
            <ListItemTodo
              key={index}
              item={item}
              onRemove={handleRemove}
              onToggleComplete={handleToggleComplete}
              onSelect={handleSelect}
              selectedItem={selectedTodoItem}
            />
          );
        }}
        stickyHeaderIndices={[0]}
      />
      <TodoForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        selectedItem={selectedTodoItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
