import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button,Image,Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import firstPic from "../../assets/saruGood.png";
import secondPic from "../../assets/notyet.png";
import thirdPic from "../../assets/peaceSaru.png";
import forthPic from "../../assets/lastRun.png";
import fifthPic from "../../assets/bow.png";


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
    return await firebase.firestore().collection("users");
  };

  const setUserInfos = async (level: string) => {
    const uid = firebase.auth().currentUser?.uid; //現在のユーザーのuid
    if (!uid) {
      alert("サインインしていません");
      return;
    }

    const docRef = await getMessageDocRef(); //何か文字が入力されていれば、データベースからメッセージを全て読み込む
    const newUserInfos = { //入力されていた文字と、現在サインインしているユーザーの情報からMessage型のnewMessageをつくる。
      userLevel: level,
      userId: uid, //cloudのuserのuidをuserIdに変更してる
    } as userInfos;
    await docRef.doc(uid).set(newUserInfos); // 新しいnewUserInfosをDBに保存
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
      Alert.alert(`レベルチェックは終わりです。
    お疲れ様でした`);
      const level = judgeLevel(score);
      setUserInfos(level);
      // setLevel(level);
      checkLevel();
    }
  };

  const checkLevel = () => {
    if (score <= 15 ) {
      setLevel("Baby");
      navigation.navigate("Baby");
    } else if (score <= 17) {
      setLevel("Young");
      navigation.navigate("Young");
    }else if (score <= 19) {
      setLevel("Trainee");
      navigation.navigate("Trainee");
    } else {
      setLevel("Star");
      navigation.navigate("Star");
    }
  };


  const judgeLevel = (score: number) => {
    if (score <= 15) {
      return "Baby";
    } else if (score <= 17) {
      return "Young";
    } else if (score <= 19) {
      return "Trainee";
    } else {
      return "Star";
    }
  };


  const questions = [
    {
      imagePic: firstPic,
      message: "がんばるぞー！",
      questionText: "forehead",
      answerOptions: [
        { answerText: "頭頂部", isCorrect: false },
        { answerText: "くるぶし", isCorrect: false },
        { answerText: "のどぼとけ", isCorrect: false },
        { answerText: "おでこ", isCorrect: true },
      ],
    },
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
      questionText: "olecranon",
      answerOptions: [
        { answerText: "橈骨", isCorrect: false },
        { answerText: "肘頭", isCorrect: true },
        { answerText: "尺骨", isCorrect: false },
        { answerText: "上腕骨", isCorrect: false },
      ],
    },
    {
      imagePic: secondPic,
      message: "まだまだー",
      questionText: "obesity",
      answerOptions: [
        { answerText: "のぼせ、ほてり", isCorrect: false },
        { answerText: "汗がでる", isCorrect: false },
        { answerText: "冷え", isCorrect: false },
        { answerText: "肥満", isCorrect: true },
      ],
    },
    {
      questionText: "腸骨",
      answerOptions: [
        { answerText: "sacrum", isCorrect: false },
        { answerText: "pelvis", isCorrect: false },
        { answerText: "pubis", isCorrect: false },
        { answerText: "ilium", isCorrect: true },
      ],
    },
    {
      questionText: "膵臓",
      answerOptions: [
        { answerText: "pancreas", isCorrect: true },
        { answerText: "spleen", isCorrect: false },
        { answerText: "pharynx", isCorrect: false },
        { answerText: "appendix", isCorrect: false },
      ],
    },
    {
      questionText: "末梢神経",
      answerOptions: [
        { answerText: "parasympathetic nerve", isCorrect: false },
        { answerText: "sympathetic nerve", isCorrect: false },
        { answerText: "autonomic nerve", isCorrect: false },
        { answerText: "peripheral nerve", isCorrect: true },
      ],
    },
    {
      questionText: "視床",
      answerOptions: [
        { answerText: "cerebellum", isCorrect: false },
        { answerText: "thalamus", isCorrect: true },
        { answerText: "hypothalamus", isCorrect: false },
        { answerText: "cerebrum", isCorrect: false },
      ],
    },
    {
      imagePic: thirdPic,
      message: "折返しまできたよー！",
      questionText: "角膜",
      answerOptions: [
        { answerText: "pupil", isCorrect: false },
        { answerText: "retina", isCorrect: false },
        { answerText: "cornea", isCorrect: true },
        { answerText: "iris", isCorrect: false },
      ],
    },
    {
      questionText: "have palpitations",
      answerOptions: [
        { answerText: "のぼせる", isCorrect: false },
        { answerText: "動悸がする", isCorrect: true },
        { answerText: "痰が出る", isCorrect: false },
        { answerText: "息苦しい", isCorrect: false },
      ],
    },

    {
      questionText: "be swollen",
      answerOptions: [
        { answerText: "むくんでいる", isCorrect: true },
        { answerText: "出血している", isCorrect: false },
        { answerText: "ただれている", isCorrect: false },
        { answerText: "痛みがある", isCorrect: false },
      ],
    },
    {
      questionText: "delirium",
      answerOptions: [
        { answerText: "気力がない", isCorrect: false },
        { answerText: "焦燥感", isCorrect: false },
        { answerText: "せん妄", isCorrect: true },
        { answerText: "抑うつ", isCorrect: false },
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
      imagePic: forthPic,
      message: "あとちょっとだ、ラストスパート！",
      questionText: "肺炎",
      answerOptions: [
        { answerText: "bronchitis", isCorrect: false },
        { answerText: "pneumothorax", isCorrect: false },
        { answerText: "tonsillitis", isCorrect: false },
        { answerText: "pneumonia", isCorrect: true },
      ],
    },
    {
      questionText: "貧血",
      answerOptions: [
        { answerText: "diabetes", isCorrect: false },
        { answerText: "anemia", isCorrect: true },
        { answerText: "polyp", isCorrect: false },
        { answerText: "gout", isCorrect: false },
      ],
    },
    {
      questionText: "不整脈",
      answerOptions: [
        { answerText: "hypotension", isCorrect: false },
        { answerText: "cardiomyopathy", isCorrect: false },
        { answerText: "aneurysm", isCorrect: false },
        { answerText: "arrhythmia", isCorrect: true },
      ],
    },
    {
      questionText: "抗血栓薬",
      answerOptions: [
        { answerText: "hemostatic drug", isCorrect: false },
        { answerText: "antithrombotic drug", isCorrect: true },
        { answerText: "vasodilator", isCorrect: false },
        { answerText: "antianemic drug", isCorrect: false },
      ],
    },
    {
      questionText: "肝炎",
      answerOptions: [
        { answerText: "gastritis", isCorrect: false },
        { answerText: "hepatitis", isCorrect: true },
        { answerText: "cirrhosis", isCorrect: false },
        { answerText: "colitis", isCorrect: false },
      ],
    },

    {
      imagePic: fifthPic,
      message: "最後の問題です！",
      questionText: "緑内障",
      answerOptions: [
        { answerText: "cataract", isCorrect: false },
        { answerText: "conjunctivitis", isCorrect: false },
        { answerText: "glaucoma", isCorrect: true },
        { answerText: "keratitis", isCorrect: false },
      ],
    },
  ];

  


  // {questions[currentQuestion].answerOptions.map((answerOption) => <Text>( {answerOption.answerText}</Text>))}

  return (
    <View style={styles.container}>
      <Text style={styles.mess}>{questions[currentQuestion].message}</Text>
      <Text style={styles.title}>
        <Image
          source={questions[currentQuestion].imagePic}
          style={{
            width: 80,
            height: 80,
            flexWrap: "wrap",
            resizeMode: "contain",
          }}
        />

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

      <Text style={styles.title}>
        {"\n"}
        {currentQuestion + 1}問目
      </Text>

      <Text>
        Score : {score}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  mess:{
    fontSize:15,
    marginBottom:10,
    flexWrap:"wrap",
  },
  question: {
    fontSize: 45,
    color: "black",
  },
  answer: {
    padding: 1,
    margin: 30,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 6,
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
