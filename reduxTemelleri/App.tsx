import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

const counterSlice = createSlice({
  name: "myCounter",
  initialState: {
    counter: 0,
  },
  reducers: {
    incremented: (state) => {
      state.counter += 1;
    },
    decremented: (state) => {
      state.counter -= 1;
    },
  },
});

const {incremented,decremented} = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
}

const First = (): React.JSX.Element => {
  const count= useSelector((state)=> state.counter.counter); // state.counter store içerisindeki reducerın counter oluyor 
  const dispatch = useDispatch();

  return (
    <View style={{flex:1,backgroundColor:"orange"}}>
      <Text>First</Text>
      <Text style={{textAlign:"center"}}>{count}</Text>
      <View style={{margin:10}}>
         
      </View>
    </View>
  );
};

const Second = (): React.JSX.Element => {
  const count= useSelector((state)=> state.counter.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      <Text>Second</Text>
      <Text style={{textAlign:"center"}}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});