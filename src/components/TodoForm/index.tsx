import {
  View,
  InputAccessoryView,
  TextInput,
  Dimensions,
  StyleSheet,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { useTodoState } from "../../hooks";

type TodoFormProps = {
  onAdd: (title: string) => void;
  onUpdate: (id: string, title: string) => void;
  selectedItem: string | null;
};

const inputAccessoryViewID = "TodoItemFormInput";

const WIDTH = Dimensions.get("window").width;

export const TodoForm: React.FC<TodoFormProps> = ({
  onAdd,
  onUpdate,
  selectedItem,
}) => {
  const [focused, setFocused] = useState(false);
  const [title, setTitle] = useState("");
  const { todoById } = useTodoState();

  const todoItemFormInput = useRef<TextInput>(null);
  const todoItemFormInput2 = useRef<TextInput>(null);

  useEffect(() => {
    if (selectedItem) {
      const selectedTodo = todoById(selectedItem);
      setTitle(selectedTodo?.title || "");
      todoItemFormInput2?.current?.focus();
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
    Keyboard.dismiss();
  };

  const buttonElement = (
    <Button style={styles.button} onPress={handleSubmit}>
      <Icon
        icon={selectedItem ? "check" : "plus-big"}
        size="base"
        stroke="#fff"
      />
    </Button>
  );

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          inputAccessoryViewID={inputAccessoryViewID}
          ref={todoItemFormInput2}
          value={title}
          placeholder="Add todo item"
          onChangeText={(text) => {
            setTitle(text);
          }}
          style={styles.input}
          onFocus={() => {
            if (!focused) {
              todoItemFormInput?.current?.focus();
              setFocused(true);
            } else {
              todoItemFormInput?.current?.blur();
              setFocused(false);
              Keyboard.dismiss();
            }
          }}
        />
        {buttonElement}
      </View>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={todoItemFormInput}
            value={title}
            placeholder="Add todo item"
            onChangeText={(text) => {
              setTitle(text);
            }}
            style={styles.input}
          />
          {buttonElement}
        </View>
      </InputAccessoryView>
    </>
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
    borderRadius: 6,
    fontSize: 18,
    color: "#444",
    width: WIDTH - 86,
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
