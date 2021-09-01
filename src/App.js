import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import Card from './components/Card';
import product_data from './product_data.json';

function App() {
  const renderItems = ({item}) => <Card item={item}></Card>;

  return (
    <View>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.text_input} placeholder="Ara..."></TextInput>
      <FlatList
        contentContainerStyle={{ paddingBottom: '30%' }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        data={product_data}
        renderItem={renderItems}>
          
        </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
    padding: 10,
  },
  text_input: {
    backgroundColor: '#eceff1',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
