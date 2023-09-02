import {
  View,
  InputAccessoryView,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { useTodo } from "../../hooks";

type TodoFormProps = {
  onAdd: (title: string) => void;
  onUpdate: (id: string, title: string) => void;
  selectedItem: string | null;
};

export const TodoForm: React.FC<TodoFormProps> = ({
  onAdd,
  onUpdate,
  selectedItem,
}) => {
  const [title, setTitle] = useState("");
  const { todoById } = useTodo();

  useEffect(() => {
    if (selectedItem) {
      const selectedTodo = todoById(selectedItem);
      setTitle(selectedTodo?.title || "");
    } else {
      setTitle("");
    }
  }, [selectedItem]);

  const handleSubmit = () => {
    if (selectedItem) {
      onUpdate(selectedItem, title);
    } else {
      onAdd(title);
    }
    setTitle(() => "");
  };

  return (
    <InputAccessoryView>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          placeholder="Add todo item"
          onChangeText={(text) => {
            setTitle(text);
          }}
          style={styles.input}
        />
        <Button style={styles.button} onPress={handleSubmit}>
          <Icon
            icon={selectedItem ? "check" : "plus-big"}
            size="base"
            stroke="#fff"
          />
        </Button>
      </View>
    </InputAccessoryView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f6f6f6",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    flexGrow: 1,
    borderRadius: 6,
    fontSize: 18,
    color: "#444",
  },
  button: {
    borderRadius: 38,
    marginLeft: 16,
    backgroundColor: "#888",
    height: 38,
    width: 38,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
});
