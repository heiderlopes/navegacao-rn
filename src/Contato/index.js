import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';


export default class Contato extends Component {
    static navigationOptions = {
        tabBarLabel: 'Contato'
    };

    render() {
        const navigation = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Contato</Text>
            </View>
        );
    }
}