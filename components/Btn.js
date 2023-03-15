import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Btn(props) {
  return (
    <View style= {props.typeBtn == "operator" ? [styles.btn, styles.operator] : props.typeBtn == "number" ? [styles.btn, styles.number] : [styles.btn, styles.initFunction]}>
      <Text style={styles.btnContent}>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    btn : {
        borderWidth: 3,
        borderColor : "grey",
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
        height : 80
    },
    operator : {
        backgroundColor : "#9DA4B0"
    },
    number : {
        backgroundColor : "aliceblue"
    },
    initFunction : {
        backgroundColor : "#51668A"
    },
    btnContent : {
        fontSize : 20,
        fontWeight : "bold"
    }
})