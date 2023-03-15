import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './Screen.js'
import Keypad from './Keypad.js'

export default function Frame() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <View style={styles.border}>
        <Screen></Screen>
        <Keypad></Keypad>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "grey",
        paddingHorizontal : 30,
    },
    title : {
        textAlign : "center",
        fontSize : 40,
        color : "lightgrey",
        fontFamily : "cursive",
        marginBottom : 15
    },
    border : {
        borderColor : "darkgrey",
        borderWidth : 5
    }
})