import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height / 2.3,
    justifyContent: 'space-around',
  },
  image: {
    height: '75%',
    width: '100%',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: '#a0aab3',
    fontSize: 10,
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
