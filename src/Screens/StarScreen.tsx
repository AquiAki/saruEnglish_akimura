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
      <Text style={styles.title}>スター</Text>
      <Text style={styles.mes}>
        【ここはステージ4、SARUのスターコースです】
      </Text>
      <Text>
        すごいよ、君はスターだよ！初心を忘れずに最終ステージまでこのまま突き進もう！
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text style={styles.course}>スターコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text style={styles.course}>スターコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text style={styles.course}>スターコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text style={styles.course}>スターコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarVoc");
        }}
      >
        <Text style={styles.course}>スターコースの「その他」</Text>
      </TouchableOpacity>
      <Text>{"\n"}【5つのコースを覚えたらレベルチェックをうけてください】</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StarQuiz");
        }}
      >
        <Text style={styles.course}>スターコースのレベルチェックを受ける</Text>
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
  title: {
    color: "blue",
    marginBottom: 50,
    fontSize: 30,
  },
  mes: {
    fontFamily: "Arial",
    marginBottom: 50,
  },
  course: {
    padding: 10,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign: "center",
  },
});