import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import saruBack from "../../assets/saruBack.png";

export function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const toLevel = () => {
    navigation.navigate("Level");
  };
  const toSignIn = () => {
    navigation.navigate("SignIn");
  };


  //Submitが押されたときにSign Up(登録処理)する関数
  const pressedSubmit = (email: string, password: string) => {
    //ここでFirebaseでの登録
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //登録成功したらログイン画面に戻る
        Alert.alert("登録成功！", "次はレベルチェックテストです");
        toLevel();
      })
      .catch((error) => {
        //エラーが返ってきたらその内容をアラートで表示
        console.log(error);
        Alert.alert("エラー", `${error}`);
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.note}>
        登録ボタンを押すと、レベルチェックに移ります
        {"\n"}
        どれだけわかるか試してみましょう！
      </Text>

      <View style={styles.titleAndFieldView}>
        <TextInput
          style={styles.inputField}
          placeholder="                       メールアドレスを入力"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          style={styles.inputField}
          placeholder="                       パスワードを入力"
          keyboardType="visible-password"
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />

        <ExpoStatusBar style="auto" />

        <View style={styles.includeButton1}>
          <Button
            title="登録"
            color="white"
            onPress={() => {
              pressedSubmit(email, password);
            }}
          />
        </View>
      </View>
      <View style={styles.backPic}>
        <Image
          source={saruBack}
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.includeButton2}>
        <Button
          title="戻る"
          color="black"
          onPress={() => {
            toSignIn();
          }}
        />
      </View>
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
  },
  note: {
    marginTop: 100,
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  backPic: {
    marginTop: 30,
  },
  titleAndFieldView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    color: "#FF367F",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 20,
  },

  inputField: {
    width: "80%",
    marginBottom: 20,
    height: 35,
    backgroundColor: "white",
  },

  includeButton1: {
    width:80,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#8B4513",

    shadowColor: "#D2B48C",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  includeButton2: {
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
  },
});
