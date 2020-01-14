import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';


export default class Sobre extends Component {
    static navigationOptions = {
        tabBarLabel: 'Sobre',
        headerShown: false
    };
    render() {
        const navigation = this.props.navigation;
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Sobre</Text>
            </View>
        );
    }
}