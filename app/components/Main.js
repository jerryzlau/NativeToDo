//import liraries
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, 
          Text, 
          StyleSheet,
          StatusBar,
          TextInput,
          ScrollView } from 'react-native';
import TodoIndexItem from './todo/todo_index_item';

// create a component
class Main extends Component {
  constructor() {
    super();
    this.state = {
      newTodoText: ""
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.update = this.update.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  update(e){
    e.preventDefault();
    this.setState({
      newTodoText: e.nativeEvent.text
    });
  }

  addNewTodo(){
    let {newTodoText} = this.state;
    if(newTodoText && newTodoText !== ""){
      this.setState({
        newTodoText: ""
      });
      console.log(newTodoText);
    }
  }
  

  renderTodos(){
    const tempTodos = [
      {
        id: "91481293782103",
        text: "Eat Dinner"
      },
      {
        id: "398472384298347",
        text: "Do work again!"
      }
    ];
    return tempTodos.map(todo => {
      return(
        <TodoIndexItem todo={todo} key={todo.id} id={todo.id} />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.topBar}>
          <Text style={styles.title}>
            To-Do List
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            onChange={this.update}
            onSubmitEditing={this.handleSubmit}
            returnKeyType="done"
            placeholder={this.addNewTodo}
            value={this.state.newTodoText}
            style={styles.input} /> 
        </View>
        
        <ScrollView automaticallAdjustContentInsets={false}>
          {this.renderTodos()}
        </ScrollView>
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
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  }

});

//make this component available to the app
export default Main;


