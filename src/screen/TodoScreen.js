import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { IconButton } from 'react-native-paper';
const listTodos = [{ id: 1, name: "brahim" }, { id: 2, name: "Fati" }, { id: 3, name: "mm" }]
const TodoScreen = () => {
    const [todo, setTodo] = useState("")
    // Add Todo in Todos
    // Add initial Todo 
    const [todoList, setTodoList] = useState([])
    const handleAddTodo = () => {
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo("")

    }
    const handleDeleteTodo = (id) => {
        const updatedTodo = todoList.filter(todo => todo.id !== id)
        setTodoList(updatedTodo)
    }

    const renderTodos = ({ item, index }) => {
        return (

            <View style={{
                backgroundColor: "orange",
                borderRadius: 6,
                paddingHorizontal: 6,
                paddingVertical: 12,
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, flex: 1 }}>{item.title}</Text>
                <IconButton icon="pencil" iconColor='blue' />
                <IconButton icon="trash-can" iconColor='red' onPress={() => handleDeleteTodo(item.id)} />
            </View>
        )
    }
    return (
        <View style={{ marginHorizontal: 16, marginTop: 55 }}>
            <TextInput style={{
                borderWidth: 2,
                borderColor: "blue",
                borderRadius: 6,
                paddingHorizontal: 16,
                paddingVertical: 12
            }}
                placeholder='Add A Task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)} />
            <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 10, marginVertical: 24 }}
                onPress={() => handleAddTodo()}>
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20 }}>Add</Text>
            </TouchableOpacity>
            {/* Render todo listt */}
            <FlatList data={todoList} renderItem={renderTodos} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default TodoScreen;
