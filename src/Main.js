// In App.js in a new project

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { 
  Dashboard ,
  Exercise
} from '~/pages'

const AppNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard
    },
    Exercise: {
      screen: Exercise
    },
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);