import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Todo } from "../../store";
import { formatDate } from "../../utils";

type ListItemTodoProps = {
  item: Todo;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
};

export const ListItemTodo: React.FC<ListItemTodoProps> = ({
  item,
  onToggleComplete,
  onRemove,
}) => {
  const { id, isCompleted, title, createdAt } = item;
  return (
    <View
      style={{
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            onToggleComplete(id);
          }}
        >
          <Text>{isCompleted ? "YES" : "NO"}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexGrow: 1, marginHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 8,
            color: "#333",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#999",
          }}
        >
          {formatDate(createdAt)}
        </Text>
      </View>
      <View>
        <Button
          title="Remove"
          onPress={() => {
            onRemove(id);
          }}
        />
      </View>
    </View>
  );
};
