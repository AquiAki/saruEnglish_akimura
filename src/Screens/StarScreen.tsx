import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function StarScreen() {
  const navigation = useNavigation();
  const toChat = () => {
    navigation.navigate("Chat");
  };
  return (
    <View style={styles.container}>
      <Text>StarScreen</Text>
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
