import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { LoginButton } from "../../components";
import { useAuthentication, useLocalAuthentication } from "../../hooks";

export function AuthScreen() {
  const { loading, isCompatible } = useLocalAuthentication();
  const { unlock } = useAuthentication();

  const handleSuccess = () => {
    unlock();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Hi There!</Text>
      <Text>Please authenticate.</Text>
      {isCompatible ? (
        <LoginButton onSuccess={handleSuccess} />
      ) : (
        <Text>Your device is not compatible for Local Authentication.</Text>
      )}
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
