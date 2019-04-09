import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import LaunchScreen from '../containers/LaunchScreen';

// Components
import NavTabIcon from './NavTabIcon';
import TabHeaderLogo from './TabHeaderLogo';

// Colors
import theme from '../theme/project/index';

// Manifest of possible screens
const MainApp = createBottomTabNavigator(
  {
    home: {
      screen: LaunchScreen,
      navigationOptions: {
        title: 'Home',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="homeTab"
            iconName="home"
          />
        ),
      },
    },
    camera: {
      screen: LaunchScreen,
      navigationOptions: {
        title: 'Camera',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="cameraTab"
            iconName="camera"
          />
        ),
      },
    },
    microphone: {
      screen: LaunchScreen,
      navigationOptions: {
        title: 'Voice',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="microphoneTab"
            iconName="microphone"
            iconType="FontAwesome"
          />
        ),
      },
    },
    addManually: {
      screen: LaunchScreen,
      navigationOptions: {
        title: 'Add',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="addManuallyTab"
            iconName="plus"
            iconType="Entypo"
          />
        ),
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'home',
    lazy: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: theme.brandPrimary,
      style: {
        height: 60,
        padding: 5,
      },
    },
  },
);

const PrimaryNav = createStackNavigator(
  {
    main: {
      screen: MainApp,
    },
    ingredientsList: {
      screen: LaunchScreen,
    },
  },
  {
    // Default config for all screens
    initialRouteName: 'main',
    defaultNavigationOptions: {
      headerTitle: <TabHeaderLogo />,
      headerTintColor: theme.brandPrimary,
      headerStyle: {
        backgroundColor: 'white',
        color: theme.brandPrimary,
      },
      headerTitleStyle: { color: theme.brandPrimary },
      headerLeft: null,
      headerRight: null,
    },
  },
);

export default createAppContainer(PrimaryNav);
