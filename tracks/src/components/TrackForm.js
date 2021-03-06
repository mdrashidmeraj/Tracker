import React, {useContext} from 'react';
import Spacer from './Spacer';
import {Input, Button} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {state:{name, recording, locations},startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return(
        <> 
            <Spacer>
                <Input 
                    value={name} 
                    onChangeText={changeName}
                    placeholder="Enter Track Name"
                />
            </Spacer>
            { 
                recording ? 
                <Button title="Stop" onPress={stopRecording}/>
                :
                <Button title="Start Recording" onPress={startRecording}/>
            }
            <Spacer/>
            {
                !recording && locations.length ?
                <Button title="Save Recording" onPress={saveTrack}/>:null
            }
            
        </>
    )
}


export default TrackForm;