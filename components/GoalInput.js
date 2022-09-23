import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native'

export const GoalInput = (props) => {
    const [goalText, setGoalText] = useState('')
    const goalInputHandler = (text) => {
        setGoalText(text);
    }

    const addGoalHandler = () => {
        if (goalText.trim().length > 0) {
            props.onAddGoal(goalText)
        } else {
            alert("Please enter a goal")
        }
        setGoalText('')
        props.hide()
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/target.png')} />
                <TextInput value={goalText} placeholder='Your goal' style={styles.textInput} onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color='#f31282' onPress={props.hide} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#311b6b",
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        width: '100%',
        padding: 12,
        fontSize: 16,
        borderRadius: 10,
        color: '#120438',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 40
    }
})