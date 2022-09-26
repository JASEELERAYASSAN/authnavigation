import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffb3ff'
  }
})
export default Categories