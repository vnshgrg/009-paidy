import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Todo } from "../../store";
import { formatDate } from "../../utils";
import { Icon, IconProps } from "../Icon";
import { Button } from "../Button";

type ListItemTodoProps = {
  item: Todo;
  selectedItem: string | null;
  onToggleComplete: (id: string) => void;
  onRemove: (id: string) => void;
  onSelect: (id: string) => void;
};

const WIDTH = Dimensions.get("window").width;

export const ListItemTodo: React.FC<ListItemTodoProps> = ({
  item,
  onToggleComplete,
  onRemove,
  onSelect,
  selectedItem,
}) => {
  const { id, isCompleted, title, createdAt } = item;

  const iconProperties: IconProps = {
    icon: isCompleted ? "check" : "minus",
    type: isCompleted ? "positive" : "cancel",
  };

  return (
    <View
      style={[
        styles.todoItem,
        {
          opacity: isCompleted ? 0.4 : 1,
          backgroundColor:
            selectedItem && selectedItem === id ? "#efefef" : "#fff",
        },
      ]}
    >
      <View>
        <Button
          onPress={() => {
            onToggleComplete(id);
          }}
        >
          <Icon
            icon={iconProperties.icon}
            type={iconProperties.type}
            size="md"
          />
        </Button>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          onSelect(id);
        }}
        style={styles.itemTitleContainer}
      >
        <Text
          style={[
            styles.itemTitleText,
            isCompleted && styles.itemCompletedText,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[styles.itemMetadata, isCompleted && styles.itemCompletedText]}
        >
          {formatDate(createdAt)}
        </Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          onRemove(id);
        }}
        style={{
          backgroundColor: "#f6f6f6",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 30,
        }}
      >
        <Icon icon="trash" size="md" type="destructive" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemTitleContainer: {
    marginHorizontal: 16,
    width: WIDTH - 32 - 32 - 12 - 16 - 32,
  },
  itemTitleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 6,
    color: "#333",
  },
  itemCompletedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  itemMetadata: {
    fontSize: 12,
    color: "#999",
  },
});
