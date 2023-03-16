import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from './Screen.js'
import Keypad from './Keypad.js'

export default function Frame() {
  const [firstNumber,setFirstNumber] = useState('0');
  const [secondNumber,setSecondNumber] = useState('0');
  const [operation,setOperation] = useState('0');
  const [stringOperation,setStringOperation] = useState('');
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <View style={styles.border}>
        <Screen firstNumber={firstNumber} stringOperation={stringOperation}></Screen>
        <Keypad setOperation={setOperation} operation={operation} setFirstNumber={setFirstNumber} firstNumber={firstNumber} secondNumber={secondNumber} setSecondNumber={setSecondNumber} setStringOperation={setStringOperation} stringOperation={stringOperation}></Keypad>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "grey",
        paddingHorizontal : 10,
    },
    title : {
        textAlign : "center",
        fontSize : 40,
        color : "lightgrey",
        fontFamily : "cursive",
        marginVertical : 15
    },
    border : {
        borderColor : "darkgrey",
        borderWidth : 15
    }
})