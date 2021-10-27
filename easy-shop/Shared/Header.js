import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView  style={styles.header}> 
            <Image
                   style={{
                    resizeMode: "contain",
                    height: 60,
                    width: 150
                  }}
                source={require('../assets/Logo.png')}
              
                />
        </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
       
        marginBottom: 10
       
        
    }
})



export default Header;