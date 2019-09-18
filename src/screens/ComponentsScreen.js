import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

class ComponentsScreen extends React.Component {

    render() {
        const name = 'Agustin'
        return (
            <View>
                <Text style={styles.header}> Getting started with React Native!</Text>
                <Text>My name is {name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'red',
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;