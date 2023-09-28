import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

const Fallback = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start Adding Your Task </Text>
            <Image
                source={require("../../assets/photo.jpg")}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'blue',
    }
});

export default Fallback;
