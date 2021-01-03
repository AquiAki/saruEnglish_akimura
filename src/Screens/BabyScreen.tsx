import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import "react-native-gesture-handler";
import firebase from "firebase";

import babyPic from "../../assets/baby.png";
import babyLetter from "../../assets/babyLetter.png";

// import { NavigationContainer } from "@react-navigation/native";
// import { Header, Container, Title } from "native-base";


export function BabyScreen() {
  const navigation = useNavigation();

  //firebaseのLevelを更新させる
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

  const currentLevel = "Baby";
  setUserInfos(currentLevel);



  // // サインアウトの処理
  // const pressedSignOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       console.log("サインアウトしました");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // //ナビゲーションヘッダーの左側に配置
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         onPress={() => {
  //           pressedSignOut();
  //           toSignIn();
  //         }}
  //       >
  //         <Text>Sign Out</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);




  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Container style={styles.header}>
          <Header>
            <TouchableOpacity
              onPress={() => {
                pressedSignOut();
                toSignIn();
              }}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </Header>
        </Container> */}

        <Image
          source={babyLetter}
          style={{
            marginTop: 40,
            width: 100,
            height: 100,
            marginLeft: 150,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.text}>【ようこそ、ベイビーコースへ】</Text>
        <Image
          source={babyPic}
          style={{
            marginLeft: 120,
            width: 150,
            height: 150,
            resizeMode: "contain",
            alignItems: "center",
          }}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyBody");
          }}
        >
          <Text style={styles.course}>Basic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyAnatomy");
          }}
        >
          <Text style={styles.course}>Anatomy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyTest");
          }}
        >
          <Text style={styles.course}>ベイビーコースの「検査と薬」</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyDisease");
          }}
        >
          <Text style={styles.course}>ベイビーコースの「病名」</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyOther");
          }}
        >
          <Text style={styles.course}>ベイビーコースの「その他」</Text>
        </TouchableOpacity>

        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          【5つのコースを覚えたらレベルチェックをうけてください】
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BabyQuiz");
          }}
        >
          <Text style={styles.course}>レベルチェックを受ける</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFEEFF",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  // header: {
  //   width: 400,
  // },
  text: {
    color: "black",
    textAlign: "center",
    marginBottom: 0,
    fontSize: 15,
    
  },
  course: {
    marginLeft:50,
    padding: 15,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    width: 280,
    alignItems: "center",
    textAlign: "center",
  },
});
