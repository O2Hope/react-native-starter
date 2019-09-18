import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const handleOnPress = (e) =>{
  console.log(e);
}

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View>
        <Text style={styles.text}>Hello!</Text>
        <Button title="Go to components demo" onPress={() => navigate("Components")} />
        <Button title="Go to List demo" onPress={() => navigate("List")}/>
        <Button title=" Go to Image screen" onPress={() => navigate('Image')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

