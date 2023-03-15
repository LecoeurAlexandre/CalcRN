import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen(props) {
  return (
    <View style={styles.displayScreen}>
      <Text style={styles.displayResult}>{props.operation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    displayScreen : {
        backgroundColor : "black",
        height : 100,
        justifyContent : "flex-end",
        alignItems : "flex-end",
    },
    displayResult : {
        color : "white",
        fontSize : 50,
        paddingEnd : 10
    }
})