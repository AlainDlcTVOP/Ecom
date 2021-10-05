import React from 'react';
import {  Dimensions, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var { width } = Dimensions.get('window');

const FormContainer = (props) => {
    return (
        <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={500}
        enableOnAndroid={true}
      
       
       
            contentContainerStyle={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
           
            </KeyboardAwareScrollView>    
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    }
})

export default FormContainer;