import { View, StyleSheet, Text, Button, Alert } from "react-native";
import { useAuthentication } from "../../hooks";

export function TodoScreen() {
  const { lock } = useAuthentication();

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

  return (
    <View style={styles.container}>
      <Text>Todo</Text>
      <Button title="Lock" onPress={handleLock} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
