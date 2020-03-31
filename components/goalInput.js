import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native'


const GoalInput = props => {

	const [enterdGoal, setEnterdGoal] = useState("");

	const goalInputHandler = enterdText => {
	    setEnterdGoal(enterdText);
	};

	const onAddGoalHandler = () => {
		props.onAddGoal(enterdGoal);
		setEnterdGoal('');
	}

	return (
		<Modal visible={props.visibleModal} animationType="slide">
			<View style={styles.inputContainer}>
	            <TextInput
	                placeholder="Input "
	                onChangeText={goalInputHandler}
	                style={styles.input}
	                value={enterdGoal}
	            />
	            <Button title="Add" onPress={onAddGoalHandler} />
	        </View>
        </Modal>
	)
}


const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
	    alignItems: "center",
	    justifyContent: "center"
	},
	input: {
	    borderWidth: 1,
	    borderColor: "#eee",
	    padding: 10,
	    width: "80%",
	    marginBottom: 10
	}
})


export default GoalInput ;

