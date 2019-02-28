import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../containers/LaunchScreen';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
  },
);

export default createAppContainer(PrimaryNav);
