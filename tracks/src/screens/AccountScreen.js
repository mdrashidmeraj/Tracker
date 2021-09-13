import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Text style = {{fontSize:48}}>Account Screen</Text>
            <Spacer/>
                <Button title="SignOut"
                    onPress={signout}
                />
            
        </SafeAreaView>
    )
}
AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name = "gear" size = {20}/>
}
const styles = StyleSheet.create({

});

export default AccountScreen;