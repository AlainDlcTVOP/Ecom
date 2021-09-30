import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Button,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var { width } = Dimensions.get('window');

const ListItem = (props) => {

    return (
        <View>
            <TouchableOpacity
                // onPress
            >
                <Image
                    source={{
                        uri: props.image
                            ? props.image
                            : 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kawasaki_Ninja_250_2018.jpg'
                    }}
                    resizeMode="contain"
                />
                <Text>{props.brand}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">{props.category.name}</Text>
                <Text>$ {props.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListItem;