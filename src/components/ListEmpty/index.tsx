import { View, Text, Button } from "react-native";
import React from "react";

type ListEmptyProps = {
  onAdd: () => void;
};

export const ListEmpty: React.FC<ListEmptyProps> = ({ onAdd }) => {
  return (
    <View style={{ marginVertical: 100 }}>
      <Text style={{ textAlign: "center" }}>No todo items yet.</Text>
      <Button title="+ Add item" onPress={onAdd} />
    </View>
  );
};
