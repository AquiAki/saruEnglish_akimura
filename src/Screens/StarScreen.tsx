import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function StarScreen() {
  const navigation = useNavigation();
  const toStarQuiz = () => {
    navigation.navigate("StarQuiz");
  };
  return (
    <View style={styles.container}>
      <Text>スター</Text>
      <Text>ここはステージ4、SARUのスターコースです</Text>
      <Text>すごいよ、君はスターだよ！初心を忘れずに最終ステージまでこのまま突き進もう！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text>ヤングコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text>ヤングコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text>ヤングコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text>ヤングコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text>ヤングコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarQuiz");
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
