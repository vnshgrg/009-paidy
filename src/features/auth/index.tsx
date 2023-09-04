import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { LoginButton } from "../../components";
import { useAuth } from "../../hooks";

export function AuthScreen() {
  const { loading, isCompatible, handleSuccess } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi There,</Text>
      <Text style={styles.subtitle}>Please authenticate</Text>
      <View style={styles.section}>
        {isCompatible ? (
          <LoginButton onSuccess={handleSuccess} />
        ) : (
          <Text style={styles.error}>
            Your device is not compatible for local authentication.
          </Text>
        )}
      </View>
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
  title: {
    fontSize: 24,
    color: "#333",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
  section: {
    marginTop: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});
