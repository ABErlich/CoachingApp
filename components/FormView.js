import React, { Component, useState } from 'react';
import { SectionList, FlatList, StyleSheet, Text, View, Switch, Alert, BackHandler, TextInput, AsyncStorage, Button } from 'react-native';
import { Form } from '../models/form';
import { Item } from '../models/item';

export default class FormView extends Component {

    //const [value, onChangeText] = React.useState('Useless Placeholder');

    constructor (props){
      super(props);

    }

    saveForm(form){
        let forms = this.props.navigation.getParam('forms');

        if(forms){
          forms = forms.filter(f => f.Id != form.Id);
        }else{
          forms = [];
        }
        
        forms.push(form);

        AsyncStorage.setItem("forms", JSON.stringify(forms));
        alert("Formulario guardado");
    }
  
    handleValueSwitch(item, Respuesta){
      item.Respuesta = Respuesta;

      let form = this.props.navigation.getParam('form');
      let resultadoTotal = 0
      
      resultadoTotal =  resultadoTotal + form.ConectarItems.filter(i => i.Respuesta).map(i => i.Valor).reduce((a,b) => a + b, 0);
      resultadoTotal = resultadoTotal + form.InspirarItems.filter(i => i.Respuesta).map(i => i.Valor).reduce((a,b) => a + b, 0);
      resultadoTotal = resultadoTotal + form.ComprometerItems.filter(i => i.Respuesta).map(i => i.Valor).reduce((a,b) => a + b, 0);

      form.Resultado = resultadoTotal;

      this.setState({})
    }

    handleQuestionPressed(consejo){
      Alert.alert("Consejo", consejo);
    }

    onResponsableChangeText(form,text){
      form.Responsable = text;
      this.setState({});
    }

    onAsesorChangeText(form,text){
      form.Asesor = text;
      this.setState({});
    }


    render() {

        const { navigation } = this.props;
        let form = navigation.getParam('form');
        
        return (
          <View style={styles.container}>
            <Button title="Guardar" onPress={() => this.saveForm(form)} />
            <SectionList
              sections={[
                {title: 'CONECTAR', data: form.ConectarItems},
                {title: 'COMPROMETER', data: form.ComprometerItems},
                {title: 'INSPIRAR', data: form.InspirarItems}
              ]}
              renderItem={({item}) => 
              <View style={{flex:1, flexDirection:"row", borderBottomWidth: 1, padding:10}}>
                <View style={{width:"85%"}}>
                  <Text onPress={() => this.handleQuestionPressed(item.Consejo)}>{item.Pregunta}</Text>
                </View>
                <Switch value={item.Respuesta} onValueChange={(value) => this.handleValueSwitch(item, value)} style={{width:"15%"}} />
                
              </View>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
            
            <View style={{padding: 5, flexDirection:'row', backgroundColor:'darkseagreen'}}>
              <Text>Responsable: </Text>
              <TextInput style={{ width: "70%", borderColor:'gray', borderWidth:1}} 
              onChangeText={text => this.onResponsableChangeText(form,text)}
              value={form.Responsable}/>
            </View>
            <View style={{padding: 5, flexDirection:'row', backgroundColor:'darkseagreen'}}>
              <Text>Asesor: </Text>
              <TextInput onChangeText={text => this.onAsesorChangeText(form,text)}
               style={{ width: "70%", borderColor:'gray', borderWidth:1}} value={form.Asesor}/>
            </View>
            <View style={{padding: 5, backgroundColor:'darkseagreen'}}>
              <Text>Resultado: {form.Resultado}</Text>
            </View>
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    height:30,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(220,220,220,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
