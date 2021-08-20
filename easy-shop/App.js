import React from "react";
import {  LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Navigatiors
import Main from './Navigator/Main';

// Screens

import Header from "./Shared/Header";

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
    <Header />
    <Main />
   
  </NavigationContainer>
  );
}

