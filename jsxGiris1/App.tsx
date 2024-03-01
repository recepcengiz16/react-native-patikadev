import { StyleSheet, Text, View } from 'react-native'; 
import React from 'react';

// fromdan sonra yazığımız şeyler node modulesden geliyor kendi kütüphanelerini kullandığımızda
// react ve react-native aslında bir node js projesidir.


export default function App(): React.JSX.Element {
  
  /*
   Jsx js içerisinde xml ve html gidi kod formatı sağlıyor ve kod yazmamız bu şekilde daha kolay hale gelmiş oluyor.
    HTML ve JavaScript kodlarının ayrı dosyalarda tutularak teknolojilerin birbirinden yapay bir şekilde ayrılması yerine React, hem HTML hem de JavaScript kodu barındıran ve birbirine gevşek bir şekilde bağlı olan bileşenler (components) sayesinde ilgili işlerin ayrılmasını sağlar.

    Ekrana basabildiğimiz bütün yapılar componentdir. Ekrana basamadığımız ama özelliklerini kullandığımız yapılar da API'dir. Yani api ile konum bilgileri alabilirim. Titreşim yaptırabilirim gibi vs.

  */
  return (
    <View style={styles.container}>
      <Text> Merhaba Recep </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
});