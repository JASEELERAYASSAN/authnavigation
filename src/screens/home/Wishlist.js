import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff9999'
  }
})
export default Wishlist