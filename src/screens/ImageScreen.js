import React from 'react';
import { Text, StyleSheet, View} from 'react-native'
import ImageDetail from '../components/imageDetail';
import Forest from '../../assets/forest.jpg'
import Beach from '../../assets/beach.jpg'
import Mountain from '../../assets/mountain.jpg'

const ImageScreen = () => {
    return (
        <View>
            <Text>Image View</Text>
            <ImageDetail title="Forest" image={Forest} score="10"/>
            <ImageDetail title="Beach" image={Beach} score="8"/>
            <ImageDetail title="Mountain" image={Mountain} score="5"/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;