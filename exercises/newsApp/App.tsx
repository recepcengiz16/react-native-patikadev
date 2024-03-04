
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';

import newsData from "./news_data.json";
import NewsCard from './src/components/NewsCard';


export default function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text> Merhaba Recep </Text>

      <FlatList
        data={newsData}
        renderItem={({item})=> <NewsCard news={item} /> }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});


