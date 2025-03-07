import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import Button from "./components/button/index.js"
import Form from './components/form/index.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/homepage/index.js';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateRecipe from './screens/create-recipe/index.js';
import Account from './screens/account/index.js';
import { faHouse,faPlus,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import RecipeScreen from './screens/recipe-screen/index.js';
import { RecipeProvider } from './react-logic/context/RecipesContext.js';

const HomeTabs = createBottomTabNavigator({
  initialRouteName:"Home",
  screenOptions:{
    headerStyle:{
      backgroundColor:"#fae248"
    },
    headerTintColor:"white"
  },
  screens:{
    Home:{
      screen:Homepage,
      options:{
        tabBarIcon:() => <FontAwesomeIcon icon={faHouse} color={"#fae248"} size={24}/>
      }
    },
    "Create Recipe":{
      screen:CreateRecipe,
      title:"Create Recipe",
      options:{
        tabBarIcon:() => <FontAwesomeIcon icon={faPlus} color={"#fae248"} size={24}/>
      }
    },
    Profile:{
      screen:Account,
      options:{
        tabBarIcon:() => <FontAwesomeIcon icon={faUser} color={"#fae248"} size={24}/>
      }
    },
  }
})

const RootStack = createNativeStackNavigator({
  screenOptions:{
    headerShown:false
  },
  screens:{
    Home:HomeTabs,
    RecipeScreen:RecipeScreen
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <RecipeProvider>
      <Navigation />
    </RecipeProvider>
  );
}