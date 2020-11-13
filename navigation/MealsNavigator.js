import { createAppContainer } from "react-navigation"
import { createStackNavigator, } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoritesScreen";

import { Platform } from "react-native";
import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: "Meal Categories",
    }
  },
  CategoryMeals: {
    screen: CategoriesMealScreen,
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
})

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoriteScreen
})

export default createAppContainer(MealsFavTabNavigator)
