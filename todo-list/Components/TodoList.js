import React, { useState}from 'react';
import { View, Text ,Button} from 'react-native';

const TodoList = () => {
    const [title, setTilte] = useState('TodoList');
    return (
        <View>
            <Text>{title}</Text>
            <Button title='Change me' onPress={() => setTilte('My List')}/>
        </View>
    )
}

export default TodoList;