import React, {useEffect} from "react";
import {LogBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Toast from "react-native-toast-message";

// Redux
import {Provider} from 'react-redux';
import store from './Redux/store';

// Context API
import Auth from "./Context/store/Auth";

// Navigatiors
import Main from './Navigator/Main';

// Screens

import Header from "./Shared/Header";


export default function App() {

    LogBox.ignoreLogs(['Remote debugger']);
    return (
        <Auth>
            <Provider store={store}>
                <NavigationContainer>
                    <Header/>
                    <Main/>
                    <Toast ref={
                        (ref) => Toast.setRef(ref)
                    }/>

                </NavigationContainer>
            </Provider>
        </Auth>

    );
}
