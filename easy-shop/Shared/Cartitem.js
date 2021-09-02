import React from 'react';
import { StyleSheet } from 'react-native';
import { Badge, Text } from 'native-base';

import { connect } from 'react-redux';

const CardItem = (props) => {
    return (
        <>
        
        {props.cartItems.length ? (
            <Badge style={StyleSheet.badge} >
                <Text style={StyleSheet.text}>{props.cartItems.length}</Text>
            </Badge>
        ) : null}
    </>
    )
   
};

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems:cartItems
    }
}

const style = StyleSheet.create({
    bade: {
        width: 25,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        top: -1,
        right: -50
    },
    text: {
        fontSize: 12,
        width: 100,
        fontWeight: 'bold'
    }
    
})

export default connect(mapStateToProps)(CardItem);