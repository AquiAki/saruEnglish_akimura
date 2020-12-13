import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View ,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

import babyPic1 from "../../assets/ヤング.png";
import { userInfo } from "os";

export function YoungScreen() {
  const navigation = useNavigation();
  const toYoungQuiz = () => {
    navigation.navigate("YoungQuiz");
  };

  const [level, setLevel] = useState<string>("");
  const uid = firebase.auth().currentUser?.uid; //現在のユーザーのuidを取得

  const getUsersDocRef = async () => {
    return await firebase.firestore().collection("users").doc(uid); //Cloud Firestoreのusersというコレクションの中のドキュメントを参照する
  };
  const setUserInfos = async (level: string) => {
    const docRef = await getUsersDocRef();
    // const newUserInfos = {
    //   userLevel: level,
    //   userId: uid, //cloudのuserのuidをuserIdに変更してる
    // } as userInfos;
    console.log(docRef.id);
    // console.log(newUserInfos);
    docRef.update({ userLevel: level, userId: uid }); // 新しいuserInfosをDBに入れる
  };

  // docRef.set(newUserInfos);

  const currentLevel = "Young";
  setUserInfos(currentLevel);

  // const db = firebase.firestore();
  // db.collection("users")
  //   .doc("0OsfrrrzbloRlekLWaXC")
  //   .update({ userLevel: "お" });

  // const db = firebase.firestore();
  // db.collection('users').doc('').update({
  //   userId: ,
  //   userLevel: ,
  // })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ヤング</Text>
      <Text>【ここはステージ2、SARUのヤングコースです】</Text>
      <Image
        source={babyPic1}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.mes}>僕らヤングは成長が止まらないね！</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「身体」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「症状」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「検査」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「病名」</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungVoc");
        }}
      >
        <Text style={styles.course}>ヤングコースの「その他」</Text>
      </TouchableOpacity>
      <Text>{"\n"}【5つのコースを覚えたらレベルチェックをうけてください】</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("YoungQuiz");
        }}
      >
        <Text style={styles.course}>ヤングコースのレベルチェックを受ける</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};


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
    marginBottom:50,
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
