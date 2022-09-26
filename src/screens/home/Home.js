import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#b3b3ff'
  },
  searchStyle: {
    height: 40,
    left: '3%',
    width: '87%',
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 15,
    marginStart: 10,
    marginEnd: 15,
}
})
export default Home