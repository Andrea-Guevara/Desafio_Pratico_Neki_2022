import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './../telas/Login/index';
import Cadastro from './../telas/Cadastro/index';
import Home from './../telas/Home/index';

const Stack = createNativeStackNavigator();

const Rotas = () => {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{
                headerShown: false
            }}
            />
             <Stack.Screen 
            name="Cadastro"
            component={Cadastro}
            options={{
                headerShown: false
            }}
            />
              <Stack.Screen 
            name="Home"
            component={Home}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}
export default Rotas;