import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";
import listening from "../../assets/Listening.png";
import { Item } from "react-native-paper/lib/typescript/src/components/List/List";



export function BabyListeningScreen() {
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
     const [isReady, setIsReady] = useState(false);
     const [sound1, setSound1] = useState<Audio.Sound>();

  const sound = {
    correct: require("../../assets/sounds/correctAnswer.mp3"),
    wrong: require("../../assets/sounds/wrongAnswer.mp3"),
  };


    const playSound: any = async (index: number) => {
      try {
        // サウンドを読み込む
        const newSound1 = new Audio.Sound();
        const sound1Asset = await Asset.fromModule(
          questions[currentQuestion].pronounce
        );
        await newSound1.loadAsync(sound1Asset);
        newSound1.playAsync();

        // 準備完了
        setIsReady(true);
      } catch (error) {
        alert(error);
      }
    };

    const playSound2: any = async (index: number) => {
      try {
        // サウンドを読み込む
        const newSound2 = new Audio.Sound();
        const sound2Asset = await Asset.fromModule(sound.correct);
        await newSound2.loadAsync(sound2Asset);
        newSound2.playAsync();

        // 準備完了
        setIsReady(true);
      } catch (error) {
        alert(error);
      }
    };

    const playSound3: any = async (index: number) => {
      try {
        // サウンドを読み込む
        const newSound3 = new Audio.Sound();
        const sound3Asset = await Asset.fromModule(
          sound.wrong
        );
        await newSound3.loadAsync(sound3Asset);
        newSound3.playAsync();

        // 準備完了
        setIsReady(true);
      } catch (error) {
        alert(error);
      }
    };

  

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
      playSound2();
    } else {
      playSound3();
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score + 1 === questions.length) {
        Alert.alert(`全問正解！
        次のステージへ昇格です`);
        setScore(0);
        setCurrentQuestion(0);
        navigation.navigate("Young");
      } else {
        Alert.alert(`満点を取れるまで頑張りましょう！`);
        setScore(0);
        setCurrentQuestion(0);
        navigation.navigate("Baby");
      }
    }
  };



  const questions = [
    {
      pronounce: require("../../assets/sounds/eyelid.mp3"),
      answerOptions: [
        { answerText: "まつげ", isCorrect: false },
        { answerText: "まぶた", isCorrect: true },
        { answerText: "眉毛", isCorrect: false },
      ],
    },
    {
      pronounce: require("../../assets/sounds/haveStuffyNose.mp3"),
      answerOptions: [
        { answerText: "鼻水がでる", isCorrect: false },
        { answerText: "鼻が詰まる", isCorrect: true },
        { answerText: "鼻が痛い", isCorrect: false },
      ],
    },
    {
      questionText: "",
      pronounce: require("../../assets/sounds/headache.mp3"),
      answerOptions: [
        { answerText: "", isCorrect: false },

        { answerText: "", isCorrect: true },
        { answerText: "", isCorrect: false },
      ],
    },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "",
    //   answerOptions: [
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: false },
    //     { answerText: "", isCorrect: true },
    //     { answerText: "", isCorrect: false },
    //   ],
    // },
  ];

  // useEffect(() => {
  //               return 
  //             }, []);








    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>{questions[currentQuestion].questionText}</Text>
          <Text style={styles.title}>
            Listening : {currentQuestion + 1}問目
          </Text>
          <Image
            source={listening}
            style={{
              marginBottom: 10,
              marginLeft: 130,
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
          />
          <Text style={styles.text}>上のボタンを押すと音声が流れます</Text>

          <FAB
            style={styles.addButton}
            icon="play-circle"
            onPress={() => {
              playSound();
            }}
          />

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
          {/* <Text style={styles.score}>
            {"\n"}
            {"\n"}
            Score : {score}
          </Text> */}
          <Text style={styles.score}>
            {"\n"}
            {"\n"}
            Score : {score}
          </Text>
          <Text style={styles.backHome}>
            <Button
              title="コースへ戻る"
              onPress={() => {
                navigation.navigate("Baby");
              }}
            />
          </Text>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFDBC9",
    paddingBottom: 10,
    // padding: 8,
  },
  title: {
    // alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    color: "black",
  },
  text: {
    marginTop: 78,
    textAlign: "center",
    fontSize: 15,
    color: "red",
    paddingBottom: 30,
  },
  addButton: {
    position: "absolute",
    right: 140,
    bottom: 260,
    marginBottom: 220,
  },

  answer: {
    padding: 30,
    marginTop: 15,
    // margin: 30,
    fontSize: 30,
    borderRadius: 20,
    backgroundColor: "white",
    width: 350,
    textAlign: "center",
  },
  // score: {
  //   fontSize: 25,
  //   marginBottom: 18,
  //   color: "white",
  // },
  score: {
    fontSize: 20,
    // marginBottom: 10,
    textAlign: "center",
  },
  backHome: {
    textAlign: "center",
    marginLeft: 120,
    fontSize: 40,
  },
});