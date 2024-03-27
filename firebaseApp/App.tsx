import {Text, View,StyleSheet} from 'react-native';
import React from 'react';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Seni Seviyorum Ceylan</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});