import React from 'react';
import { Text, View, Button } from 'react-native';

// call the props.name from TodoList
const Todo = (props) => {
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default Todo;