import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAuthentication, useTodo } from "../../hooks";
import { Todo } from "../../store";
import {
  ItemSeparator,
  ListEmpty,
  ListHeader,
  ListItemTodo,
} from "../../components";

export function TodoScreen() {
  const { lock } = useAuthentication();
  const { todos, addTodo, removeTodo, toggleComplete } = useTodo();

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

  const getRandomInt = (max: number = 100) => {
    return Math.floor(Math.random() * max);
  };

  const handleAdd = () => {
    addTodo({ title: `${getRandomInt()}` });
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

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item: Todo) => item.id}
        ListHeaderComponent={() => {
          return <ListHeader onAdd={handleAdd} onLock={handleLock} />;
        }}
        ListEmptyComponent={() => {
          return <ListEmpty onAdd={handleAdd} />;
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
            />
          );
        }}
        stickyHeaderIndices={[0]}
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
