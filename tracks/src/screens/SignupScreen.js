import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage } = useContext(AuthContext);
    
    
    return(
        <View style = {styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
           <AuthForm
               headerText="Sign up for Trackers"
               errorMessage={state.errorMessage}
               submitButtonText="Sign up"
               onSubmit = {signup}
           />
           <Navlink
                routeName = "SignIn"
               text = "Already have an account? Sign in instaed"
           />
            
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:150
    },
    
    
});

export default SignupScreen;