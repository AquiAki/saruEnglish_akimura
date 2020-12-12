import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export function LevelScreen() {
  const navigation = useNavigation();

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  //DB関連
  const [userInfo, setUserInfo] = useState<userInfos[]>([]);
  const [level, setLevel] = useState<string>("");

  //Cloud Firestoreのusersというコレクションの中のドキュメントを参照する
  const getMessageDocRef = async () => {
    return await firebase.firestore().collection("users").doc();
  };

  const setUserInfos = async (level: string) => {
    const uid = firebase.auth().currentUser?.uid;
    if (!uid) {
      alert("サインインしていません");
      return;
    }

    const docRef = await getMessageDocRef();
    const newUserInfos = {
      userLevel: level,
      userId: uid, //cloudのuserのuidをuserIdに変更してる
    } as userInfos;
    await docRef.set(newUserInfos); // 新しいuserInfosをDBに入れる
  };

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      // alert("this answer is correct")
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      // setShowScore(true)
      alert(`レベルチェックは終わりです。
    お疲れ様でした`);
      const level = judgeLevel(score);
      setUserInfos(level);
      // setLevel(level);
      checkLevel();
    }
  };

  const checkLevel = () => {
    if (score <= 2 ) {
      setLevel("Baby");
      navigation.navigate("Baby");
    } else if (score <= 4) {
      setLevel("Young");
      navigation.navigate("Young");
    } else if (score <= 6) {
      setLevel("Trainee");
      navigation.navigate("Trainee");
    }else if (score <= 8) {
      setLevel("Star");
      navigation.navigate("Star");
    } else {
      setLevel("Maestro");
      navigation.navigate("Maestro");
    }
  };


  const judgeLevel = (score: number) => {
    if (score <= 2) {
      return "Baby";
    } else if (score <= 4) {
      return "Young";
    } else if (score <= 6) {
      return "Trainee";
    } else if (score <= 8) {
      return "Star";
    } else {
      return "Maestro";
    }
  };


  const questions = [
    {
      questionText: "temple",
      answerOptions: [
        { answerText: "のどぼとけ", isCorrect: false },
        { answerText: "鼠径部", isCorrect: false },
        { answerText: "こめかみ", isCorrect: true },
        { answerText: "うなじ", isCorrect: false },
      ],
    },
    {
      questionText: "bruise",
      answerOptions: [
        { answerText: "打撲、打ち身", isCorrect: true },
        { answerText: "すり傷", isCorrect: false },
        { answerText: "切り傷", isCorrect: false },
        { answerText: "捻挫", isCorrect: false },
      ],
    },
    {
      questionText: "faint / pass out",
      answerOptions: [
        { answerText: "気分が落ち込む", isCorrect: false },
        { answerText: "失神する", isCorrect: true },
        { answerText: "興奮する", isCorrect: false },
        { answerText: "いらいらする", isCorrect: false },
      ],
    },
    {
      questionText: "obesity",
      answerOptions: [
        { answerText: "のぼせ、ほてり", isCorrect: false },
        { answerText: "汗がでる", isCorrect: false },
        { answerText: "冷え", isCorrect: false },
        { answerText: "肥満", isCorrect: true },
      ],
    },
    {
      questionText: "ilium",
      answerOptions: [
        { answerText: "仙骨", isCorrect: false },
        { answerText: "骨盤", isCorrect: false },
        { answerText: "恥骨", isCorrect: false },
        { answerText: "腸骨", isCorrect: true },
      ],
    },
    {
      questionText: "gallbladder",
      answerOptions: [
        { answerText: "胆のう", isCorrect: true },
        { answerText: "胃", isCorrect: false },
        { answerText: "小腸", isCorrect: false },
        { answerText: "盲腸", isCorrect: false },
      ],
    },
    {
      questionText: "peripheral nerve",
      answerOptions: [
        { answerText: "自律神経", isCorrect: false },
        { answerText: "副交感神経", isCorrect: false },
        { answerText: "交感神経", isCorrect: false },
        { answerText: "末梢神経", isCorrect: true },
      ],
    },
    {
      questionText: "thalamus",
      answerOptions: [
        { answerText: "大脳", isCorrect: false },
        { answerText: "視床", isCorrect: true },
        { answerText: "中脳", isCorrect: false },
        { answerText: "延髄", isCorrect: false },
      ],
    },
    {
      questionText: "pupil",
      answerOptions: [
        { answerText: "血管", isCorrect: false },
        { answerText: "鼓膜", isCorrect: false },
        { answerText: "瞳孔", isCorrect: true },
        { answerText: "水晶体", isCorrect: false },
      ],
    },
    {
      questionText: "thyroid",
      answerOptions: [
        { answerText: "膵臓", isCorrect: false },
        { answerText: "胸腺", isCorrect: false },
        { answerText: "甲状腺", isCorrect: true },
        { answerText: "副腎", isCorrect: false },
      ],
    },
  ];

  


  // {questions[currentQuestion].answerOptions.map((answerOption) => <Text>( {answerOption.answerText}</Text>))}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        レベルチェック : {currentQuestion + 1}問目
        {"\n"}
        {"\n"}
      </Text>

      <Text style={styles.question}>
        {questions[currentQuestion].questionText}
        {"\n"}
      </Text>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[0].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[0].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[1].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[1].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[2].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[2].answerText}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[3].isCorrect
          );
        }}
      >
        <Text style={styles.answer}>
          {questions[currentQuestion].answerOptions[3].answerText}
        </Text>
      </TouchableOpacity>

      <Text>
        {"\n"}
        {"\n"}
        {"\n"}
        Score : {score} / {currentQuestion + 1}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 45,
    color: "black",
  },
  answer: {
    padding: 1,
    margin: 30,
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "white",
    width: 200,
    textAlign: "center",
  },
  score: {
    fontSize: 25,
  },
  botton: {
    fontSize: 50,
  },
});
