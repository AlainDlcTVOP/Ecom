import React from "react";
import { StyleSheet, Text, View , LogBox} from "react-native";
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <View style={styles.container}>
     <Header />
      <ProductContainer />
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
