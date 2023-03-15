import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Btn'

export default function Keypad(props) {
    function prepareOperation(value) {
        console.log(value)
        props.setOperation(props.operation += value)
        //operation += value
        console.log(props.operation)
    }
    return (
    <View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"+"} typeBtn = {"operator"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"-"} typeBtn = {"operator"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"/"} typeBtn = {"operator"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"*"} typeBtn = {"operator"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"7"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"8"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"9"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"4"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"5"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"6"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"1"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"2"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"3"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"0"} typeBtn = {"number"}></Btn>
            <Btn prepareOperation={prepareOperation} value={"Enter"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn prepareOperation={prepareOperation} value={"C"}></Btn>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    displayBtn : {
        flexDirection : 'row'
    }
})