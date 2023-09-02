import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";

type ListHeaderProps = {
  onLock: () => void;
  stats: {
    total: number;
    completed: number;
  };
};

export const ListHeader: React.FC<ListHeaderProps> = ({ onLock, stats }) => {
  const { total, completed } = stats;
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.title}>Todo</Text>
        <Text style={styles.stats}>
          {completed} of {total} completed
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onLock} style={styles.button}>
          <Icon icon="unlock" size="md" stroke="#666" />
          <Text style={styles.buttonText}>Lock</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 12,
    backgroundColor: "#f6f6f6",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 4 },
  stats: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  button: {
    marginHorizontal: 6,
    alignItems: "center",
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: { fontSize: 16, marginLeft: 8, color: "#444", display: "none" },
});
