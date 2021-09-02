import React from 'react';
import {  View, Dimensions, StyleSheet,Button , TouchableOpacity} from 'react-native';
import {
    Container,
    Text,
    Left,
    Right,
    H1,
    ListItem,
    Thumbnail,
    Body
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
 
var { height, widht } = Dimensions.get('window');
 
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
 
const Cart = (props) => {
    // TODO create method to show total price
    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.price)
    });
    
    return(
        <>
            {props.cartItems.length ? (
                <Container>
                    <H1 style={{ alignSelf: 'center' }}>Cart</H1>
                    {props.cartItems.map(data => {
                        return (
                            <ListItem
                                style={styles.listItem}
                                key={Math.round()}
                                avatar
                            >
                                <Left>
                                    <Thumbnail  source={{uri: data.product.image ? data.product.image : 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kawasaki_Ninja_250_2018.jpg' }}/>
                                </Left>
                                <Body style={styles.body}>
                                    <Left>
                                        <Text>{data.product.name }</Text>
                                    </Left>
                                    <Right>
                                        <Text>$ {data.product.price }</Text>
                                    </Right>

                                </Body>
                            </ListItem>
                        )
                    })}
                    <View style={styles.bottomContainer}>
                        <Left>
                            <Text style={styles.price}>$ {total}</Text>
                        </Left>
                        <Right>
                            <Button title='Clear'/>
                        </Right>
                        <Right>
                            <Button title='Checkout'
                                onPress={() => props.navigation.navigate('Checkout')} />
                        </Right>
                    </View>
                </Container>
            ) : (
                    <Container style={styles.emptyContainer}>
                        <Text>looks like your cart is empty</Text>
                        <Text>Add products to your cart to get started</Text>
                    </Container>
            )}
            
    </>
    )
    
}
 
const mapStateToProps = (state) => {
    const { cartItems } = state;
    return{
        cartItems : cartItems,
    }
}

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin:10,
        alignItems: 'center',
        flexDirection: 'row'

    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation:20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    }
})
 
export default connect(mapStateToProps,null)(Cart);