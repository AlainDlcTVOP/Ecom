import { Platform } from "react-native";

//let baseURL = 'https://tvop-server.herokuapp.com/api/v1/';

let baseURL = '';

{
    Platform.OS == "android"
      ? (baseURL = "http://27ec-213-102-85-120.ngrok.io/api/v1/")
      : (baseURL = "http://localhost:3000/api/v1/");
  }


export default baseURL; 