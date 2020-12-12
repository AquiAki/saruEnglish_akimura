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
      <Text style={styles.title}>マエストロ</Text>
      <Text>【ついに最終ステージ、マエストロコースへようこそ！】</Text>
      <Text style={styles.mes}>
        君の医療英語への熱意には驚かされるの~
        {"\n"}
        おめでとう、マエストロ
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.course}>マエストロコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.course}>マエストロコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.course}>マエストロコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.course}>マエストロコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.course}>マエストロコースの「その他」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroQuiz");
        }}
      >
        <Text style={styles.course}>
          マエストロコースのレベルチェックを受ける
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MaestroVoc");
        }}
      >
        <Text style={styles.all}>【SARU総まとめ】</Text>
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
    marginBottom: 100,
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

  all: {
    padding: 10,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign: "center",
    color:"red",
  },
});