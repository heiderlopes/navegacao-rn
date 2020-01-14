import React, {Component} from 'react';
import { View, Button, Text } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Inicio'
    };
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home ;D</Text>

                <Button
                    title="Contatos"
                    onPress={()=>this.props.navigation.navigate('Contato')}
                />

                <Button
                    title="Abrir"
                    onPress={()=> this.props.navigation.toggleDrawer()}
                />
            </View>
        )
    }
}