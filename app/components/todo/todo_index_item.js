//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,
         TouchableOpacity } from 'react-native';

// create a component
class TodoIndexItem extends Component {
  constructor(props) {
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf(){
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.deleteSelf}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.todo.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: "#ccc",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    
  }
});

//make this component available to the app
export default TodoIndexItem;
