import { View, Text } from "react-native";
import React from "react";

export const ListEmpty: React.FC = () => {
  return (
    <View style={{ marginVertical: 100 }}>
      <Text style={{ textAlign: "center", color: "#999", fontSize: 18 }}>
        No todo items yet.
      </Text>
    </View>
  );
};
