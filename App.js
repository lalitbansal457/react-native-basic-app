import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList
} from "react-native";


import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {
    
    const [courseGoals, setCourseGoal] = useState([]);    
    const [isAddGoal, setGoalModal] = useState([]);    

    const addGoalHandler = (goalText) => {
        console.log(goalText)
        setCourseGoal(courseGoals => [...courseGoals, {id:Math.random().toString(), value:goalText}]);
         setGoalModal(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoal(courseGoals => courseGoals.filter((goal) => goal.id != goalId ));

    }

    return (
        <View>
            <View style={styles.screen}>
                <Button title="Add Goals" onPress={() => setGoalModal(true)} />
                <GoalInput visibleModal={isAddGoal} onAddGoal={addGoalHandler} />
                <FlatList data={courseGoals}  renderItem={itemData => (
                    <GoalItem  onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value} />
                    )}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
    
});
