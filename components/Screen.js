import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen(props) {
  return (
    <View style={styles.displayScreen}>
      <Text style={styles.displayOperation}>{props.stringOperation}</Text>
      <Text style={styles.displayResult}>{props.firstNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    displayScreen : {
      backgroundColor : "black",
      height : 120,
      justifyContent : "flex-end",
      alignItems : "flex-end",
      marginBottom : 10,
      borderBottomWidth : 6,
      borderBottomColor : "#3B3B3A"
    },
    displayResult : {
      height : 70,
      color : "white",
      fontSize : 50,
      paddingEnd : 10,
    },
    displayOperation : {
      height : 40,
      color : "white",
      fontSize : 20,
      padding : 5
    }
})