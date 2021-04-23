import { createStackNavigator } from '@react-navigation/stack';
import { creatDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import PerfilUser from '../screens/PerfilUser';
import DrawerStack from './DrawerStack';
import Agenda from '../screens/Agenda';
import Favoritos from '../screens/Favoritos';
import DrawerStack from '../stack/DrawerStack'
import SearchBarber from '../screens/SearchBarber';
import MainTab from './MainTab';



const Stack = createStackNavigator();


export default function MainStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="SignIn"       component={SignIn}/>
        <Stack.Screen name="SignUp"       component={SignUp}/>
        <Stack.Screen name="HomeUser"     component={DrawerStack}/>
        <Stack.Screen name="PerfilUser"   component={PerfilUser}/>
        <Stack.Screen name="MainTab"      component={MainTab}/>
        <Stack.Screen name="Agenda"       component={Agenda}/>
        <Stack.Screen name="SearchBarber" component={SearchBarber}/>
        <Stack.Screen name="Favoritos"    component={Favoritos}/>

    </Stack.Navigator>
  );
}