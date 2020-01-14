// src/index.js

import React from 'react';
import {Image} from 'react-native';

import Home from './Home';
import Contato from './Contato';
import Sobre from './Sobre';

import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';


const Routes = createAppContainer(
    createDrawerNavigator({
    Home: {
        screen: Home
    },
    Contato: {
        screen: Contato
    },
    Sobre: {
        screen: Sobre
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
    }
  )
);

export default Routes;