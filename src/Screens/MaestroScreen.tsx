import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function MaestroScreen() {
  const navigation = useNavigation();
  const toHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>MaestroScreen</Text>
      <StatusBar style="auto" />
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
