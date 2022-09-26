import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#80ccff'
  }
})
export default Orders