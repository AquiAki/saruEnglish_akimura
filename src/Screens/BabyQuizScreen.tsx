import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRefContext } from "@react-navigation/stack";

import { Audio } from "expo-av";
import { Asset } from "expo-asset";
import { Item } from "native-base";


export function BabyQuizScreen() {
  const navigation = useNavigation();
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  const sound = {
    correct: require("../../assets/sounds/correctAnswer.mp3"),
    wrong: require("../../assets/sounds/wrongAnswer.mp3"),
  };



  const [isReady, setIsReady] = useState(false);
  const playSound :any =  async (item: number) => {
    try {
      // サウンドを読み込む
      const newSound1 = new Audio.Sound();
      const sound1Asset = await Asset.fromModule(sound.correct);
      await newSound1.loadAsync(sound1Asset);
       newSound1.playAsync();

      // 準備完了
      setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };
  const playSound2: any = async (item: number) => {
    try {
      // サウンドを読み込む
      const newSound2 = new Audio.Sound();
      const sound2Asset = await Asset.fromModule(sound.wrong);
      await newSound2.loadAsync(sound2Asset);
      newSound2.playAsync();

      // 準備完了
      setIsReady(true);
    } catch (error) {
      alert(error);
    }
  };
  
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
      playSound();
    }else{
      playSound2()
    }
  

    
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        if (score + 1 === questions.length) {
          alert(`満点でしたので、次のステージに昇格です！`);
          setScore(0);
          setCurrentQuestion(0);
          navigation.navigate("Young");
        } else {
          alert(`満点を取れるまで頑張りましょう！！`);
          setScore(0);
          setCurrentQuestion(0);
          navigation.navigate("Baby");
        }
      }
    

    const randomQuiz: number[] = []; // randomQuizはランダムにindexの数字を出し、その数字がかぶることもない
    const min = 0;
    const max = questions.length;

    function intRandom(min: number, max: number) {
      return Math.floor(Math.random() * max);
    }

    for (let i = min; i < max; i++) {
      while (true) {
        let tmp = intRandom(min, max); //questions.length 配列の要素数 5
        if (!randomQuiz.includes(tmp)) {
          randomQuiz.push(tmp);
          randomQuiz.splice(tmp);
          break;
        }
      }
    }

  };;

    

  const questions = [
    {
      questionText: "mouth",
      answerOptions: [
        { answerText: "目", isCorrect: false },
        { answerText: "顔", isCorrect: false },
        { answerText: "口", isCorrect: true },
        { answerText: "耳", isCorrect: false },
      ],
    },
    {
      questionText: "eyebrow",
      answerOptions: [
        { answerText: "胸", isCorrect: false },
        { answerText: "お腹", isCorrect: false },
        { answerText: "眉毛", isCorrect: true },
        { answerText: "耳", isCorrect: false },
      ],
    },
    {
      questionText: "knee",
      answerOptions: [
        { answerText: "腕", isCorrect: false },
        { answerText: "肩", isCorrect: false },
        { answerText: "膝", isCorrect: true },
        { answerText: "肘", isCorrect: false },
      ],
    },
    {
      questionText: "elbow",
      answerOptions: [
        { answerText: "背中", isCorrect: false },
        { answerText: "手", isCorrect: false },
        { answerText: "肘", isCorrect: true },
        { answerText: "首", isCorrect: false },
      ],
    },
    {
      questionText: "thigh",
      answerOptions: [
        { answerText: "膝", isCorrect: false },
        { answerText: "ふくらはぎ", isCorrect: false },
        { answerText: "太もも", isCorrect: true },
        { answerText: "かかと", isCorrect: false },
      ],
    },
  ];

  // ランダム関数だけで、重複してしまう(下の重複しないコードを書いても。原因わからず、時間あったらまたやる)

  const randomQuestions = questions[Math.floor(Math.random() * questions.length)];

  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ベイビーコースのクイズ : {currentQuestion + 1}問目
      </Text>
      <Text style={styles.question}>
        {"\n"}
        {/* {questions[currentQuestion].questionText} */}
        {randomQuestions.questionText}
        {"\n"}
      </Text>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(randomQuestions.answerOptions[0].isCorrect);
        }}
      >
        <Text style={styles.answer} >
          {randomQuestions.answerOptions[0].answerText}
          {/* {questions[currentQuestion].answerOptions[0].answerText} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(randomQuestions.answerOptions[1].isCorrect);
        }}
      >
        <Text style={styles.answer} >
          {randomQuestions.answerOptions[1].answerText}
          {/* {questions[currentQuestion].answerOptions[1].answerText} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(randomQuestions.answerOptions[2].isCorrect);
        }}
      >
        <Text style={styles.answer} >
          {randomQuestions.answerOptions[2].answerText}
          {/* {questions[currentQuestion].answerOptions[2].answerText} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(randomQuestions.answerOptions[3].isCorrect);
        }}
      >
        <Text style={styles.answer} >
          {randomQuestions.answerOptions[3].answerText}
          {/* {questions[currentQuestion].answerOptions[3].answerText} */}
        </Text>
      </TouchableOpacity>

      <Text style={styles.score}>
        {"\n"}
        {"\n"}
        Score : {score} / {currentQuestion + 1}
      </Text>

      <Button
        title="コースへ戻る"
        onPress={() => {
          navigation.navigate("Baby");
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB",
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
    padding: 10,
    margin: 25,
    fontSize: 40,
    borderRadius: 20,
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
  },
  score: {
    fontSize: 25,
  },
  botton: {
    fontSize: 50,
  },
});
