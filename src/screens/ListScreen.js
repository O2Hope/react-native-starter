import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { key: '1', name: 'Friend #1', age: 20 },
        { key: '2', name: 'Friend #2', age: 21 },
        { key: '3', name: 'Friend #3', age: 22 },
        { key: '4', name: 'Friend #4', age: 23 },
        { key: '5', name: 'Friend #5', age: 24 },
        { key: '6', name: 'Friend #6', age: 25 },
        { key: '7', name: 'Friend #7', age: 26 },
        { key: '8', name: 'Friend #8', age: 27 },
        { key: '9', name: 'Friend #9', age: 28 },
        { key: '10', name: 'Friend #10', age: 29 },
        { key: '11', name: 'Friend #11', age: 30 },
        { key: '12', name: 'Friend #12', age: 31 },
    ]
    return (
        <View>
            <Text>List screen</Text>
            <FlatList 
                data={friends} 
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                 }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;