import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App(): React.JSX.Element {

  //mesela number boolean gibi yapılarda süslü parantez kullanabiliriz, string de de kullanabiliriz süslü parantezi. Normal de kullanabliriz. 

  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})