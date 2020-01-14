// src/index.js

import React from 'react';
import {Image} from 'react-native';

import Home from './Home';
import Contato from './Contato';
import SobreRotas from './SobreRotas';

import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Contato: {
        screen: Contato
    },
    Sobre: {
        screen: SobreRotas
    }
  }, {
      initialRouteName:'Home',

      tabBarOptions: {
          showLabel: false,
          activeTintColor: '#FF0000',
          inactiveTintColor: '#DDD',
          style: {
              //backgroundColor: '#000'
          }
      },

      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            if(focused && routeName == 'Home') {
                return <Image source={require('../src/assets/images/home_ativo.png')} style={{width: 26, height: 26}}/>
            } else if(routeName == 'Home') {
                return <Image source={require('../src/assets/images/home_inativo.png')} style={{width: 26, height: 26}}/>
            }

            if(focused && routeName == 'Contato') {
                return <Image source={require('../src/assets/images/contato_ativo.png')} style={{width: 26, height: 26}}/>
            } else if(routeName == 'Contato') {
                return <Image source={require('../src/assets/images/contato_inativo.png')} style={{width: 26, height: 26}}/>
            }

            if(focused && routeName == 'Sobre') {
                return <Image source={require('../src/assets/images/sobre_ativo.png')} style={{width: 26, height: 26}}/>
            } else if(routeName == 'Sobre') {
                return <Image source={require('../src/assets/images/sobre_inativo.png')} style={{width: 26, height: 26}}/>
            }
        }
      })
    }
  )
);

export default Routes;