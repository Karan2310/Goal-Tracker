import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setgoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (goalText) => {
    setgoals(currentGoals => [...currentGoals, { text: goalText, id: Math.random().toString() }]);
  }

  const deleteGoalHandler = (id) => {
    setgoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} hide={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDelete={deleteGoalHandler} />
            )
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            showsVerticalScrollIndicator={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 6,
  },
});
