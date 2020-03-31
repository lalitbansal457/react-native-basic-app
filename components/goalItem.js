import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'


const GoalItem = props => {
	return (
		<TouchableOpacity onPress={props.onDelete}>
			<View style={styles.listItem}> 
				<Text> {props.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
	    padding: 10,
	    backgroundColor: "#ccc",
	    marginVertical: 5,
	    borderWidth: 1,
	    borderColor: "#bbb"
	}
})

export default GoalItem ;

