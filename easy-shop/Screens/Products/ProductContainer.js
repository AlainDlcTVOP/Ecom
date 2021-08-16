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
import CategoryFilter from "./CategoryFilter";

const data = require('../../assets/data/products.json');
const productscategories = require('../../assets/data/categories.json');
var { height } = Dimensions.get('window')
 
 
const ProductContainer = () =>{
 
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
 
    useEffect(() =>{
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(productscategories);
        setActive(-1);
        setInitialState(data);
 
        return () =>{
            setProducts([])
            setProductsFiltered([])
            setFocus();
            setCategories([]);
            setActive();
            setInitialState(); //to prevent the memory leaks
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

    // Categories filter the products
    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category._id === ctg),
                        setActive(true)
                    ),
                ];
        }
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
            <View>
            <View>
              <Banner />
            <View>
                <CategoryFilter
                    categories={categories}
                    CategoryFilter={changeCtg}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
             />
            </View>
            </View>
            <View style={styles.listContainer}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <ProductList 
                key={item.brand} 
                item={item}/> }
                keyExtractor={item => item.brand}
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
