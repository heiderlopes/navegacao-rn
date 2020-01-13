import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';

export default class Home extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home ;D</Text>
                <Button 
                    title="Ir para Contato"
                    onPress={() => navigation.navigate('Contato', {nome: 'Heider'}) }
                />
            </View>
        )
    }
}