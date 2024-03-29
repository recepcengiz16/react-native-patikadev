import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Category from './src/pages/Category';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          contentStyle: styles.appBgColor,
          headerTitleStyle: styles.headerTitle,
          headerTitleAlign: "center"        
        }
      }>
        <Stack.Screen name="Categories" component={Category} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
   appBgColor: {
    backgroundColor: "orange"
   },
   headerTitle: {
    color:"orange",
   }
})