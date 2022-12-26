import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((cat) => cat.id === categoryId).title,
    });
  }, [navigation, categoryId]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
