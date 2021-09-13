import React ,{ useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text,Button } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import { ListItem } from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';



const TracklistScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    return(
        <>
            <NavigationEvents onWillFocus={fetchTracks}/>

            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={()=> 
                        navigation.navigate('TrackDetails', {_id: item._id})
                    }>
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    </TouchableOpacity>
                );
                }}
            />
        </>
    )
}

TracklistScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({

});

export default TracklistScreen;