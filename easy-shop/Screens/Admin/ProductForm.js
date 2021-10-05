import React,{useEffect,useState} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Item, Picker } from 'native-base';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import EasyButton from '../../Shared/StyledComponents/EasyButton';
import Error from '../../Shared/Error';
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from '../../assets/common/baseUrl';
import axios from 'axios';
import * as ImagePicker from "expo-image-picker"

// useEffect for handling api calls
const ProductForm = (props) => {

    const [pickerValue, setPickerValue] = useState();
    const [brand, setBrand] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [mainImage, setMainImage] = useState();
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState();
    const [err, setError] = useState();
    const [countInStock, setCountInStock] = useState();
    const [rating, setRating] = useState();
    const [isFeatured, setIsFeature] = useState(false);
    const [richDescripton, setRichDescripton] = useState();
    const [numReviews, setNumReviews] = useState();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Categories
        axios
        .get(`${baseURL}categories`)
        .then((res) => setCategories(res.data))
        .catch((error) => alert("Error to load categories"));
        
        return () => {
            setCategories([])
        }
    }, [])


    return (
        <FormContainer title="Add Product">
            <View>
                <Image source={{ uri: mainImage }} />
                <TouchableOpacity>
                    <Text>IMAGE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Text style={{textDecorationLine: 'underline'}}>Brand</Text>
            </View>
            <Input
                placeholder="Brand"
                name="brand"
                id="brand"
                value={brand}
                onChangeText={(text) => setBrand(text)}
            />
             <View style={styles.label}>
                <Text style={{textDecorationLine: 'underline'}}>Name</Text>
            </View>
            <Input
                placeholder="Name"
                name="name"
                id="name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <View style={styles.label}>
                <Text style={{textDecorationLine: 'underline'}}>Price</Text>
            </View>
            <Input
                placeholder="Price"
                name="price"
                id="price"
                value={price}
                keyboardType={'numeric'}
                onChangeText={(text) => setPrice(text)}
            />
            <View style={styles.label}>
                <Text style={{textDecorationLine: 'underline'}}>Count in Stock</Text>
            </View>
            <Input
                placeholder="Stock"
                name="stock"
                id="stock"
                value={countInStock}
                keyboardType={'numeric'}
                onChangeText={(text) => setCountInStock(text)}
            />
             <View style={styles.label}>
                <Text style={{textDecorationLine: 'underline'}}>Description</Text>
            </View>
            <Input
                placeholder="Description"
                name="description"
                id="description"
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Item picker style={styles.picker} >
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
                    style={{ width: undefined, height:20  }}
                    enableOnAndroid={true}
                    placeholder="Select your Category"
                    selectedValue={pickerValue}
                    placeholderStyle={{ color: '#007aff' }}
                    placeholderIconColor="#007aff"
                    onValueChange={(e) => [setPickerValue(e),setCategory(e)]}
                    >
                        {categories.map((c) => {
                             return <Picker.Item key={c.id} label={c.name} value={c._id} />
                        })}
                    </Picker>
            </Item>
            {err ? <Error message={err} /> : null}
            <View style={styles.buttonContainer}>
                <EasyButton
                    large
                    primary
                    // onPressEvent

                >
                    <Text style={styles.buttonText}>Confirm</Text>
                 </EasyButton>
            </View>
       </FormContainer>
    )
}

const styles = StyleSheet.create({
    label: {
        width: '80%',
        marginTop:10
    },
    picker: {
        padding: 10,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 20,
        alignItems: 'center',
        alignContent: 'center',
        },
            buttonContainer: {
                width: "80%",
                marginBottom: 80,
                marginTop: 20,
                alignItems: "center"
                },
        buttonText: {
            color: "white"
        },
    
    
})
export default ProductForm;