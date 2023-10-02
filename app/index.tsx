import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { Link } from "expo-router";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Application started!!</Text>
        <Link href="categories" asChild>
          <Button mode="contained">Categories</Button>
        </Link>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
});
