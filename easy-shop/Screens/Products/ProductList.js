import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");
// set defualt window screen
const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View
        style={{
          width: width / 2,
          backgroundColor: "gainsboro",
        }}
      >
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
