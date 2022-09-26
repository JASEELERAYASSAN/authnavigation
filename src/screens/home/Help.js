import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View style={styles.container}>
      <Text>Help</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff99ff'
  }
})
export default Help