import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const Home = () => {

  const [counter, setCounter] = useState(0);

  const incrementCountHandler = () => {
    setCounter((prev) => prev + 1)
  }

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
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})