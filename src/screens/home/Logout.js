import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Logout = () => {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6699cc'
  }
})
export default Logout