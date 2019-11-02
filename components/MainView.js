import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import FormList from './FormList';
import { Form } from '../models/form';

storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        alert(e);
        // saving error
    }
}

getData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value) {
            callback(value);
        }else{
            callback(null);
        }
    } catch(e) {
        alert(e);
        // error reading value
    }
}


export default class MainView extends Component {

    constructor(){
        super();
        this.state.loaded = false;
        
    }

    state = {
        Forms: []
    }

    componentDidMount() {

        getData("forms", (value) => {
            if(value){
                let forms = JSON.parse(value);
                this.setState({Forms: forms, loaded: true});
            }else{
                this.setState({loaded: true});
            }
            
            
        });
    }

    componentDidUpdate(){
        getData("forms", (value) => {
            let forms = JSON.parse(value);
            this.setState({Forms: forms, loaded: true});
        });
    }

    newFormPressed(){

        let newForm = new Form({});
        //this.state.Forms.push(newForm);
        //storeData("forms", JSON.stringify(this.state.Forms));

        this.props.navigation.navigate('Form', {
            form: newForm,
            forms: this.state.Forms
          });
    }

    render(){
        if(this.state.loaded){
            return (
                <View style={styles.container}>
                    <Button  title="Nuevo Formulario" onPress={() => this.newFormPressed()} />
                    <View style={{height: "100%"}}>
                        <FormList 
                                  Forms={this.state.Forms}
                                  navigation={this.props.navigation}></FormList>
                    </View>
                </View>
            )
        } else {
            return (<View><Text>Cargando...</Text></View>)
        }
        
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});