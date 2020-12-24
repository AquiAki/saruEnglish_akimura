import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";

import babyPic1 from "../../assets/マエストロ.png";



export function MaestroScreen() {
  const navigation = useNavigation();
  const toMaestroQuiz = () => {
    navigation.navigate("MaestroQuiz");
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

    const currentLevel = "Maestro";
    setUserInfos(currentLevel);


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>マエストロ</Text>
          <Text>【ついに最終ステージ、マエストロコースへようこそ！】</Text>
          <Image
            source={babyPic1}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
          />
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
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            【全ての単語を覚えたらレベルチェックをうけてください】
            {"\n"}
          </Text>
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
            <Text style={styles.all}>SARU総まとめ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Baby");
            }}
          >
            <Text style={styles.course}>ベイビーへ戻る</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Young");
            }}
          >
            <Text style={styles.course}>ヤングへ戻る</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Trainee");
            }}
          >
            <Text style={styles.course}>トレーニーコースへ戻る</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Star");
            }}
          >
            <Text style={styles.course}>スターコースへ戻る</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("MaestroVoc");
            }}
          >
            <Text style={styles.proceed}>【他のコースへ戻る手続きをする】</Text>
          </TouchableOpacity> */}

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginTop: 30,
    marginBottom: 30,
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
    marginBottom: 60,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign: "center",
    color: "#880000",
  },

  // proceed: {
  //   padding: 10,
  //   marginTop: 20,
  //   marginBottom: 20,
  //   borderColor: "gray",
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   width: 280,
  //   alignItems: "center",
  //   textAlign: "center",
  //   color: "#333333",
  // },
});