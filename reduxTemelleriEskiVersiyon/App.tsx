import {Button, Text, View} from 'react-native';
import React from 'react';
import {legacy_createStore as createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

const initalState = {
  counter: 0,
};

const reducers = (state,action) => { //reducer güncellenmiş statei geri döner
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
};

export default function App(): React.JSX.Element {
  return (
    <Provider store={createStore(reducers, initalState)}>
      <View style={{flex:1}}>
        <First />
        <Second />
      </View>
    </Provider>
  );
}

const First = (): React.JSX.Element => {
  //useSelector statelere erişmemize olanak sağlar.
  //dispatch de reducerlara erişmemizi sağlıyor.
  
  const counter = useSelector(state => state.counter); //burada state: statelerimizin tutulduğu obje
  const dispatch = useDispatch();
  return (
    <View style={{flex:1,backgroundColor:"orange"}}>
      <Text>First</Text>
      <Text>{counter}</Text>

      <Button title='Artır' onPress={()=>dispatch({type:"UPDATE_COUNTER"})} />
    </View>
  );
}


const Second = (): React.JSX.Element => {
  const counter = useSelector(state => state.counter); //burada state: statelerimizin tutulduğu obje
  const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      <Text>Second</Text>
      <Text>{counter}</Text>
    </View>
  );
}