import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const { navigation } = props;
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Meal Detail!'
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          navigation.goBack();
          // pop is used only in stacknavigator
          // navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
