
import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import NewsCard from './src/components/NewsCard';
import newsData from "./news_data.json";
import newsBannerData from "./news_banner_data.json";


export default function App(): React.JSX.Element {

  const renderItems = ({item})=> <NewsCard news={item} /> ;

  return (
    <SafeAreaView style={styles.container}>
    
     <ScrollView>
       
     </ScrollView>

     <FlatList
          keyExtractor={(item) => item.u_id.toString()}
            data={newsData}
            renderItem={ renderItems }
          />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#eceff1",
  }
});


