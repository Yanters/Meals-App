import { View, Text, StyleSheet } from 'react-native';
const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#df9b71',
    margin: 8,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginHorizontal: 6,
    marginVertical: 8,
    borderBottomColor: '#d59770',
    borderBottomWidth: 2,
  },
});
