 import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet } from 'react-native';

export default function MainScreen({userScore, robotScore, yourTurn, firstDice, secondDice, isRolledByUser, onUserPress}) {
  return (
    <View style = {styles.block}>
      <View style = {styles.topBlock}>
        <Text style = {styles.rulesTitle}>Игра кубики</Text>
        <Text style = {styles.rules}>Правила игры: игроки бросают 2 кубика, сумма записывается в общий счет игрока. Если выпадает дубль, игрок ходит снова. Выигрывает игрок, первый набравший 100 баллов.</Text>
      </View>
      <View style = {styles.gameField}>    
          <Text style = {styles.scoreTitle}>Общий счет</Text>    
          <Text style = {styles.playerScore}>Игрок: {userScore}</Text>      
          <Text style = {styles.enemyScore}>Противник: {robotScore}</Text>       
      </View>
      <View style = {styles.dices}>
        <Text style = {styles.scoreTitle}>Счет хода (Ход {isRolledByUser ? 'Игрока' : 'Противнника'})</Text> 
        <Text style = {styles.dice}>К1: {firstDice}</Text>
        <Text style = {styles.dice}>К2: {secondDice}</Text>
      </View>
      <Button 
        title = "Сделать ход" 
        disabled={!yourTurn} 
        onPress={onUserPress} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  whoGo: {
    fontSize: 20,
  },
  scoreTitle: {
    fontSize:   21,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  topBlock: {
    paddingTop:        20,
    paddingBottom:     20,
    borderBottomWidth: 1,
    borderColor:       'lightgrey',
    borderStyle:       'solid',
  },
  rulesTitle: {
    alignItems:        'center',
    fontSize:          21,
    fontWeight:        'bold',
    paddingBottom:     10,
    borderBottomWidth: 1,
    borderColor:       'lightgrey',
    borderStyle:       'solid',
  },
  rules: {
    fontSize:   18,
    paddingTop: 10,
  },
  gameField: {
    flex:              1,
    borderBottomWidth: 1,
    borderColor:       'lightgrey',
    borderStyle:       'solid',
  },
  playerScore: {
    fontSize: 33,
    color:    'blue',
  },
  enemyScore: {
    color:    'red',
    fontSize: 33, 
  },
  dices: {
    flex: 1,
  },
  dice: {
    fontSize: 30,
  }
})