import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Btn({value, onPress, typeBtn}) {
    return (
    <Pressable onPress={onPress} style= {typeBtn == "operator" ? [styles.btn, styles.operator] : typeBtn == "number" ? [styles.btn, styles.number] : [styles.btn, styles.initFunction]}>
        <Text style={styles.btnContent}>{value}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn : {
        borderWidth: 7,
        borderColor : "grey",
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
        height : 80,
        borderBottomWidth : 6,
        borderBottomColor : "#3B3B3A",
        
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
        fontSize : 25,
        fontWeight : "bold"
    }
})