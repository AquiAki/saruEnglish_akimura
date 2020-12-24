import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

import babyPic1 from "../../assets/トレーニー.png";



export function TraineeScreen() {
  const navigation = useNavigation();
  const toTraineeQuiz = () => {
    navigation.navigate("TraineeQuiz");
  };


  const uid = firebase.auth().currentUser?.uid; //現在のユーザーのuidを取得

  const getUsersDocRef = async () => {
    return await firebase.firestore().collection("users").doc(uid); //Cloud Firestoreのusersというコレクションの中のドキュメントを参照する
  };
  const setUserInfos = async (level: string) => {
    const docRef = await getUsersDocRef();
    console.log(docRef.id);
    // console.log(newUserInfos);
    docRef.update({ userLevel: level, userId: uid }); // 新しいuserInfosをDBに入れる
  };

  // docRef.set(newUserInfos);

  const currentLevel = "Trainee";
  setUserInfos(currentLevel);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>トレーニー</Text>
      <Text>【ステージ3、SARUのトレーニーコース】</Text>
      <Image
        source={babyPic1}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.mes}>ここは踏ん張りどころだ、継続は力なりです！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeVoc");
        }}
      >
        <Text style={styles.course}>トレーニーコースの「その他」</Text>
      </TouchableOpacity>
      <Text>{"\n"}【5つのコースを覚えたらレベルチェックをうけてください】</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TraineeQuiz");
        }}
      >
        <Text style={styles.course}>
          トレーニーコースのレベルチェックを受ける
        </Text>
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