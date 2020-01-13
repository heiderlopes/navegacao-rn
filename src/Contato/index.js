import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';


export default class Contato extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('nome', 'Contato')
        }
    }
    render() {
        const navigation = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>O que deseja Sr. {navigation.state.params.nome}</Text>
                <Button 
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                />

                <Button 
                    title="Sobre"
                    onPress={() => navigation.navigate('Sobre')}
                />
            </View>
        );
    }
}