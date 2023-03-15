import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Btn'

export default function Keypad() {
  return (
    <View>
        <View style={styles.displayBtn}>
            <Btn value={"+"} typeBtn = {"operator"}></Btn>
            <Btn value={"-"} typeBtn = {"operator"}></Btn>
            <Btn value={"/"} typeBtn = {"operator"}></Btn>
            <Btn value={"*"} typeBtn = {"operator"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn value={"7"} typeBtn = {"number"}></Btn>
            <Btn value={"8"} typeBtn = {"number"}></Btn>
            <Btn value={"9"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn value={"4"} typeBtn = {"number"}></Btn>
            <Btn value={"5"} typeBtn = {"number"}></Btn>
            <Btn value={"6"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn value={"1"} typeBtn = {"number"}></Btn>
            <Btn value={"2"} typeBtn = {"number"}></Btn>
            <Btn value={"3"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn value={"0"} typeBtn = {"number"}></Btn>
            <Btn value={"Enter"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn value={"C"}></Btn>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    displayBtn : {
        flexDirection : 'row'
    }
})