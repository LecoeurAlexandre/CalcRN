import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Btn'

export default function Keypad(props) {

    function numberPress(number) {
        console.log("appuie sur un nombre : " + number)
        if(props.firstNumber != "0") {
            props.setFirstNumber(props.firstNumber + number)
        } else {
            props.setFirstNumber(number)
        }
        props.setStringOperation(props.stringOperation + number)
    }
    
    function operationPress(operator) {
        console.log("appuie sur un operateur" + operator)
        props.setOperation(operator)
        props.setSecondNumber(props.firstNumber)
        props.setFirstNumber("")
        props.setStringOperation(props.stringOperation + operator)
    }
    
    function resultPress() {
        console.log("appuie sur un égal")
        console.log("faire l'opération de " + props.secondNumber + " " + props.operation + " " + props.firstNumber)
        switch (props.operation) {
            case "+":
                const resultAdd = parseFloat(props.secondNumber) + parseFloat(props.firstNumber)
                props.setFirstNumber(resultAdd)
                props.setStringOperation('')
                break;
            case "-":
                const resultSub = parseFloat(props.secondNumber) - parseFloat(props.firstNumber)
                props.setFirstNumber(resultSub)
                props.setStringOperation('')
                break;
            case "/":
                const resultDiv = parseFloat(props.secondNumber) / parseFloat(props.firstNumber)
                props.setFirstNumber(resultDiv)
                props.setStringOperation('')
                break;
            case "X":
                const resultMult = parseFloat(props.secondNumber) * parseFloat(props.firstNumber)
                props.setFirstNumber(resultMult)
                props.setStringOperation('')
                break;
        }
    }

    function clear () {
        console.log("Annule l'opération")
        props.setFirstNumber("0")
        props.setStringOperation('')
    }


    return (
    <View>
        <View style={styles.displayBtn}>
            <Btn onPress={() => operationPress("+")} value={"+"} typeBtn = {"operator"}></Btn>
            <Btn onPress={() => operationPress("-")} value={"-"} typeBtn = {"operator"}></Btn>
            <Btn onPress={() => operationPress("/")} value={"/"} typeBtn = {"operator"}></Btn>
            <Btn onPress={() => operationPress("X")} value={"*"} typeBtn = {"operator"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn onPress={() => numberPress("7")} value={"7"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("8")} value={"8"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("9")} value={"9"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn onPress={() => numberPress("4")} value={"4"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("5")} value={"5"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("6")} value={"6"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn onPress={() => numberPress("1")} value={"1"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("2")} value={"2"} typeBtn = {"number"}></Btn>
            <Btn onPress={() => numberPress("3")} value={"3"} typeBtn = {"number"}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn onPress={() => numberPress("0")} value={"0"} typeBtn = {"number"}></Btn>
            <Btn onPress={resultPress} value={"="}></Btn>
        </View>
        <View style={styles.displayBtn}>
            <Btn onPress={clear} value={"C"}></Btn>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    displayBtn : {
        flexDirection : 'row'
    }
})