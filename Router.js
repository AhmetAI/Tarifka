import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="CategoriesScreen" component={Categories} 
        options={{title: "Categories", 
        headerTitleStyle: {color: "orange"},
        headerTitleAlign: 'center'
      }}
      />
        
        <Stack.Screen name="MealsScreen" component={Meals} 
        options={{title: "Meals", 
        headerTitleStyle: {color: "orange"},
        headerTitleAlign: 'center',
        headerTintColor: "orange"
      }} 
        />

        <Stack.Screen name="DetailScreen" component={Detail} 
        options={{title: "Detail", 
        headerTitleStyle: {color: "orange"},
        headerTitleAlign: 'center',
        headerTintColor: "orange"
      }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
