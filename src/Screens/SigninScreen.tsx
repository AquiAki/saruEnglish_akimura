import { StatusBar as ExpoStatusBar } from "expo-status-bar"; 
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import babyPic from "../../assets/basicSaru.png";


export function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [users, setUsers] = useState([]);
  // const [userInfo, setUserInfo] = useState<userInfos[]>([]);
  // const [level, setLevel] = useState<string>("");

  const navigation = useNavigation();
  const toSignup = () => {
    navigation.navigate("SignUp");
  };

  const pressedSignIn = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // userがnullかもしれない対策(firebaseモジュールの仕様？)
        if (!user) throw new Error("user is empty");
        if (!user.user) throw new Error("user.user is empty");
        if (!user.user.email) throw new Error("user.user.email is empty");

        const currentUser: signedInUser = {
          email: user.user.email,
          uid: user.user.uid,
        };
        // console.log(JSON.stringify(user));
        Alert.alert("成功！", "正常にサインインできました。");

        const db = firebase.firestore();
        db.collection("users")
          .get()
          .then((snapshot) => {
            const _users: any = [];
            snapshot.forEach((doc) => {
              if (doc.data().userId === currentUser.uid) {
                // console.log("typeof : ",typeof(doc.data().userLevel))
                const userInfo = doc.data() as userInfos;
                userListItems(userInfo.userLevel);
                console.log(currentUser);
                console.log(doc.data().userLevel);
                // setLevel(userInfo.userLevel);
              }
            });
          });

        const userListItems = (level: string) => {
          // console.log("level",level)
          if (level === "Maestro") {
            navigation.navigate("Maestro");
          } else if (level === "Star") {
            navigation.navigate("Star");
          } else if (level === "Trainee") {
            navigation.navigate("Trainee");
          } else if (level === "Young") {
            navigation.navigate("Young");
          } else {
            navigation.navigate("Baby");
          }
        };

        // //useEffectの中にデータベースのusersコレクション内の値を監視する処理を記述
        //   useEffect(() => {
        //     const users = [] as userInfos[];
        //     //CloudFirestoreからメッセージをとってくる(常時監視)
        //     const unsubscribe =firebase
        //       .firestore()
        //       .collection("users")
        //       // .orderBy("createdAt")
        //       .onSnapshot((snapshot) => {
        //         snapshot.docChanges().forEach((change) => {
        //           //変化の種類が"added"だったときの処理
        //           if (change.type === "added") {
        //             //今アプリにもっているmessagesに取得した差分を追加
        //             users.unshift(change.doc.data() as userInfos);
        //             // } else if (change.type === "removed") {
        //             //   console.log("【modified data】");
        //             // } else if (change.type === "modified") {
        //             //   console.log("【deleted some data】");
        //           }
        //           setUserInfo(users);
        //         });
        //       });
        //       return unsubscribe;  // ここで常時監視のリスナーを取り除いている
        //   }, []);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("エラー！", `${error}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.titleAndFieldView}>
          
          <Text
            style={{
              fontSize: 30,
              color: "#8B4513",
            }}
          >
            医療英語アプリ SARU
          </Text>

          <Image
            source={babyPic}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
            }}
          />

          <TextInput
            style={styles.inputField}
            placeholder="                       メールアドレスを入力"
            onChangeText={(email) => {
              setEmail(email);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputField}
            placeholder="                       パスワードを入力"
            onChangeText={(password) => {
              setPassword(password);
            }}
            keyboardType="visible-password"
            secureTextEntry={true}
          />
          <ExpoStatusBar style="auto" />
        </View>
        <View style={styles.logInButtons}>
          <Button
            title="ログイン"
            color="white"
            onPress={() => {
              pressedSignIn(email, password);
            }}
          />
        </View>

        <Text style={styles.screenTitle}>登録がまだの方は新規登録へ</Text>
        <View style={styles.registerButtons}>
          <Button
            title="新規登録"
            color="white"
            onPress={() => {
              toSignup();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleAndFieldView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  screenTitle: {
    fontSize: 15,
    marginBottom: 20,
  },
  inputField: {
    width: "80%",
    marginBottom: 20,
    height: 35,
    backgroundColor: "white",
    borderRadius: 10,
  },
  logInButtons: {
    borderRadius: 10,
    marginBottom: 70,
    backgroundColor: "#8B4513",
    shadowColor: "#D2B48C",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  registerButtons: {
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#8B4513",
    backgroundColor: "#8B4513",
    
    shadowColor: "#D2B48C",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    
  },
  
});



