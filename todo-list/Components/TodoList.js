import React, {useState}from 'react';
import { View, Text, Button } from 'react-native';
import Todo from './Todo';

const TodoList = () => {
    const [title, setTilte] = useState('TodoList');
    // Todo set constans prop
    return (
        <View>
            <Text>{title}</Text>
                <Todo name={'First Todo'}/>  
            <Todo name={'Second Todo'} />
            
            <Button title='Change me' onPress={() => setTilte('My List')} />
           
        </View>
    )
}

export default TodoList;