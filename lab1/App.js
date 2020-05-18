import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert 
} from 'react-native';

import MainScreen from './components/MainScreen.js';
import ResultScreen from './components/ResultScreen.js';

export default function App() {
  const [userScore, setUserScore]           = useState(0);
  const [robotScore, setRobotScore]         = useState(0);
  const [isUserTurn, setIsUserTurn]         = useState(true);
  const [firstDice, setFirstDice]           = useState(0);
  const [secondDice, setSecondDice]         = useState(0);
  const [isRolledByUser, setIsRolledByUser] = useState(true);

  const handleUserPress = () => {
    if (isUserTurn) {

      let first  = randomScore();
      let second = randomScore();

      while (first === second) {
        Alert.alert( `Дубль!`);
        first  = randomScore();
        second = randomScore();
      }

      setFirstDice(first);
      setSecondDice(second);
      setIsRolledByUser(true);

      setUserScore(prev => prev + first + second);
      setIsUserTurn(false);

      if (userScore + first + second < 100)
        setTimeout(() =>  handleRobotScore(), 1000)
    }
  }
  const handleRobotScore = () => {
      let first  = randomScore();
      let second = randomScore();
      while (first === second) {
        Alert.alert( `Дубль у противника!`);
        first  = randomScore();
        second = randomScore();
      }
    setFirstDice(first);
    setSecondDice(second);
    setIsRolledByUser(false);
    setRobotScore(prev => prev + first + second);
    setIsUserTurn(true);
  };
  const randomScore = () => Math.round(0.5 + Math.random() * 6);
  
  const restartGame = () => {
    //reset all the scores
    setRobotScore(0);
    setUserScore(0);
    setFirstDice(0);
    setSecondDice(0);
    setIsUserTurn(true);
  }
  return (
    <View style={styles.container}>
      {
        userScore<100 && robotScore<100 && 
          <MainScreen 
            userScore      = {userScore} 
            firstDice      = {firstDice} 
            secondDice     = {secondDice} 
            robotScore     = {robotScore} 
            yourTurn       = {isUserTurn} 
            onUserPress    = {handleUserPress}
            isRolledByUser = {isRolledByUser}
           />
      }
      {
        (userScore >=100 || robotScore >=100) &&
          <ResultScreen 
            restart = {restartGame}
            winner  = {userScore>=100 ? robotScore<100 ? 'user' : 'draw': 'robot'}
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:              1,
    backgroundColor:   '#fff',
    alignItems:        'center',
    justifyContent:    'center',
    paddingHorizontal: 25,
    paddingVertical:   20,
    //paddingHorizontal: 20,
    backgroundColor:   '#fff',
  },
});