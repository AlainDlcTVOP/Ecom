import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
import SearchProducts from './SearchProducts';
import ProductList from "./ProductList";
import Banner from "../../Shared/Banner";

const data = require('../../assets/data/products.json');
var { height } = Dimensions.get('window')
 
 
const ProductContainer = () =>{
 
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
 
    useEffect(() =>{
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
 
        return () =>{
            setProducts([])
            setProductsFiltered([])
            setFocus();
        }
    }, [])
 
    const searchProduct = (text) =>{
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };
 
    const openList = () =>{
        setFocus(true);
    } 
 
    const onBlur = () =>{
        setFocus(false);
    }
 
    return(
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name='ios-search' />
                    <Input 
                    placeholder="Search"
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                    />
                    {focus==true ? (
                        <Icon onPress={onBlur} name="ios-close" />
                    ):null}
                </Item>
            </Header>
            {focus==true ? (
                <SearchProducts
                productsFiltered={productsFiltered}
                />
            ):(
            <View style={StyleSheet.container}>
            <View >
                <Banner />
            </View>
            <View style={{marginTop:100}}>
            <FlatList
               
                data={products}
                renderItem={({item}) => <ProductList 
                key={item.id} 
                item={item}
                /> }
                numColumns={2}
                keyExtractor={item => item.name}
            />
            </View>
        </View>
            )}
            
        </Container>
        
    )
}
 
const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      height: height,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
 
 
export default ProductContainer;
