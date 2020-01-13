import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';


export default class Sobre extends Component {
    render() {
        const navigation = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Exemplo de navegacao no React Native</Text>
                <Button 
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                />

                <Button 
                    title="Inicio"
                    onPress={() => navigation.popToTop()}
                />
            </View>
        );
    }
}