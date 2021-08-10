import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";

let { width } = Dimensions.get("window");
// set defualt window screen
const ProductList = (props) => {
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}></View>
    </TouchableOpacity>
  );
};

export default ProductList;
