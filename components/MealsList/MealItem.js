import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../MealDetails';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('Details', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({
      ios: 'visible',
      android: 'hidden',
    }),
    backgroundColor: 'white',
    // Android shadow
    elevation: 4,
    // iOS shadow
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    fontAlign: 'center',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
