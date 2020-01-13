// src/index.js

import Home from './Home';
import Contato from './Contato';
import Sobre from './Sobre';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const Routes = createAppContainer(
  createStackNavigator({
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

      defaultNavigationOptions: {
          headerTintColor: '#FFFFFF',
          headerStyle: {
              backgroundColor: '#006400'
          }
          //headerTitle: '',
          //headerBackTitle: null
      }
    }
  )
);

export default Routes;