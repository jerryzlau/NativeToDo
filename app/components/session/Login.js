//import liraries
import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import { View, Text, StyleSheet,
         TextInput,
         TouchableOpacity } from 'react-native';

// create a component
class Login extends Component {
  constructor() {
    super();
    this.state = {
      "email": "",
      "password": ""
    };

    this.onSignIn = this.onSignIn.bind(this);
    this.update = this.update.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(){
    let {fields: {email, password}} = this.state;
    console.log("this is sign up");
  }

  update(field){
    return e => this.setState({
      [field]: e.nativeEvent.text
    });
  }

  // onSignIn(){
  //   debugger
  //   let { fields: { email, password } } = this.props;
  //   console.log(email.value, password.value);
  //   console.log("this is sign in ");
  // }

  onSignIn(props) {
    console.log(props);
    // console.log(email.value, password.value);
    console.log("this is sign in ");
  }

  render() {
    // let {email, password} = this.state;
    let {fields: {email, password}} = this.props;

    let renderError = field => {
      // debugger
      if(field.touched && field.error){
        return(
          <Text style={styles.formError}>
            {field.error}
          </Text>
        );
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Login
          </Text>
        </View>

        <View style={styles.field}>
          {/* <TextInput 
            onChange={this.update('email')}
            style={styles.textInput}
            value={email}
            placeholder="Email"/> */}
          <TextInput 
            {...email}
            style={styles.textInput}
            placeholder="Email"/>
            {/* {renderError(email)} */}
        </View>

        <View style={styles.field}>
          {/* <TextInput 
            onChange={this.update('password')}
            style={styles.textInput}
            value={password}
            secureTextEntry={true}
            placeholder="Password"/> */}
          <TextInput 
            {...password}
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"/>
            {/* {renderError(password)} */}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text 
              onPress={this.onSignIn(this.props)}
              style={styles.button}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text 
              onPress={this.onSignUp}
              style={styles.button}>
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
  },
  formError: {
    color: 'red'
  }
});

const validate = formProps => {
  let errors = {};

  if(!formProps.email){
    errors.email = "Please enter an email.";
  }else if(!formProps.password){
    errors.password = "Please enter a password.";
  }

  return errors;
};

//make this component available to the app
export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate: validate
}, null, null)(Login);
