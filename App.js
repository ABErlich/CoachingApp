import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from './components/MainView';
import FormView from './components/FormView';
import FormList from './components/FormList';

export class App extends Component {

  render (){
    return (
      <MainView></MainView>
    )
  }
  
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainView
    },
    Form: {
      screen: FormView
    },
    FormList:{
      screen: FormList
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);