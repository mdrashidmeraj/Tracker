import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);
    return(
        <View style = {styles.container}>
        <NavigationEvents 
            onWillFocus ={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign in to your account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign in"
            onSubmit = {signin}
        />
        <Navlink
            routeName = "SignUp"
            text = "Don't have an account? Go Back to sign up"
        />
         
     </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;