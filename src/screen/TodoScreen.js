import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const listTodos = [{ id: 1, name: "brahim" }, { id: 2, name: "Fati" }, { id: 3, name: "mm" }]
const TodoScreen = () => {

    const renderTodos = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: "blue", borderRadius: 6,paddingHorizontal:6,paddingVertical:12 }}>
                <Text style={{ color: "white" }}>{item.name}</Text>
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
                placeholder='Add A Task' />
            <TouchableOpacity style={{ backgroundColor: "black", borderRadius: 6, paddingVertical: 10, marginTop: 24 }}>
                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20 }}>Add</Text>
            </TouchableOpacity>
            {/* Render todo listt */}
            <FlatList data={listTodos} renderItem={renderTodos} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default TodoScreen;
