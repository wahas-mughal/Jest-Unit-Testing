import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import User from './services/api'

const Home = () => {

  const [counter, setCounter] = useState(0);

  const incrementCountHandler = () => {
    setCounter((prev) => prev + 1)
  }
 
  // useEffect(() => {
  //   User.getMovies().then((res) => console.log('Movies', res))
  // })

  return (
    <View style={styles.container}>
      <Text testID='counter-text'>{counter}</Text>
      <Button title='Increment' onPress={incrementCountHandler} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})