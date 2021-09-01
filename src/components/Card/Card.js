import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style= {styles.image} source={{uri: item.imgURL}} />
      <Text style= {styles.title}>{item.title}</Text>
      <Text style= {styles.price}> {item.price}</Text>
      <Text style= {styles.stock}>{item.inStock == true ? '' : 'Stokta yok.' }</Text>
    </View>
  );
};


export default Card;
