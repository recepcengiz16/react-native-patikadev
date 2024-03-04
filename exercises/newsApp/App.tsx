
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';

import newsData from "./news_data.json";


export default function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text> Merhaba Recep </Text>

      <FlatList
        data={newsData}
        renderItem={({item})=> <Text> {item.title} </Text> }
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


