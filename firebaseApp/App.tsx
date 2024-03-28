import {Text, View, StyleSheet, Button} from 'react-native';
import React from 'react';
import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

export default function App(): React.JSX.Element {
  const signUp = () => {
    auth().createUserWithEmailAndPassword("recep@gmail.com","123456789")
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  const signIn = () => {
    auth().signInWithEmailAndPassword("recep@gmail.com","123456789")
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  const signOut = () => {
    auth().signOut()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  const checkUser = ()=> {
    const user = auth().currentUser;
    console.log("current User",user);
  }

  const checkRealTimeDB = () => {
    const reference = database().ref();
    reference.once("value").then(snapshot=>{

      const response = snapshot.val();
      console.log(response);

    }).catch(err=>console.log(err));
  }

  return (
    <View style={styles.container}>
      {/* <Button title='Sign In' onPress={signIn} />
      <Button title='Sign Up' onPress={signUp} />
      <Button title='Sign Out' onPress={signOut} />
      <Button title='Check User' onPress={checkUser} /> */}
      <Button title='Check User' onPress={checkRealTimeDB} />
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