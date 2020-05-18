import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet, 
  Image 
} from 'react-native';

export default function ResultScreen({winner, restart}) {
  const playerWin = () => (
    <View>
      <Image 
        style={styles.finishImg} 
        source={require('../assets/pl.jpg')} />
      <Text 
        style={styles.resultMessage}>
          Вы выиграли!
      </Text>
    </View>
  )

  const enemyWin = () => (
    <View>
      <Image 
        style={styles.resultImg} 
        source={require('../assets/en.png')} />
      <Text 
        style={styles.resultMessage}>
          Вы проиграли!
      </Text>
    </View>
  )

  const bothWin = () => (
    <View>
      <Image 
        style={styles.resultImg} 
        source={require('../assets/hands.jpg')} />
      <Text style={styles.resultMessage}>
          Ничья!!!
      </Text>
    </View>
  )
  return (
    <View style={styles.ResultScreen}>
      { winner === 'user' && playerWin() }
      { winner === 'robot' && enemyWin() }
      { winner === 'draw' && bothWin() }
      <Button style={styles.btn} title='Обратно' onPress={restart} />
    </View>
  )
}



const styles = StyleSheet.create({
  ResultScreen: {
    flex:       1,
    paddingTop: 50,
  },
  resultImg: {
    width:  200,
    height: 200
  },
  resultMessage: {
    fontSize:   48,
    paddingTop: 15,
  },
})