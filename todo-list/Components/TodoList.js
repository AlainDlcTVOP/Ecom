import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTilte] = useState("TodoList");
  const [text, setText] = useState();
  const [list, setList] = useState(["Hello World"]); // list array []
  // Todo set constans prop

  // ADD ITEM METHOD
  const addItem = () => {
    const updatedList = list; // reference to list
    updatedList.push(text); // update the list with text it will be changed
    setList(updatedList); // set the List
    setText(""); //so the text input will be empty
  };

  // DELETE ITEM METHOD
  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };
  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo key={index} item={x} index={index} delete={deleteItem} />
        ))}
      </ScrollView>
      <View></View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button title="Add item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
