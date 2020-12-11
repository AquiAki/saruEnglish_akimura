import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function MaestroScreen() {
  const navigation = useNavigation();
  const toMaestroQuiz = () => {
    navigation.navigate("MaestroQuiz");
  };
  return (
    <View style={styles.container}>
      <Text>マエストロ</Text>
      <Text>ついに最終ステージ、マエストロコースへようこそ！</Text>
      <Text>君の医療英語への熱意には驚かされるの~。おめでとう、マエストロ。</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text>マエストロコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text>マエストロコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text>マエストロコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text>マエストロコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text>マエストロコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroQuiz");
        }}
      >
        <Text>マエストロコースのレベルチェックを受ける</Text>
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
