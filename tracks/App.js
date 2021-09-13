import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackcreateScreen from './src/screens/TrackcreateScreen';
import TrackdetailsScreen from './src/screens/TrackdetailsScreen';
import TracklistScreen from './src/screens/TracklistScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TracklistScreen,
  TrackDetails: TrackdetailsScreen
})
trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name = "th-list" size = {20} />
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth :ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
    SignIn: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    CreateTrack: TrackcreateScreen,
    Account: AccountScreen,
  })
});

const App =  createAppContainer(switchNavigator);

export default() => {
  return(
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = {(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
      </TrackProvider>
  );
}