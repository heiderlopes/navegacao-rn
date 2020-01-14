import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';


export default class Projetos extends Component {
    static navigationOptions = {
        title: 'Meus projetos'
    };
    render() {
        const navigation = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Nenhum projeto até momento</Text>
                
            </View>
        );
    }
}