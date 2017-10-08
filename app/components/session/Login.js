//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,
         TextInput,
         TouchableOpacity } from 'react-native';

// create a component
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Login
          </Text>
        </View>

        <View style={styles.field}>
          <TextInput style={styles.textInput}
                      placeholder="Email"/>
        </View>

        <View style={styles.field}>
          <TextInput style={styles.textInput}
                      placeholder="Password"/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  titleContainer: {
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 30
  },
  field: {
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 26
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    fontSize: 25
  }
});

//make this component available to the app
export default Login;
