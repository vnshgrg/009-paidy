import { View, Text, Button } from "react-native";
import React from "react";

export const ListEmpty: React.FC = () => {
  return (
    <View style={{ marginVertical: 100 }}>
      <Text style={{ textAlign: "center" }}>No todo items yet.</Text>
    </View>
  );
};
