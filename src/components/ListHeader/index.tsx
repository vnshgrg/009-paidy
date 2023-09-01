import { View, Text, Button } from "react-native";
import React from "react";

type ListHeaderProps = {
  onLock: () => void;
  onAdd: () => void;
};

export const ListHeader: React.FC<ListHeaderProps> = ({ onLock, onAdd }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#eee",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Todo</Text>
      </View>
      <Button title="Lock" onPress={onLock} />
      <Button title="Add item" onPress={onAdd} />
    </View>
  );
};
