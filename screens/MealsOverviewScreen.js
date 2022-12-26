import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({route}) => {

  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen {categoryId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
