import React, {useEffect} from "react";
import {  LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Navigatiors
import Main from './Navigator/Main';

// Screens

import Header from "./Shared/Header";



export default function App() {

  LogBox.ignoreLogs(['Remote debugger']);
  return (
    
    <Provider store={store}>
    <NavigationContainer>
      <Header />
      <Main />
     
    </NavigationContainer>
  </Provider>
  );
}

