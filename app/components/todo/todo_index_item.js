//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class TodoIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.todo.text}
        </Text>
      </View>
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
