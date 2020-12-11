import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function YoungScreen() {
  const navigation = useNavigation();
  const toYoungQuiz = () => {
    navigation.navigate("YoungQuiz");
  };
  return (
    <View style={styles.container}>
      <Text>ヤング</Text>
      <Text>ここはステージ2、SARUのヤングコースです</Text>
      <Text>僕らヤングの成長が止まらないぜ！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text>ヤングコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text>ヤングコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text>ヤングコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text>ヤングコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text>ヤングコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungQuiz");
        }}
      >
        <Text>ヤングコースのレベルチェックを受ける</Text>
      </TouchableOpacity>
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
