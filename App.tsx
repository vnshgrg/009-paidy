import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import { store } from "./src/store";
import Main from "./src/features";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
