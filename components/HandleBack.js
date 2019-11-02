import React, { Component, useState } from 'react';
import { BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';

class HandleBack extends Component{

    constructor(props){
        super(props);

        this.didFocus = this.props.navigation.addListener('didFocus', 
        payload => {

        })

        
    }

    render () {
        return this.props.children;
    }
}

export default withNavigation(HandleBack);