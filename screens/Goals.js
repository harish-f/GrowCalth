import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {Picker} from '@react-native-picker/picker';

const Goals = (state) => {
    const [selectedSteps, setSelectedSteps] = useState();
    const [selectedDistance, setSelectedDistance] = useState();
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Text style={{margin: 15, fontWeight: '700', fontSize: 34}}>Set your Target 🎯</Text>
            <View>
          <View style={{height: 30, backgroundColor: '#F7826F', justifyContent: 'center', alignItems: 'center', top: 10}}>
          <Text style={{fontSize: 17, textAlign: 'center'}}>S T E P  C O U N T</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Picker
            style={{marginTop: 10, backgroundColor: '#C7CCDB', width: windowWidth-50, borderRadius:20}}
                selectedValue={selectedSteps}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedSteps(itemValue)
             }>
            <Picker.Item label="1,000" value="1,000" />
            <Picker.Item label="2,000" value="2,000" />
            <Picker.Item label="3,000" value="3,000" />
            <Picker.Item label="4,000" value="4,000" />
            <Picker.Item label="5,000" value="5,000" />
            <Picker.Item label="6,000" value="6,000" />
            <Picker.Item label="7,000" value="7,000" />
            <Picker.Item label="8,000" value="8,000" />
            <Picker.Item label="9,000" value="9,000" />
            <Picker.Item label="10,000" value="10,000" />
            <Picker.Item label="11,000" value="11,000" />
        </Picker>
        <Text>{selectedSteps}</Text>
        </View>
        <View style={{height: 30, backgroundColor: '#F7826F', justifyContent: 'center', alignItems: 'center', top: 20}}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>D I S T A N C E</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Picker
            style={{marginTop: 20, backgroundColor: '#C7CCDB', width: windowWidth-50, borderRadius:20}}
                selectedValue={selectedDistance}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedDistance(itemValue)
             }>
            <Picker.Item label="1km" value="1km" />
            <Picker.Item label="2km" value="2km" />
            <Picker.Item label="3km" value="3km" />
            <Picker.Item label="4km" value="4km" />
            <Picker.Item label="5km" value=" 5km" />
            <Picker.Item label="6km" value="6km" />
             <Picker.Item label="7km" value="7km" />
            <Picker.Item label="8km" value="8km" />
            <Picker.Item label="9km" value="9km" />
            <Picker.Item label="10km" value="10km" />
        </Picker>
        <Text>{selectedDistance}</Text>
        </View>
      </View>

    </View>
    )
}

export default Goals;

const styles = StyleSheet.create({})
{/* <Picker.Item label="1,000" value="1,000" />
            <Picker.Item label="2,000" value="2,000" />
            <Picker.Item label="3,000" value="3,000" />
            <Picker.Item label="4,000" value="4,000" />
            <Picker.Item label="5,000" value="5,000" />
            <Picker.Item label="6,000" value="6,000" />
            <Picker.Item label="7,000" value="7,000" />
            <Picker.Item label="8,000" value="8,000" />
            <Picker.Item label="9,000" value="9,000" />
            <Picker.Item label="10,000" value="10,000" />
            <Picker.Item label="11,000" value="11,000" /> */}


            // <Picker.Item label="1km" value="1km" />
            // <Picker.Item label="2km" value="2km" />
            // <Picker.Item label="3km" value="3km" />
            // <Picker.Item label="4km" value="4km" />
            // <Picker.Item label="5km" value=" 5km" />
            // <Picker.Item label="6km" value="6km" />
            // <Picker.Item label="7km" value="7km" />
            // <Picker.Item label="8km" value="8km" />
            // <Picker.Item label="9km" value="9km" />
            // <Picker.Item label="10km" value="10km" />