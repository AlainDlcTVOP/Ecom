
import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'http://5d79-213-102-85-120.ngrok.io/api/v1/'
: baseURL = 'http://localhost:3000/api/v1/'
}

export default baseURL;