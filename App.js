//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import ListeLivre from './components/ListeLivre';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from 'react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import ListeCategoriesScreen from './components/ListeCategoriesScreen';
import LivresParCategorieScreen from './components/LivresParCategorieScreen';
import CreerLivreScreen from './components/CreerLivreScreen';

import LivreListe from './components/LivreListe';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Livres" component={LivreListe} />
        <Stack.Screen name="Catégories" component={ListeCategoriesScreen} />
        <Stack.Screen name="LivresParCategorie" component={LivresParCategorieScreen} />
        <Stack.Screen name="CreerLivre" component={CreerLivreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;