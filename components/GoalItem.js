import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = (props) => {
    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple={{ color: "#210644" }} onPress={props.onDelete.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={{ color: "#fff", padding: 8, fontSize: 16 }}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: "#5e08cc",
        color: '#fff',
        padding: 6
    },
    pressedItem: {
        opacity: 0.5
    }
})