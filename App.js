import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import { Provider  } from 'react-redux';
import {configureStore} from './app/store/store';
import Main from './app/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});
