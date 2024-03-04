import { Text, View, Image } from 'react-native'
import React from 'react';
import styles from "./NewsCard.style";

export default function NewsCard(props) {
  return (
    <View style={styles.container} >
      <Image style={styles.image} />  
      <Text style={styles.title} >NewsCard</Text>
      <Text style={styles.description} >NewsCard</Text>
    </View>
  )
}
