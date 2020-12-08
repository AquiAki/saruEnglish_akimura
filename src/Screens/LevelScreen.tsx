import { StatusBar } from "expo-status-bar";
import React, { useState, } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Button, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function LevelScreen() {
  const navigation = useNavigation();
  const toHome = () => {                  // ここがtoHomeではなく、レベルチェックのスコアで各コースへ推移する感じにする
    navigation.navigate("Home");
  };  

  // const [questionText,setQuestionText] = usestate()

  // const [loading,setLoading] = useState(false);
  // const [questions,setQuestions] = useState([]);
  // const [userAnsewers,setUserAnswers] = useState([]);
  // const [score, setScore] = useState(0);
  // const [gameOver, setGameOver] = useState(true);
  // const [TOTAL_QUESTIONS] = useRef(null);


const [currentQuestion, setcurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);


const handleAnswerButtonClick = (isCorrect:boolean) => {

  if(isCorrect === true){
    // alert("this answer is correct")
    setScore(score+1);
  }

  const nextQuestion = currentQuestion + 1 ;
  if(nextQuestion < questions.length){
    setcurrentQuestion(nextQuestion);
  }else{
    // setShowScore(true)
    alert(`レベルチェックは終わりです。
    お疲れ様でした`)
  }
  
  
}


const questions = 
  
  [
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
      { answerText: "気分が落ち込む", isCorrect: true },
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
];


// {questions[currentQuestion].answerOptions.map((answerOption) => <Text>( {answerOption.answerText}</Text>))}


  return (
    <View style={styles.container}>
      <Text>レベルチェック : {currentQuestion + 1}問目</Text>

      <Text>{questions[currentQuestion].questionText}</Text>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[0].isCorrect
          );
        }}
      >
        <Text>{questions[currentQuestion].answerOptions[0].answerText}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[1].isCorrect
          );
        }}
      >
        <Text>{questions[currentQuestion].answerOptions[1].answerText}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[2].isCorrect
          );
        }}
      >
        <Text>{questions[currentQuestion].answerOptions[2].answerText}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleAnswerButtonClick(
            questions[currentQuestion].answerOptions[3].isCorrect
          );
        }}
      >
        <Text>{questions[currentQuestion].answerOptions[3].answerText}</Text>
      </TouchableOpacity>

      <Text>Score : {score}</Text>

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
});
