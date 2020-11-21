import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import MealList from "../components/MealList"
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = props =>{
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No Favorite Meals Found. Start adding some!</Text>
      </View>
    )

  }

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  )
}

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorite",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles= StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoriteScreen