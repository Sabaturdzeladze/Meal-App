import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
  const { navigation } = props;

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  const catId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
