//import '../_mockLocation';
import Spacer from '../components/Spacer'
import React,{ useCallback, useContext} from 'react';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome } from '@expo/vector-icons';

const TrackcreateScreen = ({ isFocused }) => {
    const {state, addLocation} = useContext(LocationContext);
    const callback = useCallback(location=> {
      addLocation(location, state.recording); 
    }, [state.recording]);

    const [err] = useLocation(isFocused || state.recording, callback);    
    return(
      
        <SafeAreaView forceInset={{top: 'always'}}>
          <Spacer/>
            <Text h2>Create a Track</Text>
            <Map/>
            
            {err ? <Text>Please Enable location services</Text>: null}
            <TrackForm/>
        </SafeAreaView>
    )
}

TrackcreateScreen.navigationOptions = {
  title:'Add track',
  tabBarIcon: <FontAwesome name="plus" size ={20}/>
}
const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackcreateScreen);
