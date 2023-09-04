import { View, StyleSheet, FlatList, Keyboard } from "react-native";
import { useTodo } from "../../hooks";
import { Todo } from "../../store";
import {
  ItemSeparator,
  ListEmpty,
  ListHeader,
  ListItemTodo,
  TodoForm,
} from "../../components";
import { useEffect } from "react";

export function TodoScreen() {
  const {
    todos,
    stats,
    handleAdd,
    handleLock,
    handleRemove,
    handleSelect,
    handleToggleComplete,
    handleUpdate,
    selectedTodoItem,
  } = useTodo();

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      handleSelect(null);
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item: Todo) => item.id}
        stickyHeaderIndices={[0]}
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
