import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://34.123.176.124:8080",
});

// api.interceptors.request.use(async function(config){
//   let token = await AsyncStorage.getItem("token")
//   config.headers.Authorization = 'Bearer' + token
//   return config 
// }, (err) => {
//   return Promise.reject(err)
// })
export default api;
