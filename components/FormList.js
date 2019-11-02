import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ListItem } from 'react-native';
import { Form } from '../models/form';

export default class FormList extends Component {

  constructor(){
    super();

  }
  

  render() {
    return (

      <View style={styles.container}>
        <FlatList
          data={this.props.Forms}
          renderItem={({item}) => (<Text key={item.Id} onPress={() => this.props.navigation.navigate('Form',{
            form: item,
            forms: this.props.Forms
          })} style={styles.item}>{item.Id.substr(0,5)} - {item.Fecha} - {item.Responsable}</Text> )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
    borderBottomWidth: 1
  },
})